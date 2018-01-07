import { DeviceSizeE, PlatformI } from './Platform';
export declare class Platform implements PlatformI {
    static isNativeScript(): boolean;
    static isWeb(): boolean;
    static deviceSize(): DeviceSizeE;
}
