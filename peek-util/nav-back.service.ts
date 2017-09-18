import {Injectable} from "@angular/core";


import {ActivatedRoute, Router, UrlSegment} from "@angular/router";


@Injectable()
export class NavBackService {
    backUrl: UrlSegment[];

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.route.url.subscribe((url: UrlSegment[]) => {
            this.backUrl = url;
        });

    }

    navBack() {
        this.router.navigate(this.backUrl);
    }

}
