import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from './title.service';
export declare class NavBackService {
    private router;
    private readonly MAX_BACK;
    private backTitles;
    private backUrls;
    constructor(titleService: TitleService, route: ActivatedRoute, router: Router);
    private _stripUrlParams(url);
    navBack(count?: number): void;
    navBackTitles(): string[];
    navBackLen(): number;
}
