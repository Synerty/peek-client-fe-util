import {Injectable} from "@angular/core";
import {DeviceInfoService, DeviceType} from "./device-info.interface";

import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";

@Injectable()
export class DeviceInfoMobileNsService extends DeviceInfoService {
    constructor() {
        super();

    }

    uuid(): string {
        return platform.device.uuid;
    }

    description(): string {
        return `${platform.device.manufacturer}, ${platform.device.model}, ${platform.device.osVersion}`;
    }

    deviceType(): DeviceType {
        if (app.android) {
            return DeviceType.MOBILE_ANDROID;
        } else if (app.ios) {
            return DeviceType.MOBILE_IOS;
        } else {
            throw new Error("Unknown native type");
        }
    }
}