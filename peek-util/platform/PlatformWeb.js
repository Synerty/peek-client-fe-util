"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("./Platform");
var Platform = (function () {
    function Platform() {
    }
    Platform.isNativeScript = function () {
        return false;
    };
    Platform.isWeb = function () {
        return true;
    };
    Platform.deviceSize = function () {
        return Platform_1.DeviceSizeE.default;
    };
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/platform/PlatformWeb.js.map