import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Params } from '@angular/router';
import { GlobalStore } from 'src/app/global.store';
import { NavigationStore } from 'src/app/navigation.store';
import { environment } from 'src/environments/environment';
import { capitalize } from 'src/utils/string';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly serverUrl = environment.backendDomain;
  private readonly FAVICON_ELEMENT_ID = 'favicon';
  private readonly DEFAULT_FAVICON = '/assets/icons/icon-72x72.png';
  private readonly document = inject(DOCUMENT);
  private readonly navStore = inject(NavigationStore);
  private readonly titleService = inject(Title);
  private readonly defaultTitle: string = environment.defaultTitle;
  private readonly globalStore = inject(GlobalStore);

  currentPageTitle = signal<string>(this.defaultTitle);

  constructor() {
    effect(() => {
      const newFavicon = this.globalStore.currentCampaign()?.icon;
      const newFaviconUrl = newFavicon
        ? `${this.serverUrl}${newFavicon}`
        : undefined;
      this.updateFavicon(newFaviconUrl);
    });

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

  private updatePageTitle(routeParams: Params): void {
    const newPageTitle: string = this.createPageTitle(routeParams);
    this.currentPageTitle.set(newPageTitle);
  }

  private updateFavicon(newFaviconUrl: string | undefined): void {
    const faviconElement = this.document.querySelector<HTMLLinkElement>(
      `#${this.FAVICON_ELEMENT_ID}`,
    );
    if (!faviconElement) return;
    faviconElement.href = newFaviconUrl ?? this.DEFAULT_FAVICON;
  }

  private createPageTitle(routeParams: Params): string {
    const campaignName: string = routeParams['campaign'];
    if (campaignName == null) return this.defaultTitle;

    return capitalize(campaignName);
  }
}
