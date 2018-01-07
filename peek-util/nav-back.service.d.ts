import { ActivatedRoute, Router } from "@angular/router";
import { TitleService } from "./title.service";
export declare class NavBackService {
    private router;
    private readonly MAX_BACK;
    private backTitles;
    private backUrls;
    constructor(titleService: TitleService, route: ActivatedRoute, router: Router);
    navBack(count?: number): void;
    navBackTitles(): string[];
    navBackLen(): number;
}
