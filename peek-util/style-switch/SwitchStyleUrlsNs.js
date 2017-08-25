"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformNs_1 = require("../platform/PlatformNs");
var Platform_1 = require("../platform/Platform");
// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74
function switchStyleUrls(styleUrl) {
    switch (PlatformNs_1.Platform.deviceSize()) {
        case Platform_1.DeviceSizeE.dpi326:
            return styleUrl.replace(".css", ".minWH326.css");
        case Platform_1.DeviceSizeE.dpi401:
            return styleUrl.replace(".css", ".minWH401.css");
        case Platform_1.DeviceSizeE.default:
            return styleUrl;
    }
}
exports.switchStyleUrls = switchStyleUrls;
//# sourceMappingURL=/home/peek/project/peek-util/peek-util/style-switch/SwitchStyleUrlsNs.js.map