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

    let deviceSize = platformModule.screen.mainScreen.scale;

    if (deviceSize => 400)
      return DeviceSizeE.dpi400;

    if (deviceSize => 300)
      return DeviceSizeE.dpi300;

    return DeviceSizeE.default;
  }

}
