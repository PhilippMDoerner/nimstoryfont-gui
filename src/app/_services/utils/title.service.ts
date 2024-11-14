import { effect, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly defaultTitle: string = environment.defaultTitle;
  currentPageTitle = signal<string>(this.defaultTitle);

  constructor(private titleService: Title) {
    effect(() => this.titleService.setTitle(this.currentPageTitle()));
  }

  updatePageTitle(routeParams: Params, routeName: string): void {
    const newPageTitle: string = this.createPageTitle(routeParams, routeName);
    this.titleService.setTitle(newPageTitle);
  }

  private createPageTitle(routeParams: Params, routeName: string): string {
    const campaignName: string = routeParams['campaign'];
    if (campaignName == null) return this.defaultTitle;

    const articleName = this.getArticleName(routeParams, routeName);

    const nextPageTitle: string = `${campaignName} ${articleName}`;
    return this.capitalizeFirstLetters(nextPageTitle);
  }

  private getArticleName(routeParams: Params, routeName: string): string {
    const articleName: string = routeParams['name'];
    if (articleName != null) return articleName;

    const isDiaryentryRoute: boolean =
      routeName.includes('diaryentry') && routeParams['sessionNumber'];
    if (isDiaryentryRoute) return `Diaryentry ${routeParams['sessionNumber']}`;

    const isSessionAudioRoute: boolean =
      routeName.includes('sessionaudio') && routeParams['sessionNumber'];
    if (isSessionAudioRoute) return `Recording ${routeParams['sessionNumber']}`;

    return routeName;
  }

  private capitalizeFirstLetters(str: string) {
    const firstLetterPattern = /^\w|\s\w/g;
    return str
      .toLowerCase()
      .replace(firstLetterPattern, (letter: string) => letter.toUpperCase());
  }
}
