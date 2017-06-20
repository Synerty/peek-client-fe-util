"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["MOBILE_WEB"] = 0] = "MOBILE_WEB";
    DeviceType[DeviceType["MOBILE_IOS"] = 1] = "MOBILE_IOS";
    DeviceType[DeviceType["MOBILE_ANDROID"] = 2] = "MOBILE_ANDROID";
    DeviceType[DeviceType["DESKTOP_WEB"] = 3] = "DESKTOP_WEB";
    DeviceType[DeviceType["DESKTOP_WINDOWS"] = 4] = "DESKTOP_WINDOWS";
    DeviceType[DeviceType["DESKTOP_MACOS"] = 5] = "DESKTOP_MACOS";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var DeviceInfoService = (function () {
    function DeviceInfoService() {
    }
    return DeviceInfoService;
}());
DeviceInfoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DeviceInfoService);
exports.DeviceInfoService = DeviceInfoService;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/services/device-info.interface.js.map