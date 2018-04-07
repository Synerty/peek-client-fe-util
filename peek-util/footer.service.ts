import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

export interface ConfigLink {
    'plugin': string;
    'route': string;
    'text': string;
}

@Injectable()
export class FooterService {
    statusText = new Subject<string>();
    statusTextSnapshot = '';

    configLinks = new Subject<ConfigLink[]>();
    configLinksSnapshot: ConfigLink[] = [];

    constructor(links: ConfigLink[]) {
        this.configLinksSnapshot = links;
    }

    setStatusText(title: string) {
        this.statusTextSnapshot = title;
        this.statusText.next(title);
    }

}
