"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var device_info_interface_1 = require("./device-info.interface");
var app = require("tns-core-modules/application");
var platform = require("tns-core-modules/platform");
var DeviceInfoMobileNsService = (function (_super) {
    __extends(DeviceInfoMobileNsService, _super);
    function DeviceInfoMobileNsService() {
        return _super.call(this) || this;
    }
    DeviceInfoMobileNsService.prototype.uuid = function () {
        return platform.device.uuid;
    };
    DeviceInfoMobileNsService.prototype.description = function () {
        return platform.device.manufacturer + ", " + platform.device.model + ", " + platform.device.osVersion;
    };
    DeviceInfoMobileNsService.prototype.deviceType = function () {
        if (app.android) {
            return device_info_interface_1.DeviceType.MOBILE_ANDROID;
        }
        else if (app.ios) {
            return device_info_interface_1.DeviceType.MOBILE_IOS;
        }
        else {
            throw new Error("Unknown native type");
        }
    };
    return DeviceInfoMobileNsService;
}(device_info_interface_1.DeviceInfoService));
DeviceInfoMobileNsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DeviceInfoMobileNsService);
exports.DeviceInfoMobileNsService = DeviceInfoMobileNsService;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/services/device-info-mobile-ns.service.js.map