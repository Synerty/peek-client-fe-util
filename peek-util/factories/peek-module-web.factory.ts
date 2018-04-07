import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {AngularFontAwesomeModule} from "angular-font-awesome/dist/angular-font-awesome";
import {Sound} from "./Sound";

export class WebSound implements Sound {
  private audio: any;

  constructor(soundFilePath: string) {
    this.audio = new Audio(soundFilePath);
  }

  play(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.audio.play();
      resolve();
    });
  }


}

export class PeekModuleFactory {
  /**
   * Provide a cross platform Browser module
   */
  static readonly FormsModules = [FormsModule, AngularFontAwesomeModule];

  /**
   * Provide a cross platform Router module
   */
  static readonly RouterModule = RouterModule;

  /**
   * Create a new sound object, that can be played.
   */
  static createSound(soundFilePath: string): Sound {
    return new WebSound(soundFilePath);
  }
}

