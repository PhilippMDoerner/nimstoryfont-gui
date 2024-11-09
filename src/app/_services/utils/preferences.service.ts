import { Injectable } from '@angular/core';
import { SidebarOption } from 'src/design/molecules';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  constructor() {}
  searchPreferenceKey: string = 'AldruneSearchPreferences';

  getStoredSearchPreferences(): SidebarOption | null {
    return this.getStoredPreferences(this.searchPreferenceKey);
  }

  storeSearchPreferences(preferences: SidebarOption): void {
    this.storePreferences(preferences, this.searchPreferenceKey);
  }

  private getStoredPreferences(key: string): SidebarOption | null {
    const preferencesJson: string | null = localStorage.getItem(key);
    const hasPreferences = preferencesJson != null;
    if (!hasPreferences) {
      return null;
    }
    return JSON.parse(preferencesJson);
  }

  private storePreferences(preferences: SidebarOption, key: string): void {
    const preferencesJson: string = JSON.stringify(preferences);
    localStorage.setItem(key, preferencesJson);
  }
}
