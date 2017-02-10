
<a style="float:right;font-size:12px;" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/ble/index.ts#L1">
  Improve this doc
</a>

# BLE
<!-- end header block -->

```
$ npm install @ionic-native/ble --save
```

## [Usage Documentation](https://ionicframework.com/docs/v2/native/ble/)

Cordova Repo: [https://github.com/don/cordova-plugin-ble-central](https://github.com/don/cordova-plugin-ble-central)

<!-- description -->
This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.

The plugin provides a simple JavaScript API for iOS and Android.

- Scan for peripherals
- Connect to a peripheral
- Read the value of a characteristic
- Write new value to a characteristic
- Get notified when characteristic's value changes

Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.

Simultaneous connections to multiple peripherals are supported.

<!-- @platforms tag -->
## Supported platforms

- iOS
- Android

<!-- @platforms tag end -->
<!-- end for prop in method.decorators[0].argumentInfo -->
<!-- end content block -->
<!-- end body block -->