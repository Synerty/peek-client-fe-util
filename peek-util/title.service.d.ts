import { Subject } from "rxjs/Subject";
export interface TitleBarLink {
    'left': boolean;
    'plugin': string;
    'resourcePath': string;
    'text': string;
    'badgeCount': number | null;
}
export declare class TitleService {
    title: Subject<string>;
    titleSnapshot: string;
    isEnabled: Subject<boolean>;
    isEnabledSnaphot: boolean;
    leftLinks: Subject<TitleBarLink[]>;
    leftLinksSnapshot: TitleBarLink[];
    rightLinks: Subject<TitleBarLink[]>;
    rightLinksSnapshot: TitleBarLink[];
    constructor(links: TitleBarLink[]);
    setTitle(title: string): void;
    setEnabled(value: boolean): void;
    updateButtonBadgeCount(pluginName: string, badgeCount: number | null): void;
    updateButtonText(pluginName: string, text: string): void;
}
