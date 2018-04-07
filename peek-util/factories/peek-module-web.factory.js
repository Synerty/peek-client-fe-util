"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_font_awesome_1 = require("angular-font-awesome/dist/angular-font-awesome");
var WebSound = /** @class */ (function () {
    function WebSound(soundFilePath) {
        this.audio = new Audio(soundFilePath);
    }
    WebSound.prototype.play = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.audio.play();
            resolve();
        });
    };
    return WebSound;
}());
exports.WebSound = WebSound;
var PeekModuleFactory = /** @class */ (function () {
    function PeekModuleFactory() {
    }
    /**
     * Create a new sound object, that can be played.
     */
    PeekModuleFactory.createSound = function (soundFilePath) {
        return new WebSound(soundFilePath);
    };
    /**
     * Provide a cross platform Browser module
     */
    PeekModuleFactory.FormsModules = [forms_1.FormsModule, angular_font_awesome_1.AngularFontAwesomeModule];
    /**
     * Provide a cross platform Router module
     */
    PeekModuleFactory.RouterModule = router_1.RouterModule;
    return PeekModuleFactory;
}());
exports.PeekModuleFactory = PeekModuleFactory;
//# sourceMappingURL=/Users/jchesney/project/peek-util/peek-util/factories/peek-module-web.factory.js.map