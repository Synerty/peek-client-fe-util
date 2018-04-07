import { Subject } from "rxjs/Subject";
export interface ConfigLink {
    'plugin': string;
    'route': string;
    'text': string;
}
export declare class FooterService {
    statusText: Subject<string>;
    statusTextSnapshot: string;
    configLinks: Subject<ConfigLink[]>;
    configLinksSnapshot: ConfigLink[];
    constructor(links: ConfigLink[]);
    setStatusText(title: string): void;
}
