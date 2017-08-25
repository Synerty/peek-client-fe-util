import {Platform} from "../platform/PlatformNs";
import {DeviceSizeE} from "../platform/Platform";

// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74

export function switchStyleUrls(styleUrls: string[]) : string[]{
    if (styleUrls == null || !styleUrls.length)
        return;

    let newStyleUrls = [];
    
    for (let url of styleUrls) {
        switch (Platform.deviceSize()) {
            case DeviceSizeE.dpi326:
                newStyleUrls.push(
                    url.replace(".css", ".minWH326.css")
                );
                break;

            case DeviceSizeE.dpi401:
                newStyleUrls.push(
                    url.replace(".css", ".minWH401.css")
                );
                break;

            case DeviceSizeE.default:
                newStyleUrls.push(url);
                break;
        }
    }

    return newStyleUrls;
}