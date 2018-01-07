"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var FooterService = (function () {
    function FooterService(links) {
        this.statusText = new rxjs_1.Subject();
        this.statusTextSnapshot = '';
        this.configLinks = new rxjs_1.Subject();
        this.configLinksSnapshot = [];
        this.configLinksSnapshot = links;
    }
    FooterService.prototype.setStatusText = function (title) {
        this.statusTextSnapshot = title;
        this.statusText.next(title);
    };
    return FooterService;
}());
FooterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Array])
], FooterService);
exports.FooterService = FooterService;
//# sourceMappingURL=/Users/jchesney/project/peek-util/peek-util/footer.service.js.map