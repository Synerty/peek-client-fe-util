"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NavBackService = (function () {
    function NavBackService(titleService, route, router) {
        var _this = this;
        this.router = router;
        this.MAX_BACK = 20;
        this.backTitles = [];
        this.backUrls = [];
        route.url.subscribe(function (url) {
            _this.backUrls.unshift(url);
            _this.backTitles.unshift(titleService.titleSnapshot);
            // This should never happen
            if (_this.backTitles.length != _this.backUrls.length) {
                throw new Error("backTitles and backUrls length missmatch");
            }
            while (_this.backTitles.length > _this.MAX_BACK) {
                _this.backUrls.pop();
                _this.backUrls.pop();
            }
        });
        // Update the route titles as they come in
        titleService.title.subscribe(function (title) {
            if (_this.backTitles.length == 0)
                return;
            _this.backTitles[0] = title;
        });
    }
    NavBackService.prototype.navBack = function (count) {
        if (count === void 0) { count = 1; }
        if (this.backUrls.length < count + 1) {
            throw new Error(count + " exceeds max nav back " + this.backUrls.length);
        }
        this.router.navigate(this.backUrls[count]);
    };
    NavBackService.prototype.navBackTitles = function () {
        return this.backTitles.slice(1);
    };
    NavBackService.prototype.navBackLen = function () {
        // The last item on the queue is the current route
        return this.backUrls.length - 1;
    };
    return NavBackService;
}());
NavBackService = __decorate([
    core_1.Injectable()
], NavBackService);
exports.NavBackService = NavBackService;
