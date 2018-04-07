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
var Subject_1 = require("rxjs/Subject");
var TitleService = /** @class */ (function () {
    function TitleService(links) {
        this.title = new Subject_1.Subject();
        this.titleSnapshot = 'no title';
        this.isEnabled = new Subject_1.Subject();
        this.isEnabledSnaphot = true;
        this.leftLinks = new Subject_1.Subject();
        this.leftLinksSnapshot = [];
        this.rightLinks = new Subject_1.Subject();
        this.rightLinksSnapshot = [];
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            if (link.left) {
                this.leftLinksSnapshot.push(link);
            }
            else {
                this.rightLinksSnapshot.push(link);
            }
        }
    }
    TitleService.prototype.setTitle = function (title) {
        this.titleSnapshot = title;
        this.title.next(title);
    };
    TitleService.prototype.setEnabled = function (value) {
        this.isEnabledSnaphot = value;
        this.isEnabled.next(value);
    };
    TitleService.prototype.updateButtonBadgeCount = function (pluginName, badgeCount) {
        for (var _i = 0, _a = this.leftLinksSnapshot; _i < _a.length; _i++) {
            var btn = _a[_i];
            if (pluginName === btn.plugin) {
                btn.badgeCount = badgeCount;
                this.leftLinks.next(this.leftLinksSnapshot);
                return;
            }
        }
        for (var _b = 0, _c = this.rightLinksSnapshot; _b < _c.length; _b++) {
            var btn = _c[_b];
            if (pluginName === btn.plugin) {
                btn.badgeCount = badgeCount;
                this.rightLinks.next(this.rightLinksSnapshot);
                return;
            }
        }
    };
    TitleService.prototype.updateButtonText = function (pluginName, text) {
        for (var _i = 0, _a = this.leftLinksSnapshot; _i < _a.length; _i++) {
            var btn = _a[_i];
            if (pluginName === btn.plugin) {
                btn.text = text;
                this.leftLinks.next(this.leftLinksSnapshot);
                return;
            }
        }
        for (var _b = 0, _c = this.rightLinksSnapshot; _b < _c.length; _b++) {
            var btn = _c[_b];
            if (pluginName === btn.plugin) {
                btn.text = text;
                this.rightLinks.next(this.rightLinksSnapshot);
                return;
            }
        }
    };
    TitleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Array])
    ], TitleService);
    return TitleService;
}());
exports.TitleService = TitleService;
//# sourceMappingURL=/Users/jchesney/project/peek-util/peek-util/title.service.js.map