const bitRateMapping = { "10kbit": "S0", "20kbit": "S1", "50kbit": "S2", "100kbit": "S3", "125kbit": "S4", "250kbit": "S5", "500kbit": "S6", "800kbit": "S7", "1Mbit": "S8" }

const getSpeedCommandFromBitrate = (bitRate) => {
    const command = bitRateMapping[bitRate];
    if (command === undefined) {
        alert(`Invalid bitrate: ${bitRate}, using the default of 500kbit`)
        return bitRateMapping["500kbit"];
    }
    return bitRateMapping[bitRate];
}

const urlConfig = (params) => ({
    deviceCount: parseInt(params.deviceCount ?? 1),
    serialBaudRate: parseInt(params.serialBaudRate ?? 115200),
    canBitRateCommand: getSpeedCommandFromBitrate(params.canBitRate ?? "500kbit")
});

const getUrlParams = () => {
    return Object.fromEntries(new URLSearchParams(window.location.search).entries());
}

export const slcanConfigDialog = () => {
    const params = getUrlParams();
    return urlConfig(params);
}

// not used yet, can't connect to serial after prompt
/* const promptConfig = () => ({
    deviceCount: 1,
    serialBaudRate: parseInt(prompt("Whats the serial baud rate? (e.g. 115200, 250000, 500000)", "115200")),
    canBitRateCommand: parseInt(prompt(`Whats the can bus bitrate? (use one of the following: ${Object.keys(bitRateMapping)}`, "500kbit"))
});*/
