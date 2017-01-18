import {Injectable} from "@angular/core";

@Injectable
class TitleService {
    title = new Subject<string>();
    titleSnapshot = "no title";

    setTitle(title:string){
        this.titleSnapshot = title;
        this.title.next(title);
    }
}