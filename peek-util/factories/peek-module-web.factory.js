"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_font_awesome_1 = require("angular-font-awesome/angular-font-awesome");
var PeekModuleFactory = (function () {
    function PeekModuleFactory() {
    }
    /**
     * Create a new sound object, that can be played.
     */
    PeekModuleFactory.createSound = function (soundFilePath) {
        return new Audio(soundFilePath);
    };
    return PeekModuleFactory;
}());
/**
 * Provide a cross platform Browser module
 */
PeekModuleFactory.FormsModules = [forms_1.FormsModule, angular_font_awesome_1.AngularFontAwesomeModule];
/**
 * Provide a cross platform Router module
 */
PeekModuleFactory.RouterModule = router_1.RouterModule;
exports.PeekModuleFactory = PeekModuleFactory;
//# sourceMappingURL=/Users/jchesney/project/peek-util/peek-util/factories/peek-module-web.factory.js.map