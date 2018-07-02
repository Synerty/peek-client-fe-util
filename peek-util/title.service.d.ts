export interface TitleBarLink {
    'left': boolean;
    'plugin': string;
    'resourcePath': string;
    'text': string;
    'badgeCount': number | null;
}
export declare class TitleService {
    title: any;
    titleSnapshot: string;
    isEnabled: any;
    isEnabledSnaphot: boolean;
    leftLinks: any;
    leftLinksSnapshot: TitleBarLink[];
    rightLinks: any;
    rightLinksSnapshot: TitleBarLink[];
    constructor(links: TitleBarLink[]);
    setTitle(title: string): void;
    setEnabled(value: boolean): void;
    updateButtonBadgeCount(pluginName: string, badgeCount: number | null): void;
    updateButtonText(pluginName: string, text: string): void;
}
