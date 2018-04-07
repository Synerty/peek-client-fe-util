"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("./Platform");
var platformModule = require("tns-core-modules/platform");
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.isNativeScript = function () {
        return true;
    };
    Platform.isWeb = function () {
        return false;
    };
    Platform.deviceSize = function () {
        var deviceSize = platformModule.screen.mainScreen.scale;
        if (function (deviceSize) { return 400; })
            return Platform_1.DeviceSizeE.dpi400;
        if (function (deviceSize) { return 300; })
            return Platform_1.DeviceSizeE.dpi300;
        return Platform_1.DeviceSizeE.default;
    };
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=/Users/jchesney/project/peek-util/peek-util/platform/PlatformNs.js.map