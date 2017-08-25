"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformNs_1 = require("../platform/PlatformNs");
var Platform_1 = require("../platform/Platform");
// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74
function switchStyleUrls(styleUrls) {
    if (styleUrls == null || !styleUrls.length)
        return;
    var newStyleUrls = [];
    for (var _i = 0, styleUrls_1 = styleUrls; _i < styleUrls_1.length; _i++) {
        var url = styleUrls_1[_i];
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
    return newStyleUrls;
}
exports.switchStyleUrls = switchStyleUrls;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/style-switch/SwitchStyleUrlsNs.js.map