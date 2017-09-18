import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

export interface ConfigLink {
    'plugin': string;
    'resourcePath': string;
    'text': string;
}

@Injectable()
export class FooterService {
    title = new Subject<string>();
    titleSnapshot = '';

    isEnabled = new Subject<boolean>();
    isEnabledSnaphot = true;

    configLinks = new Subject<ConfigLink[]>();
    configLinksSnapshot: ConfigLink[] = [];

    constructor(links: ConfigLink[]) {
        this.configLinksSnapshot = links;
    }

    setTitle(title: string) {
        this.titleSnapshot = title;
        this.title.next(title);
    }

    setEnabled(value: boolean) {
        this.isEnabledSnaphot = value;
        this.isEnabled.next(value);
    }

}
