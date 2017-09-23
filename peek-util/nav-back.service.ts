import {Injectable} from "@angular/core";


import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import {TitleService} from "./title.service";


@Injectable()
export class NavBackService {
    private readonly MAX_BACK = 20;
    private backTitles: string[] = [];
    private backUrls: UrlSegment[][] = [];

    constructor(titleService: TitleService,
                route: ActivatedRoute,
                private router: Router) {

        route.url.subscribe((url: UrlSegment[]) => {
            this.backUrls.unshift(url);
            this.backTitles.unshift(titleService.titleSnapshot);

            // This should never happen
            if (this.backTitles.length != this.backUrls.length) {
                throw new Error("backTitles and backUrls length missmatch")
            }

            while (this.backTitles.length > this.MAX_BACK) {
                this.backUrls.pop();
                this.backUrls.pop();
            }

        });

        // Update the route titles as they come in
        titleService.title.subscribe((title: string) => {
            if (this.backTitles.length == 0)
                return;

            this.backTitles[0] = title;
        });

    }

    navBack(count = 1): void {
        if (this.backUrls.length < count + 1) {
            throw new Error(`${count} exceeds max nav back ${this.backUrls.length}`);
        }

        this.router.navigate(this.backUrls[count]);
    }

    navBackTitles(): string[] {
        return this.backTitles.slice(1);
    }

    navBackLen(): number {
        // The last item on the queue is the current route
        return this.backUrls.length - 1;
    }

}
