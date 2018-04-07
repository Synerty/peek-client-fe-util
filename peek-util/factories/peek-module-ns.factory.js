"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
var forms_2 = require("nativescript-angular/forms");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// import * as TNSSound from "nativescript-sound";
var TNSSound = require("nativescript-sound");
var PeekModuleFactory = /** @class */ (function () {
    function PeekModuleFactory() {
    }
    /**
     * Create a new sound object, that can be played.
     */
    PeekModuleFactory.createSound = function (soundFilePath) {
        return TNSSound.create('~' + soundFilePath);
    };
    /**
     * Provide a cross platform Browser module
     */
    PeekModuleFactory.FormsModules = [
        forms_1.FormsModule, nativescript_module_1.NativeScriptModule, forms_2.NativeScriptFormsModule,
        nativescript_ngx_fonticon_1.TNSFontIconModule
    ];
    /**
     * Provide a cross platform Router module
     */
    PeekModuleFactory.RouterModule = nativescript_angular_1.NativeScriptRouterModule;
    return PeekModuleFactory;
}());
exports.PeekModuleFactory = PeekModuleFactory;
//# sourceMappingURL=/Users/jchesney/project/peek-util/peek-util/factories/peek-module-ns.factory.js.map