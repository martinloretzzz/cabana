/* eslint-env jest */
import { parseCanMessage } from './slcan-parser';

// Examples from slcan docs: https://www.lawicel.com/can232/can232.pdf

describe('slcan can parser', () => {
    it('t10021133[CR]: Sends an 11bit CAN frame with ID = 0x100, 2 bytes with the value 0x11 and 0x33.', () => {
        expect(parseCanMessage("t10021133")).toStrictEqual({ address: 256, data: '1133' });
    });

    it('t0200[CR]: Sends an 11bit CAN frame with ID = 0x20 & 0 bytes', () => {
        expect(parseCanMessage("t0200")).toStrictEqual({ address: 32, data: '' });
    });

    it('t00180001000001000000[CR]: Odrive heartbeat', () => {
        expect(parseCanMessage("t00180001000001000000")).toStrictEqual({ address: 1, data: '0001000001000000' });
    });

    it('T0000010021133[CR]: Sends a 29bit CAN frame with ID = 0x100, 2 bytes with the value 0x11 and 0x33', () => {
        expect(parseCanMessage("T0000010021133")).toStrictEqual({ address: 256, data: '1133' });
    });
});
