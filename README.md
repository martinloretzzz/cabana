

<img src="https://cabana.comma.ai/img/cabana.jpg" width="640" height="267" />

# Slcan Cabana ([martinloretzzz.github.io/cabana/](https://martinloretzzz.github.io/cabana/))

This is a fork of [cabana](https://cabana.comma.ai) supports slcan(also known as Lawicel protocol) devices instead of the comma panda.

**This fork doesn't support pandas and or comma connect, only use realtime streaming with slcan devices.**

### Config:
The device count, serial baud rate and the can bus bitrate can be configured by url params:
- **deviceCount**: 1-4, default: 1
- **serialBaudRate**: integer, default: 115200
- **canBitRate**: 10kbit, 20kbit, 50kbit, 100kbit, 125kbit, 250kbit, 500kbit, 800kbit, 1Mbit, only these values are allowed, default: 500kbit

The common automotive bitrate seams to be 500kbit, but I can't find a good source

Examples:
- Use one can interface for automotive: [https://martinloretzzz.github.io/cabana/](https://martinloretzzz.github.io/cabana/)

- Use one can interface and an odrive(bitrate: 250kbit): [https://martinloretzzz.github.io/cabana/?canBitRate=250kbit](https://martinloretzzz.github.io/cabana/?canBitRate=250kbit)

- Use two slcan interfaces for automotive(bitrate: 500kbit): [https://martinloretzzz.github.io/cabana/?deviceCount=2&canBitRate=500kbit](https://martinloretzzz.github.io/cabana/?deviceCount=2&canBitRate=500kbit)

- Use a slcan interface with specific serial baud rate of 57600: [https://martinloretzzz.github.io/cabana/?serialBaudRate=57600](https://martinloretzzz.github.io/cabana/?serialBaudRate=57600)

### Supported devices:
All slcan/Lawicel compatible usb/can interfaces
To read multiple can buses, you need multiple usb/can interfaces

I use a CANable, that works really well.

Devices(only CANable is tested and works for sure, CANtact also likely, because it uses the same fw):
- [CANable](https://canable.io/)
- [CANtact](https://www.linklayer.com/tools)
- [CANUSB](https://www.canusb.com/)
- [DIY Esp32](https://github.com/NewTec-GmbH/esp32-can-iot)
- [DIY STM32](https://github.com/walmis/stm32-slcan)

### Slcan docs:
- [Slcan/Lawicel protocol](https://www.lawicel.com/can232/can232.pdf)
- [canable firmware](https://github.com/normaldotcom/canable-fw)
 
### Questions: 
martinloretzzz#2635 on the comma.ai discord

## Original readme below

Cabana is a tool developed to view raw CAN data. One use for this is creating and editing [CAN Dictionaries](http://socialledge.com/sjsu/index.php/DBC_Format) (DBC files), and the tool provides direct integration with [commaai/opendbc](https://github.com/commaai/opendbc) (a collection of DBC files), allowing you to load the DBC files direct from source, and save to your fork. In addition, you can load routes from [comma connect](https://connect.comma.ai).

## Usage Instructions

See [openpilot wiki](https://github.com/commaai/openpilot/wiki/Cabana)

## Setup

```bash
yarn
yarn run sass
```

## Development

```bash
yarn start
```

## Contributing

```bash
yarn run test
```

## Deploy to Production

```bash
npm version patch
git push origin master --tags # push version patch
yarn run deploy # builds and deploys to github pages
```

### errors building libusb modules?

You can safely ignore those errors even though it returns 1. If you'd like them to go away just because they're annoying, install libusb-dev...

```bash
sudo apt-get install -y libusb-dev libudev-dev
```

or

```bash
brew install libusb
```

# Create React App documentation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) v1.x, then upgraded to `react-scripts` v3.x and use [craco](http://npm.im/@craco/craco) to customize it.

You can read the create react app [documentation here](https://create-react-app.dev/docs/getting-started)

We use craco to easily add [worker-loader](https://npm.im/worker-loader).

## License

[MIT](/LICENSE)

**THIS IS ALPHA QUALITY SOFTWARE FOR RESEARCH PURPOSES ONLY. THIS IS NOT A PRODUCT. YOU ARE RESPONSIBLE FOR COMPLYING WITH LOCAL LAWS AND REGULATIONS. NO WARRANTY EXPRESSED OR IMPLIED.**
