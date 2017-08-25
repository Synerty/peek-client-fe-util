import {Platform} from "../platform/PlatformNs";
import {DeviceSizeE} from "../platform/Platform";

// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74

export function switchStyleUrls(styleUrl: string): string {

    switch (Platform.deviceSize()) {
        case DeviceSizeE.dpi326:
            return styleUrl.replace(".css", ".minWH326.css");

        case DeviceSizeE.dpi401:
            return styleUrl.replace(".css", ".minWH401.css");

        case DeviceSizeE.default:
            return styleUrl;
    }
}