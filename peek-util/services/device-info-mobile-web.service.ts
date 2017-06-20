import {Injectable} from "@angular/core";
import {DeviceInfoService, DeviceType} from "./device-info.interface";

import {Md5} from "ts-md5/dist/md5";

@Injectable()
export class DeviceInfoWebService extends DeviceInfoService {
    constructor() {
        super();

    }

    uuid(): string {
        // We don't need a real good way of getting the UUID, Peek just assigns it a token
        let browser = navigator.userAgent.substr(0, navigator.userAgent.indexOf(' '));
        return <string> Md5.hashStr(`${browser} ${new Date().toString()}`);

    }

    description(): string {
        return navigator.userAgent;
    }


    deviceType(): DeviceType {
        return DeviceType.MOBILE_WEB;
    }
}