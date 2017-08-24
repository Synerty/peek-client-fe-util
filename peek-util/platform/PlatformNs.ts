import {DeviceSizeE, PlatformI} from './Platform';
import * as platformModule from "tns-core-modules/platform";

export class Platform implements PlatformI {
  static isNativeScript(): boolean {
    return true;
  }

  static isWeb(): boolean {
    return false;
  }

  static deviceSize(): DeviceSizeE {

    let deviceSize = platformModule.screen.mainScreen.widthPixels;

    // iPhone: SE, 5, 6, & 7 resolution width
    let screenQualifier326=640;

    // iPhone: 6+ & 7+
    let screenQualifier401=1242;

    if (deviceSize => screenQualifier401)
      return DeviceSizeE.dpi401;

    if (deviceSize => screenQualifier326)
      return DeviceSizeE.dpi326;

    return DeviceSizeE.default;
  }

}
