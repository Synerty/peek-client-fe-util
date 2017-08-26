import {Platform} from "../platform/PlatformNs";
import {DeviceSizeE} from "../platform/Platform";

// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74

export function switchStyleUrls(styleUrl: string): string {

    switch (Platform.deviceSize()) {
        case DeviceSizeE.dpi300:
            return styleUrl.replace(".css", ".ppi300.css");

        case DeviceSizeE.dpi400:
            return styleUrl.replace(".css", ".ppi400.css");

        case DeviceSizeE.default:
            return styleUrl;
    }
}
