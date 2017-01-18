import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class TitleService {
    title = new Subject<string>();
    titleSnapshot = "no title";

    constructor() {

    }

    setTitle(title: string) {
        this.titleSnapshot = title;
        this.title.next(title);
    }
}