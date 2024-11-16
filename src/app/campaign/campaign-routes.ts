import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { campaignGuard } from '../_guards/campaign.guard';
import { onExitReset } from '../_guards/onExitReset';
import { CampaignOverviewRoute } from '../_models/route';
import { CampaignAdminPageComponent } from './pages/campaign-admin-page/campaign-admin-page.component';
import { CampaignUpdatePageComponent } from './pages/campaign-update-page/campaign-update-page.component';
import { CharacterUpdatePageComponent } from './pages/character-create-update-page/character-create-update-page.component';
import { CharacterCreateUpdateStore } from './pages/character-create-update-page/character-create-update-page.store';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterStore } from './pages/character-page/character-page.store';
import { CreaturePageComponent } from './pages/creature-page/creature-page.component';
import { CreaturePageStore } from './pages/creature-page/creature-page.store';
import { CreatureUpdateCreateComponent } from './pages/creature-update-create-page/creature-update-create-page.component';
import { CreatureUpdateCreateStore } from './pages/creature-update-create-page/creature-update-create-page.store';
import { DiaryentryCreateUpdatePageComponent } from './pages/diaryentry-create-update-page/diaryentry-create-update-page.component';
import { DiaryEntryCreateUpdatePageStore } from './pages/diaryentry-create-update-page/diaryentry-create-update-page.store';
import { DiaryentryPageComponent } from './pages/diaryentry-page/diaryentry-page.component';
import { DiaryentryPageStore } from './pages/diaryentry-page/diaryentry-page.store';
import { GeneralOverviewPageComponent } from './pages/general-overview-page/general-overview-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageStore } from './pages/home-page/home-page.store';
import { ItemCreateUpdatePageComponent } from './pages/item-create-update-page/item-create-update-page.component';
import { ItemCreateUpdateStore } from './pages/item-create-update-page/item-create-update-page.store';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { ItemPageStore } from './pages/item-page/item-page.store';
import { LocationCreateUpdatePageComponent } from './pages/location-create-update-page/location-create-update-page.component';
import { LocationCreateUpdateStore } from './pages/location-create-update-page/location-create-update-page.store';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { LocationPageStore } from './pages/location-page/location-page.store';
import { MapCreateUpdatePageComponent } from './pages/map-create-update-page/map-create-update-page.component';
import { MapCreateUpdateStore } from './pages/map-create-update-page/map-create-update-page.store';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MapPageStore } from './pages/map-page/map-page.store';
import { MarkerCreateUpdatePageComponent } from './pages/marker-create-update-page/marker-create-update-page.component';
import { MarkerCreateUpdateStore } from './pages/marker-create-update-page/marker-create-update-page.store';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { MarkerPageStore } from './pages/marker-page/marker-page.store';
import { OrganizationCreateUpdatePageComponent } from './pages/organization-create-update-page/organization-create-update-page.component';
import { OrganizationCreateUpdatePageStore } from './pages/organization-create-update-page/organization-create-update-page.store';
import { OrganizationPageComponent } from './pages/organization-page/organization-page.component';
import { OrganizationStore } from './pages/organization-page/organization-page.store';
import { QuestCreateUpdatePageComponent } from './pages/quest-create-update-page/quest-create-update-page.component';
import { QuestCreateUpdatePageStore } from './pages/quest-create-update-page/quest-create-update-page.store';
import { QuestPageComponent } from './pages/quest-page/quest-page.component';
import { QuestPageStore } from './pages/quest-page/quest-page.store';
import { QuestsOverviewPageComponent } from './pages/quests-overview-page/quests-overview-page.component';
import { QuestOverviewPageStore } from './pages/quests-overview-page/quests-overview-page.store';
import { QuoteOverviewPageComponent } from './pages/quote-overview-page/quote-overview-page.component';
import { QuoteOverviewPageStore } from './pages/quote-overview-page/quote-overview-page.store';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { RulesPageStore } from './pages/rules-page/rules-page.store';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchPageStore } from './pages/search-page/search-page.store';
import { SessionAudioOverviewPageComponent } from './pages/session-audio-overview-page/session-audio-overview-page.component';
import { SessionAudioOverviewPageStore } from './pages/session-audio-overview-page/session-audio-overview-page.store';
import { SessionaudioCreateUpdatePageComponent } from './pages/sessionaudio-create-update-page/sessionaudio-create-update-page.component';
import { SessionaudioCreateUpdatePageStore } from './pages/sessionaudio-create-update-page/sessionaudio-create-update-page.store';
import { SessionaudioPageComponent } from './pages/sessionaudio-page/sessionaudio-page.component';
import { SessionaudioPageStore } from './pages/sessionaudio-page/sessionaudio-page.store';
import { SessionsPageComponent } from './pages/sessions-page/sessions-page.component';
import { SessionsPageStore } from './pages/sessions-page/sessions-page.store';
import { SpellsPageComponent } from './pages/spells-page/spells-page.component';
import { SpellsPageStore } from './pages/spells-page/spells-page.store';

const overviewRoutes: CampaignOverviewRoute[] = [
  {
    path: 'character',
    component: GeneralOverviewPageComponent,
    data: {
      name: 'character-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'CHARACTER',
    },
  },
  {
    path: 'creature',
    component: GeneralOverviewPageComponent,
    data: {
      name: 'creature-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'CREATURE',
    },
  },
  {
    path: 'diaryentry',
    component: GeneralOverviewPageComponent,
    data: {
      name: 'diaryentry-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'DIARYENTRY',
    },
  },
  {
    path: 'item',
    component: GeneralOverviewPageComponent,
    data: {
      name: 'item-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'ITEM',
    },
  },
  {
    path: 'location',
    component: GeneralOverviewPageComponent,
    data: {
      name: 'location-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'LOCATION',
    },
  },
  {
    path: 'organization',
    component: GeneralOverviewPageComponent,
    data: {
      name: 'organization-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'ORGANIZATION',
    },
  },
];

const detailRoutes: Route[] = [
  //Campaign Admin Routes
  {
    path: `admin`,
    component: CampaignAdminPageComponent,
    data: { name: 'campaign-admin', requiredMinimumRole: 'admin' },
  },
  {
    path: 'admin/update',
    component: CampaignUpdatePageComponent,
    data: { name: 'campaign-update', requiredMinimumRole: 'admin' },
  },
  //Home Routes
  {
    path: `home`,
    component: HomePageComponent,
    data: { name: 'home', requiredMinimumRole: 'guest' },
    providers: [HomePageStore],
    resolve: {
      articles: () => inject(HomePageStore).loadMoreArticles(0),
    },
  },
  // Search
  {
    path: 'search/:searchString',
    component: SearchPageComponent,
    data: { name: 'search', requiredMinimumRole: 'guest' },
    providers: [SearchPageStore],
    canDeactivate: [onExitReset(SearchPageStore)],
    resolve: {
      searchResults: (route: ActivatedRouteSnapshot) =>
        inject(SearchPageStore).loadSearchArticles(
          route.params['searchString'],
        ),
    },
  },
  // Character Routes
  {
    path: 'character',
    children: [
      {
        path: 'create',
        component: CharacterUpdatePageComponent,
        data: { name: 'character-create', requiredMinimumRole: 'member' },
        resolve: {
          loadLocations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignLocations(),
          loadOrganizations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignOrganizations(),
          loadClasses: () =>
            inject(CharacterCreateUpdateStore).loadPlayerClasses(),
        },
        canDeactivate: [onExitReset(CharacterCreateUpdateStore)],
      },
      {
        path: ':name',
        component: CharacterPageComponent,
        data: { name: 'character', requiredMinimumRole: 'guest' },
        resolve: {
          loadCharacters: () => inject(CharacterStore).loadCampaignCharacters(),
          loadCharacter: (route: ActivatedRouteSnapshot) =>
            inject(CharacterStore).loadCharacter(route.params['name']),
          loadOrganizations: () =>
            inject(CharacterStore).loadCampaignOrganizations(),
          loadEncounters: () => inject(CharacterStore).loadCampaignEncounters(),
          loadSessions: () => inject(CharacterStore).loadCampaignSessions(),
          loadLocations: () => inject(CharacterStore).loadCampaignLocations(),
        },
        canDeactivate: [onExitReset(CharacterStore)],
      },
      {
        path: ':name/update',
        component: CharacterUpdatePageComponent,
        data: { name: 'character-update', requiredMinimumRole: 'guest' },
        resolve: {
          loadCharacter: (route: ActivatedRouteSnapshot) =>
            inject(CharacterCreateUpdateStore).loadCharacter(
              route.params['name'],
            ),
          loadLocations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignLocations(),
          loadOrganizations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignOrganizations(),
          loadClasses: () =>
            inject(CharacterCreateUpdateStore).loadPlayerClasses(),
        },
        canDeactivate: [onExitReset(CharacterCreateUpdateStore)],
      },
    ],
  },
  // Creature Routes
  {
    path: 'creature',
    children: [
      {
        path: 'create',
        component: CreatureUpdateCreateComponent,
        data: { name: 'creature-create', requiredMinimumRole: 'member' },
        resolve: {},
        canDeactivate: [onExitReset(CreatureUpdateCreateStore)],
      },
      {
        path: ':name',
        component: CreaturePageComponent,
        data: { name: 'creature', requiredMinimumRole: 'guest' },
        resolve: {
          loadCreature: (route: ActivatedRouteSnapshot) =>
            inject(CreaturePageStore).loadCreature(route.params['name']),
        },
        canDeactivate: [onExitReset(CreaturePageStore)],
      },
      {
        path: ':name/update',
        component: CreatureUpdateCreateComponent,
        data: { name: 'creature-update', requiredMinimumRole: 'member' },
        resolve: {
          loadCreature: (route: ActivatedRouteSnapshot) =>
            inject(CreatureUpdateCreateStore).loadCreature(
              route.params['name'],
            ),
        },
        canDeactivate: [onExitReset(CreatureUpdateCreateStore)],
      },
    ],
  },
  // Item Routes
  {
    path: 'item',
    children: [
      {
        path: 'create',
        component: ItemCreateUpdatePageComponent,
        data: { name: 'item-create', requiredMinimumRole: 'member' },
        resolve: {
          reset: () => inject(ItemCreateUpdateStore).reset(),
          loadCharacters: () =>
            inject(ItemCreateUpdateStore).loadCampaignCharacters(),
        },
        canDeactivate: [onExitReset(ItemCreateUpdateStore)],
      },
      {
        path: ':name',
        component: ItemPageComponent,
        data: { name: 'item', requiredMinimumRole: 'guest' },
        resolve: {
          reset: () => inject(ItemPageStore).reset(),
          loadItem: (route: ActivatedRouteSnapshot) =>
            inject(ItemPageStore).loadItem(route.params['name']),
        },
        canDeactivate: [onExitReset(ItemPageStore)],
      },
      {
        path: ':name/update',
        component: ItemCreateUpdatePageComponent,
        data: { name: 'item-update', requiredMinimumRole: 'member' },
        resolve: {
          loadItem: (route: ActivatedRouteSnapshot) =>
            inject(ItemCreateUpdateStore).loadItem(route.params['name']),
          loadCharacters: () =>
            inject(ItemCreateUpdateStore).loadCampaignCharacters(),
        },
        canDeactivate: [onExitReset(ItemCreateUpdateStore)],
      },
    ],
  },
  // Diaryentry Routes
  {
    path: 'diaryentry',
    children: [
      {
        path: 'create',
        component: DiaryentryCreateUpdatePageComponent,
        data: { name: 'diaryentry-create', requiredMinimumRole: 'member' },
        canDeactivate: [onExitReset(DiaryEntryCreateUpdatePageStore)],
        resolve: {
          loadSessions: () =>
            inject(DiaryEntryCreateUpdatePageStore).loadSessions(),
          loadAuthors: () =>
            inject(DiaryEntryCreateUpdatePageStore).loadAuthors(),
        },
      },
      {
        path: ':sessionNumber/:isMainSession/:authorName',
        children: [
          {
            path: '',
            component: DiaryentryPageComponent,
            data: { name: 'diaryentry', requiredMinimumRole: 'guest' },
          },
          {
            path: 'encounter/:encounterTitle',
            component: DiaryentryPageComponent,
            data: {
              name: 'diaryentry-encounter',
              requiredMinimumRole: 'guest',
            },
          },
        ],
        canDeactivate: [onExitReset(DiaryentryPageStore)],
        resolve: {
          loadDiaryentry: (route: ActivatedRouteSnapshot) =>
            inject(DiaryentryPageStore).loadDiaryentry({
              sessionNumber: route.params['sessionNumber'],
              isMainSession: route.params['isMainSession'],
              name: route.params['authorName'],
            }),
          loadCharacters: () =>
            inject(DiaryentryPageStore).loadCampaignCharacters(),
          loadLocations: () =>
            inject(DiaryentryPageStore).loadCampaignLocations(),
        },
      },
      {
        path: ':sessionNumber/:isMainSession/:authorName/update',
        component: DiaryentryCreateUpdatePageComponent,
        data: { name: 'diaryentry-update', requiredMinimumRole: 'member' },
        canDeactivate: [onExitReset(DiaryEntryCreateUpdatePageStore)],
        resolve: {
          loadDiaryentry: (route: ActivatedRouteSnapshot) =>
            inject(DiaryEntryCreateUpdatePageStore).loadDiaryentry({
              sessionNumber: route.params['sessionNumber'],
              isMainSession: route.params['isMainSession'],
              name: route.params['authorName'],
            }),
          loadSessions: () =>
            inject(DiaryEntryCreateUpdatePageStore).loadSessions(),
          loadAuthors: () =>
            inject(DiaryEntryCreateUpdatePageStore).loadAuthors(),
        },
      },
    ],
  },
  // Location Routes
  {
    path: 'location',
    children: [
      {
        path: 'create',
        component: LocationCreateUpdatePageComponent,
        data: { name: 'location-create', requiredMinimumRole: 'member' },
        canDeactivate: [onExitReset(LocationCreateUpdateStore)],
        resolve: {
          loadLocations: () =>
            inject(LocationCreateUpdateStore).loadCampaignLocations(),
        },
      },
      {
        path: ':parent_name/:name',
        component: LocationPageComponent,
        data: { name: 'location', requiredMinimumRole: 'guest' },
        canDeactivate: [onExitReset(LocationPageStore)],
        resolve: {
          campaignCharacters: () =>
            inject(LocationPageStore).loadCampaignCharacters(),
          location: (route: ActivatedRouteSnapshot) =>
            inject(LocationPageStore).loadLocation({
              name: route.params['name'],
              parentLocationName: route.params['parent_name'],
            }),
        },
      },
      {
        path: ':parent_name/:name/update',
        component: LocationCreateUpdatePageComponent,
        data: { name: 'location-update', requiredMinimumRole: 'member' },
        canDeactivate: [onExitReset(LocationCreateUpdateStore)],
        resolve: {
          loadLocations: () =>
            inject(LocationCreateUpdateStore).loadCampaignLocations(),
          loadLocation: (route: ActivatedRouteSnapshot) =>
            inject(LocationCreateUpdateStore).loadLocation({
              name: route.params['name'],
              parentLocationName: route.params['parent_name'],
            }),
        },
      },
    ],
  },
  // Organization Routes
  {
    path: 'organization',
    children: [
      {
        path: 'create',
        component: OrganizationCreateUpdatePageComponent,
        data: { name: 'organization-create', requiredMinimumRole: 'member' },
        resolve: {
          characters: () =>
            inject(OrganizationCreateUpdatePageStore).loadCampaignCharacters(),
          locations: () =>
            inject(OrganizationCreateUpdatePageStore).loadCampaignLocations(),
        },
        canDeactivate: [onExitReset(OrganizationCreateUpdatePageStore)],
      },
      {
        path: ':name',
        component: OrganizationPageComponent,
        data: { name: 'organization', requiredMinimumRole: 'guest' },
        resolve: {
          organization: (route: ActivatedRouteSnapshot) =>
            inject(OrganizationStore).loadOrganization(route.params['name']),
        },
        canDeactivate: [onExitReset(OrganizationStore)],
      },
      {
        path: ':name/update',
        component: OrganizationCreateUpdatePageComponent,
        data: { name: 'organization-update', requiredMinimumRole: 'member' },
        resolve: {
          organization: (route: ActivatedRouteSnapshot) =>
            inject(OrganizationCreateUpdatePageStore).loadOrganization(
              route.params['name'],
            ),
          characters: () =>
            inject(OrganizationCreateUpdatePageStore).loadCampaignCharacters(),
          locations: () =>
            inject(OrganizationCreateUpdatePageStore).loadCampaignLocations(),
        },
        canDeactivate: [onExitReset(OrganizationCreateUpdatePageStore)],
      },
    ],
  },
  // Quest Routes
  {
    path: 'quest',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: QuestsOverviewPageComponent,
        data: { name: 'quest-overview', requiredMinimumRole: 'guest' },
        resolve: {
          quests: () => inject(QuestOverviewPageStore).loadCampaignQuests(),
        },
      },
      {
        path: 'create',
        component: QuestCreateUpdatePageComponent,
        data: { name: 'quest-create', requiredMinimumRole: 'member' },
        resolve: {
          questGivers: () =>
            inject(QuestCreateUpdatePageStore).loadQuestGivers(),
          questTakers: () =>
            inject(QuestCreateUpdatePageStore).loadQuestTakers(),
          questStates: () =>
            inject(QuestCreateUpdatePageStore).loadQuestStates(),
          campaignSessions: () =>
            inject(QuestCreateUpdatePageStore).loadCampaignSessions(),
        },
        canDeactivate: [onExitReset(QuestCreateUpdatePageStore)],
      },
      {
        path: ':name',
        component: QuestPageComponent,
        data: { name: 'quest', requiredMinimumRole: 'guest' },
        resolve: {
          quest: (route: ActivatedRouteSnapshot) =>
            inject(QuestPageStore).loadQuest(route.params['name']),
        },
      },
      {
        path: ':name/update',
        component: QuestCreateUpdatePageComponent,
        data: { name: 'quest-update', requiredMinimumRole: 'member' },
        resolve: {
          questGivers: () =>
            inject(QuestCreateUpdatePageStore).loadQuestGivers(),
          questTakers: () =>
            inject(QuestCreateUpdatePageStore).loadQuestTakers(),
          questStates: () =>
            inject(QuestCreateUpdatePageStore).loadQuestStates(),
          campaignSessions: () =>
            inject(QuestCreateUpdatePageStore).loadCampaignSessions(),
          quest: (route: ActivatedRouteSnapshot) =>
            inject(QuestCreateUpdatePageStore).loadQuest(route.params['name']),
        },
        canDeactivate: [onExitReset(QuestCreateUpdatePageStore)],
      },
    ],
  },
  // Spells
  {
    path: 'spells',
    component: SpellsPageComponent,
    data: { name: 'spells', requiredMinimumRole: 'guest' },
    resolve: {
      playerClasses: () => inject(SpellsPageStore).loadPlayerClasses(),
      spells: () => inject(SpellsPageStore).loadSpells(),
    },
    canDeactivate: [onExitReset(SpellsPageStore)],
  },
  // Rules
  {
    path: 'rules',
    component: RulesPageComponent,
    data: { name: 'rules', requiredMinimumRole: 'guest' },
    resolve: {
      rules: () => inject(RulesPageStore).loadRules(),
    },
    canDeactivate: [onExitReset(RulesPageStore)],
  },
  // Sessions
  {
    path: 'sessions',
    component: SessionsPageComponent,
    data: { name: 'sessions', requiredMinimumRole: 'guest' },
    resolve: {
      sessions: () => inject(SessionsPageStore).loadSessions(),
    },
    canDeactivate: [onExitReset(SessionsPageStore)],
  },
  // Quotes
  {
    path: 'quotes/:name',
    component: QuoteOverviewPageComponent,
    data: { name: 'quote-overview', requiredMinimumRole: 'guest' },
    providers: [QuoteOverviewPageStore],
    resolve: {
      quotes: (route: ActivatedRouteSnapshot) =>
        inject(QuoteOverviewPageStore).loadQuotes(route.params['name']),
      characters: () => inject(QuoteOverviewPageStore).loadCampaignCharacters(),
      sessions: () => inject(QuoteOverviewPageStore).loadCampaignSessions(),
      character: (route: ActivatedRouteSnapshot) =>
        inject(QuoteOverviewPageStore).loadCharacter(route.params['name']),
      encounters: () => inject(QuoteOverviewPageStore).loadCampaignEncounters(),
    },
    canDeactivate: [onExitReset(QuoteOverviewPageStore)],
  },
  // Maps
  {
    path: 'map',
    children: [
      {
        path: 'create',
        component: MapCreateUpdatePageComponent,
        data: { name: 'map-create', requiredMinimumRole: 'member' },
        canDeactivate: [onExitReset(MapPageStore)],
      },
      {
        path: 'default',
        component: MapPageComponent,
        data: { name: 'default-map', requiredMinimumRole: 'guest' },
        resolve: {
          maps: () => inject(MapPageStore).loadCampaignMaps(),
          map: () => inject(MapPageStore).loadDefaultMap(),
        },
        canDeactivate: [onExitReset(MapPageStore)],
      },
      {
        path: ':name',
        component: MapPageComponent,
        data: { name: 'map', requiredMinimumRole: 'guest' },
        resolve: {
          maps: () => inject(MapPageStore).loadCampaignMaps(),
          map: (route: ActivatedRouteSnapshot) =>
            inject(MapPageStore).loadMap(route.params['name']),
        },
        canDeactivate: [onExitReset(MapPageStore)],
      },
      {
        path: ':name/update',
        component: MapCreateUpdatePageComponent,
        data: { name: 'map-update', requiredMinimumRole: 'member' },
        resolve: {
          map: (route: ActivatedRouteSnapshot) =>
            inject(MapCreateUpdateStore).loadMap(route.params['name']),
        },
        canDeactivate: [onExitReset(MapPageStore)],
      },
    ],
  },
  // Marker
  {
    path: 'marker',
    children: [
      {
        path: ':parent_location_name/:location_name/create',
        data: { name: 'marker-create', requiredMinimumRole: 'guest' },
        component: MarkerCreateUpdatePageComponent,
        providers: [MarkerCreateUpdateStore],
        // canDeactivate: [onExitReset(MarkerCreateUpdateStore)],
        resolve: {
          maps: () => inject(MarkerCreateUpdateStore).loadCampaignMaps(),
          locations: () =>
            inject(MarkerCreateUpdateStore).loadCampaignLocations(),
          markerTypes: () => inject(MarkerCreateUpdateStore).loadMarkerTypes(),
        },
      },
      {
        path: ':latitude/:longitude/:map_name/create',
        data: { name: 'marker-map-create', requiredMinimumRole: 'guest' },
        component: MarkerCreateUpdatePageComponent,
        providers: [MarkerCreateUpdateStore],
        // canDeactivate: [onExitReset(MarkerCreateUpdateStore)],
        resolve: {
          maps: () => inject(MarkerCreateUpdateStore).loadCampaignMaps(),
          locations: () =>
            inject(MarkerCreateUpdateStore).loadCampaignLocations(),
          markerTypes: () => inject(MarkerCreateUpdateStore).loadMarkerTypes(),
        },
      },
      {
        path: ':parent_location_name/:location_name/:map_name',
        data: { name: 'marker', requiredMinimumRole: 'guest' },
        component: MarkerPageComponent,
        providers: [MarkerPageStore],
        canDeactivate: [onExitReset(MarkerPageStore)],
        resolve: {
          marker: (route: ActivatedRouteSnapshot) =>
            inject(MarkerPageStore).loadMarker({
              parentLocationName: route.params['parent_location_name'],
              locationName: route.params['location_name'],
              name: route.params['map_name'],
            }),
        },
      },
      {
        path: ':parent_location_name/:location_name/:map_name/update',
        data: { name: 'marker-update', requiredMinimumRole: 'guest' },
        component: MarkerCreateUpdatePageComponent,
        providers: [MarkerCreateUpdateStore],
        // canDeactivate: [onExitReset(MarkerCreateUpdateStore)],
        resolve: {
          maps: () => inject(MarkerCreateUpdateStore).loadCampaignMaps(),
          locations: () =>
            inject(MarkerCreateUpdateStore).loadCampaignLocations(),
          markerTypes: () => inject(MarkerCreateUpdateStore).loadMarkerTypes(),
          marker: (route: ActivatedRouteSnapshot) =>
            inject(MarkerPageStore).loadMarker({
              parentLocationName: route.params['parent_location_name'],
              locationName: route.params['location_name'],
              name: route.params['map_name'],
            }),
        },
      },
    ],
  },
  // SessionAudio
  {
    path: 'sessionaudio',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SessionAudioOverviewPageComponent,
        data: { name: 'sessionaudio-overview', requiredMinimumRole: 'guest' },
        providers: [SessionAudioOverviewPageStore],
        resolve: {
          sessionAudios: () =>
            inject(SessionAudioOverviewPageStore).loadCampaignSessionAudios(),
        },
        canDeactivate: [onExitReset(SessionAudioOverviewPageStore)],
      },
      {
        path: 'create',
        component: SessionaudioCreateUpdatePageComponent,
        data: { name: 'sessionaudio-create', requiredMinimumRole: 'member' },
        providers: [SessionaudioCreateUpdatePageStore],
        resolve: {
          campaignSessions: () =>
            inject(SessionaudioCreateUpdatePageStore).loadCampaignSessions(),
        },
        canDeactivate: [onExitReset(SessionaudioCreateUpdatePageStore)],
      },
      {
        path: ':isMainSession/:sessionNumber',
        component: SessionaudioPageComponent,
        data: { name: 'sessionaudio', requiredMinimumRole: 'guest' },
        providers: [SessionaudioPageStore],
        resolve: {
          sessionaudio: (route: ActivatedRouteSnapshot) =>
            inject(SessionaudioPageStore).loadSessionaudio({
              isMainSession: route.params['isMainSession'],
              sessionNumber: route.params['sessionNumber'],
            }),
          timestamps: (route: ActivatedRouteSnapshot) =>
            inject(SessionaudioPageStore).loadTimestamps({
              isMainSession: route.params['isMainSession'],
              sessionNumber: route.params['sessionNumber'],
            }),
        },
      },
      {
        path: ':isMainSession/:sessionNumber/update',
        component: SessionaudioCreateUpdatePageComponent,
        data: { name: 'sessionaudio-update', requiredMinimumRole: 'member' },
        providers: [SessionaudioCreateUpdatePageStore],
        resolve: {
          campaignSessions: () =>
            inject(SessionaudioCreateUpdatePageStore).loadCampaignSessions(),
          sessionaudio: (route: ActivatedRouteSnapshot) =>
            inject(SessionaudioCreateUpdatePageStore).loadSessionaudio({
              isMainSession: route.params['isMainSession'],
              sessionNumber: route.params['sessionNumber'],
            }),
        },
        canDeactivate: [onExitReset(SessionaudioCreateUpdatePageStore)],
      },
    ],
  },
];

export const campaignRoutes = [
  {
    path: '',
    children: [...overviewRoutes, ...detailRoutes],
    canActivate: [campaignGuard],
  },
];
