import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {AngularFontAwesomeModule} from "angular-font-awesome/angular-font-awesome";
import {Sound} from "./Sound";

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
    static createSound(soundFilePath:string) :Sound{
        return new Audio(soundFilePath);
    }
}

