export interface ConfigLink {
    'plugin': string;
    'route': string;
    'text': string;
}
export declare class FooterService {
    statusText: any;
    statusTextSnapshot: string;
    configLinks: any;
    configLinksSnapshot: ConfigLink[];
    constructor(links: ConfigLink[]);
    setStatusText(title: string): void;
}
