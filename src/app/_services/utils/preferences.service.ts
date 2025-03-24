import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  MetaDataEntry,
  MetaDataEntryRaw,
  MetaDataKind,
  UserMetadata,
} from 'src/app/_models/userMetadata';
import { SidebarOption } from 'src/app/design/molecules';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  private readonly http = inject(HttpClient);

  searchPreferenceKey: string = 'AldruneSearchPreferences';
  settingsApiUrl = '/user/me/settings/';

  getGeneralUserMetadata(): Observable<UserMetadata> {
    return this.getUserMetadata('general').pipe(
      map((entryMap) => {
        const getEntry = (name: keyof UserMetadata) => entryMap.get(name);

        return {
          hasSeenOnboarding: toBoolean(getEntry('hasSeenOnboarding')),
        };
      }),
    );
  }

  createGeneralUserMetadataEntry(
    entry: MetaDataEntryRaw,
  ): Observable<MetaDataEntry> {
    return this.http.post<MetaDataEntry>(`${this.settingsApiUrl}/`, entry);
  }

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

  private getUserMetadata(
    category: MetaDataKind,
  ): Observable<Map<string, string>> {
    return this.http
      .get<MetaDataEntry[]>(`${this.settingsApiUrl}/${category}`)
      .pipe(
        map((entries) =>
          entries.reduce((map, entry) => {
            map.set(entry.name, entry.value);
            return map;
          }, new Map()),
        ),
      );
  }
}
