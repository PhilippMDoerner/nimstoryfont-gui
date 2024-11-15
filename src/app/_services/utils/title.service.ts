import { effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Params } from '@angular/router';
import { NavigationStore } from 'src/app/navigation.store';
import { environment } from 'src/environments/environment';
import { capitalize } from 'src/utils/string';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly navStore = inject(NavigationStore);
  private readonly titleService = inject(Title);
  private readonly defaultTitle: string = environment.defaultTitle;

  currentPageTitle = signal<string>(this.defaultTitle);

  constructor() {
    effect(
      () => {
        const params = this.navStore.currentRoute()?.params;
        if (params) {
          this.updatePageTitle(params);
        }
      },
      { allowSignalWrites: true },
    );
    effect(() => this.titleService.setTitle(this.currentPageTitle()));
  }

  updatePageTitle(routeParams: Params): void {
    const newPageTitle: string = this.createPageTitle(routeParams);
    this.currentPageTitle.set(newPageTitle);
  }

  private createPageTitle(routeParams: Params): string {
    const campaignName: string = routeParams['campaign'];
    if (campaignName == null) return this.defaultTitle;

    return capitalize(campaignName);
  }
}
