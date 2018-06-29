import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from './title.service';
export declare class NavBackService {
    private titleService;
    private router;
    private readonly MAX_BACK;
    private backTitles;
    private backUrls;
    constructor(titleService: TitleService, router: Router, route: ActivatedRoute);
    private _recordRouteChange();
    private _stripUrlParams(url);
    navBack(count?: number): void;
    navBackTitles(): string[];
    navBackLen(): number;
}
