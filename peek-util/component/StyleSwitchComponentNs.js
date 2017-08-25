"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlatformNs_1 = require("../platform/PlatformNs");
var Platform_1 = require("../platform/Platform");
// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74
function StyleSwitchComponent(properties) {
    if (properties.styleUrls == null || !properties.styleUrls.length)
        return;
    var newStyleUrls = [];
    for (var _i = 0, _a = properties.styleUrls; _i < _a.length; _i++) {
        var url = _a[_i];
        switch (PlatformNs_1.Platform.deviceSize()) {
            case Platform_1.DeviceSizeE.dpi326:
                newStyleUrls.push(url.replace(".css", ".minWH326.css"));
                break;
            case Platform_1.DeviceSizeE.dpi401:
                newStyleUrls.push(url.replace(".css", ".minWH401.css"));
                break;
            case Platform_1.DeviceSizeE.default:
                newStyleUrls.push(url);
                break;
        }
    }
    properties.styleUrls = newStyleUrls;
    return core_1.Component(properties);
}
exports.StyleSwitchComponent = StyleSwitchComponent;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/component/StyleSwitchComponentNs.js.map