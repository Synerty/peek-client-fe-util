import {Injectable} from '@angular/core';


import {NavigationEnd, Router} from '@angular/router';
import {TitleService} from './title.service';
import 'rxjs/add/operator/filter';


@Injectable()
export class NavBackService {
  private readonly MAX_BACK = 20;
  private backTitles: string[] = [];
  private backUrls: string[] = [];

  constructor(private titleService: TitleService,
              private router: Router) {

    router.events
      .filter((e) => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => this._recordRouteChange(e));

    // Update the route titles as they come in
    titleService.title.subscribe((title: string) => {
      if (this.backTitles.length == 0)
        return;

      this.backTitles[this.backTitles.length - 1] = title;
    });

  }

  private _recordRouteChange(e: NavigationEnd): void {
    let thisUrl = e.urlAfterRedirects;
    let lastUrl = '';

    if (this.backUrls.length != 0) {
      lastUrl = this.backUrls[this.backUrls.length - 1];
      lastUrl = this._stripUrlParams(lastUrl);
    }

    if (lastUrl == this._stripUrlParams(thisUrl)) {
      this.backUrls[this.backUrls.length - 1] = thisUrl;
      this.backTitles[this.backTitles.length - 1] = this.titleService.titleSnapshot;
    } else {
      this.backUrls.push(thisUrl);
      this.backTitles.push(this.titleService.titleSnapshot);
    }

    // This should never happen
    if (this.backTitles.length != this.backUrls.length) {
      throw new Error('backTitles and backUrls length missmatch')
    }

    while (this.backUrls.length > this.MAX_BACK) {
      this.backUrls.shift();
      this.backTitles.shift();
    }
  }

  private _stripUrlParams(url: string): string {
    url = url.split('?')[0];
    url = url.split(';')[0];
    return url;
  }

  navBack(count = 1): void {
    if (this.backUrls.length < count) {
      throw new Error(`${count} exceeds max nav back ${this.backUrls.length}`);
    }

    let url = '';
    for (let i = 0; i <= count; i++) {
      url = this.backUrls.pop();
      this.backTitles.pop();
    }

    this.router.navigateByUrl(url);
  }

  navBackTitles(): string[] {
    return this.backTitles.slice(1);
  }

  navBackLen(): number {
    // The last item on the queue is the current route
    return this.backUrls.length;
  }

}
