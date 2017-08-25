import {Component} from '@angular/core';
import {Platform} from "../platform/PlatformNs";
import {DeviceSizeE} from "../platform/Platform";

export interface IComponent {
    selector: string;
    template?: string;
    templateUrl?: string;
    styles?: string[];
    styleUrls?: string[];
    directives?: any;
    providers?: any;
    encapsulation?: number;
}

// https://stash.synerty.com/projects/PEEK/repos/peek-util/commits/1cdf4532799ac179b8d1f07fdd058069022c8b74

export function StyleSwitchComponent(properties: IComponent) {
    if (properties.styleUrls == null || !properties.styleUrls.length)
        return;

    let newStyleUrls = [];
    
    for (let url of properties.styleUrls) {
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

    properties.styleUrls = newStyleUrls;


    return Component(properties);
}