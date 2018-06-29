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
var router_1 = require("@angular/router");
var title_service_1 = require("./title.service");
var NavBackService = /** @class */ (function () {
    function NavBackService(titleService, router, route) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.MAX_BACK = 20;
        this.backTitles = [];
        this.backUrls = [];
        route.fragment.subscribe(function () { return _this._recordRouteChange(); });
        route.params.subscribe(function () { return _this._recordRouteChange(); });
        // Update the route titles as they come in
        titleService.title.subscribe(function (title) {
            if (_this.backTitles.length == 0)
                return;
            _this.backTitles[_this.backTitles.length - 1] = title;
        });
    }
    NavBackService.prototype._recordRouteChange = function () {
        var thisUrl = this.router.url;
        var lastUrl = '';
        if (this.backUrls.length != 0) {
            lastUrl = this.backUrls[this.backUrls.length - 1];
            lastUrl = this._stripUrlParams(lastUrl);
        }
        if (lastUrl == this._stripUrlParams(thisUrl)) {
            this.backUrls[this.backUrls.length - 1] = thisUrl;
            this.backTitles[this.backTitles.length - 1] = this.titleService.titleSnapshot;
        }
        else {
            this.backUrls.push(thisUrl);
            this.backTitles.push(this.titleService.titleSnapshot);
        }
        // This should never happen
        if (this.backTitles.length != this.backUrls.length) {
            throw new Error('backTitles and backUrls length missmatch');
        }
        while (this.backUrls.length > this.MAX_BACK) {
            this.backUrls.shift();
            this.backTitles.shift();
        }
    };
    NavBackService.prototype._stripUrlParams = function (url) {
        url = url.split('?')[0];
        url = url.split(';')[0];
        return url;
    };
    NavBackService.prototype.navBack = function (count) {
        if (count === void 0) { count = 1; }
        if (this.backUrls.length < count + 1) {
            throw new Error(count + " exceeds max nav back " + this.backUrls.length);
        }
        var url = '';
        for (var i = 0; i < count; i++) {
            url = this.backUrls.shift();
            this.backTitles.shift();
        }
        this.router.navigate([url]);
    };
    NavBackService.prototype.navBackTitles = function () {
        return this.backTitles.slice(1);
    };
    NavBackService.prototype.navBackLen = function () {
        // The last item on the queue is the current route
        return this.backUrls.length - 1;
    };
    NavBackService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [title_service_1.TitleService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], NavBackService);
    return NavBackService;
}());
exports.NavBackService = NavBackService;
//# sourceMappingURL=/Users/jchesney/project/peek-util/peek-util/nav-back.service.js.map