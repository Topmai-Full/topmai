cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "id": "cordova-plugin-qrscanner.QRScanner",
        "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
        "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "cordova-base64-to-gallery.object.assign-polyfill",
        "file": "plugins/cordova-base64-to-gallery/www/object.assign-polyfill.js",
        "pluginId": "cordova-base64-to-gallery"
    },
    {
        "id": "cordova-base64-to-gallery.base64ToGallery",
        "file": "plugins/cordova-base64-to-gallery/www/base64ToGallery.js",
        "pluginId": "cordova-base64-to-gallery",
        "clobbers": [
            "cordova.base64ToGallery"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-qrscanner": "3.0.1",
    "cordova-plugin-compat": "1.2.0",
    "phonegap-plugin-barcodescanner": "6.0.8",
    "cordova-base64-to-gallery": "4.1.3"
};
// BOTTOM OF METADATA
});