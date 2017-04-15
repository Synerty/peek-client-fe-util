import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

export interface TitleBarLink {
    'left': boolean;
    'plugin': string;
    'resourcePath': string;
    'text': string;
    'badgeCount': number | null;
}

@Injectable()
export class TitleService {
    title = new Subject<string>();
    titleSnapshot = 'no title';

    leftLinks = new Subject<TitleBarLink[]>();
    leftLinksSnapshot: TitleBarLink[] = [];

    rightLinks = new Subject<TitleBarLink[]>();
    rightLinksSnapshot: TitleBarLink[] = [];

    constructor(links: TitleBarLink[]) {
        for (let link of links) {
            if (link.left) {
                this.leftLinksSnapshot.push(link);
            } else {
                this.rightLinksSnapshot.push(link);
            }
        }

    }

    setTitle(title: string) {
        this.titleSnapshot = title;
        this.title.next(title);
    }

    updateButtonBadgeCount(pluginName: string, badgeCount: number | null) {
        for (let btn of this.leftLinksSnapshot) {
            if (pluginName === btn.plugin) {
                btn.badgeCount = badgeCount;
                this.leftLinks.next(this.leftLinksSnapshot);
                return;
            }
        }

        for (let btn of this.rightLinksSnapshot) {
            if (pluginName === btn.plugin) {
                btn.badgeCount = badgeCount;
                this.rightLinks.next(this.rightLinksSnapshot);
                return;
            }
        }
    }

    updateButtonText(pluginName: string, text: string) {
        for (let btn of this.leftLinksSnapshot) {
            if (pluginName === btn.plugin) {
                btn.text = text;
                this.leftLinks.next(this.leftLinksSnapshot);
                return;
            }
        }

        for (let btn of this.rightLinksSnapshot) {
            if (pluginName === btn.plugin) {
                btn.text = text;
                this.rightLinks.next(this.rightLinksSnapshot);
                return;
            }
        }
    }

}
