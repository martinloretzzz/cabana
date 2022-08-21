import { parseCanMessage } from './slcan-parser';
import { slcanConfigDialog } from "./slcan-config-dialog"

// Slcan docs: https://www.lawicel.com/can232/can232.pdf
// CANable firmware docs: https://github.com/normaldotcom/canable-fw

// TODO: implement message batching
// TODO: test if extended frames are working return a big T as prefix?
// TODO: test multidevice support with different busses

class Panda {

    constructor() {
        this.messageListener = undefined;
        this.errorListener = undefined;
        this.connected = false;
    }

    // only supports one eventlistener, returns unlistener
    onMessage(onMessageCallback) {
        this.messageListener = onMessageCallback;
        return () => (this.messageListener = undefined);
    };

    // only supports one eventlistener, returns unlistener
    onError(onErrorCallback) {
        this.errorListener = onErrorCallback;
        return () => (this.errorListener = undefined);
    };

    broadcastError(message) {
        console.error(message);
        this.errorListener.forEach((callback) => callback(message));
    }

    async start() {
        try {
            const config = slcanConfigDialog();
            this.connectMultiple(config);
            this.connected = true;
        } catch (error) {
            this.broadcastError(error);
        }
    }

    async connectMultiple({ deviceCount, serialBaudRate, canBitRateCommand }) {
        // JS is weird, if you use a loop, it won't work, user has to start connect action from buttonpress
        await this.connect({ serialBaudRate, canBitRateCommand, busId: 0 });
        if (deviceCount > 1) await this.connect({ serialBaudRate, canBitRateCommand, busId: 1 });
        if (deviceCount > 2) await this.connect({ serialBaudRate, canBitRateCommand, busId: 2 });
        if (deviceCount > 3) await this.connect({ serialBaudRate, canBitRateCommand, busId: 3 });
    }

    async connect({ serialBaudRate = 115200, canBitRateCommand = "S6", busId = 0 } = {}) {
        if (!("serial" in navigator)) throw new Error("No serial port support");

        const port = await navigator.serial.requestPort({});
        await port.open({ baudRate: serialBaudRate });

        const onReceived = (message) => {
            const canMessage = parseCanMessage(message);
            if (this.messageListener !== undefined && canMessage !== undefined && this.connected) {
                const time = performance.now() / 1000;
                this.messageListener([{
                    time,
                    canMessages: [{
                        bus: busId,
                        busTime: time,
                        ...canMessage
                    }]
                }]);
            }
        };

        let lineBuffer = "";
        port.readable
            // eslint-disable-next-line no-undef
            .pipeThrough(new TextDecoderStream())
            .pipeTo(new WritableStream({
                write(chunk) {
                    lineBuffer += chunk;
                    const lines = lineBuffer.split(/\r/);
                    if (lines.length > 1) {
                        lineBuffer = lines.pop();
                        onReceived(lines.pop().trim());
                    }
                },
            }));

        this.sendCommand(port, canBitRateCommand);
        this.sendCommand(port, "O");
    };

    generateCommand = (command) => {
        const commandBytes = Uint8Array.from(command.split("").map((letter) => letter.charCodeAt(0)));
        const endOfCommand = 0x0d; // CR
        return new Uint8Array([...commandBytes, endOfCommand]);
    }

    sendCommand(port, command) {
        if (!(port && port.writable)) return;
        console.log(`Send ${command}`);

        const writer = port.writable.getWriter();
        writer.write(this.generateCommand(command));
        writer.releaseLock();
    };
}

export default Panda;