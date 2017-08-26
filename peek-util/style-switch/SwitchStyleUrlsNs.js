"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformNs_1 = require("../platform/PlatformNs");
var Platform_1 = require("../platform/Platform");
// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74
function switchStyleUrls(styleUrl) {
    switch (PlatformNs_1.Platform.deviceSize()) {
        case Platform_1.DeviceSizeE.dpi300:
            return styleUrl.replace(".css", ".ppi300.css");
        case Platform_1.DeviceSizeE.dpi400:
            return styleUrl.replace(".css", ".ppi400.css");
        case Platform_1.DeviceSizeE.default:
            return styleUrl;
    }
}
exports.switchStyleUrls = switchStyleUrls;
//# sourceMappingURL=/Users/peek/peek-dev/peek-util/peek-util/style-switch/SwitchStyleUrlsNs.js.map