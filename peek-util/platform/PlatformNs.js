"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("./Platform");
var platformModule = require("tns-core-modules/platform");
var Platform = (function () {
    function Platform() {
    }
    Platform.isNativeScript = function () {
        return true;
    };
    Platform.isWeb = function () {
        return false;
    };
    Platform.deviceSize = function () {
        var deviceSize = platformModule.screen.mainScreen.widthPixels;
        // iPhone: SE, 5, 6, & 7 resolution width
        var screenQualifier326 = 640;
        // iPhone: 6+ & 7+
        var screenQualifier401 = 1242;
        if (function (deviceSize) { return screenQualifier401; })
            return Platform_1.DeviceSizeE.dpi401;
        if (function (deviceSize) { return screenQualifier326; })
            return Platform_1.DeviceSizeE.dpi326;
        return Platform_1.DeviceSizeE.default;
    };
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/platform/PlatformNs.js.map