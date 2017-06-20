import {Injectable} from "@angular/core";

export enum DeviceType {
    MOBILE_WEB,
    MOBILE_IOS,
    MOBILE_ANDROID,
    DESKTOP_WEB,
    DESKTOP_WINDOWS,
    DESKTOP_MACOS
}

@Injectable()
export abstract class DeviceInfoService {
    constructor() {

    }

    abstract uuid() :string | null;

    abstract description() :string;

    abstract deviceType():DeviceType;
}