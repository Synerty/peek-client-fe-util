import { Router } from '@angular/router';
import { TitleService } from './title.service';
import 'rxjs/add/operator/filter';
export declare class NavBackService {
    private titleService;
    private router;
    private readonly MAX_BACK;
    private backTitles;
    private backUrls;
    constructor(titleService: TitleService, router: Router);
    private _recordRouteChange(e);
    private _stripUrlParams(url);
    navBack(count?: number): void;
    navBackTitles(): string[];
    navBackLen(): number;
}
