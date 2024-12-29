import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { campaignGuard } from '../_guards/campaign.guard';
import { onExitReset } from '../_guards/onExitReset.guard';
import { CampaignOverviewRoute } from '../_models/route';
import { ConfigAdministrationPageStore } from '../administration/pages/config-administration-page/config-administration-page.store';
import { CharacterCreateUpdateStore } from './pages/character-create-update-page/character-create-update-page.store';
import { CharacterStore } from './pages/character-page/character-page.store';
import { CreaturePageStore } from './pages/creature-page/creature-page.store';
import { CreatureUpdateCreateStore } from './pages/creature-update-create-page/creature-update-create-page.store';
import { DiaryEntryCreateUpdatePageStore } from './pages/diaryentry-create-update-page/diaryentry-create-update-page.store';
import { DiaryentryPageStore } from './pages/diaryentry-page/diaryentry-page.store';
import { GeneralOverviewPageComponent } from './pages/general-overview-page/general-overview-page.component';
import { GraphPageStore } from './pages/graph-page/graph-page.store';
import { HomePageStore } from './pages/home-page/home-page.store';
import { ItemCreateUpdateStore } from './pages/item-create-update-page/item-create-update-page.store';
import { ItemPageStore } from './pages/item-page/item-page.store';
import { LocationCreateUpdateStore } from './pages/location-create-update-page/location-create-update-page.store';
import { LocationPageStore } from './pages/location-page/location-page.store';
import { MapCreateUpdateStore } from './pages/map-create-update-page/map-create-update-page.store';
import { MapPageStore } from './pages/map-page/map-page.store';
import { MarkerCreateUpdateStore } from './pages/marker-create-update-page/marker-create-update-page.store';
import { MarkerPageStore } from './pages/marker-page/marker-page.store';
import { OrganizationCreateUpdatePageStore } from './pages/organization-create-update-page/organization-create-update-page.store';
import { OrganizationStore } from './pages/organization-page/organization-page.store';
import { QuestCreateUpdatePageStore } from './pages/quest-create-update-page/quest-create-update-page.store';
import { QuestPageStore } from './pages/quest-page/quest-page.store';
import { QuestOverviewPageStore } from './pages/quests-overview-page/quests-overview-page.store';
import { QuoteOverviewPageStore } from './pages/quote-overview-page/quote-overview-page.store';
import { RulesPageStore } from './pages/rules-page/rules-page.store';
import { SearchPageStore } from './pages/search-page/search-page.store';
import { SessionAudioOverviewPageStore } from './pages/session-audio-overview-page/session-audio-overview-page.store';
import { SessionaudioCreateUpdatePageStore } from './pages/sessionaudio-create-update-page/sessionaudio-create-update-page.store';
import { SessionaudioPageStore } from './pages/sessionaudio-page/sessionaudio-page.store';
import { SessionsPageStore } from './pages/sessions-page/sessions-page.store';
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
    loadComponent: () =>
      import('./pages/campaign-admin-page/campaign-admin-page.component').then(
        (m) => m.CampaignAdminPageComponent,
      ),
    data: { name: 'campaign-admin', requiredMinimumRole: 'admin' },
  },
  {
    path: 'admin/update',
    loadComponent: () =>
      import(
        './pages/campaign-update-page/campaign-update-page.component'
      ).then((m) => m.CampaignUpdatePageComponent),
    data: { name: 'campaign-update', requiredMinimumRole: 'admin' },
  },
  //Home Routes
  {
    path: `home`,
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
    data: { name: 'home', requiredMinimumRole: 'guest' },
    providers: [HomePageStore],
    resolve: {
      articles: () => inject(HomePageStore).loadMoreArticles(0),
    },
    canDeactivate: [onExitReset(HomePageStore)],
  },
  // Search
  {
    path: 'search/:searchString',
    loadComponent: () =>
      import('./pages/search-page/search-page.component').then(
        (m) => m.SearchPageComponent,
      ),
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
        loadComponent: () =>
          import(
            './pages/character-create-update-page/character-create-update-page.component'
          ).then((m) => m.CharacterUpdatePageComponent),
        data: { name: 'character-create', requiredMinimumRole: 'member' },
        resolve: {
          loadLocations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignLocations(),
          loadOrganizations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignOrganizations(),
        },
        canDeactivate: [onExitReset(CharacterCreateUpdateStore)],
      },
      {
        path: ':name',
        loadComponent: () =>
          import('./pages/character-page/character-page.component').then(
            (m) => m.CharacterPageComponent,
          ),
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
          loadClasses: () => inject(CharacterStore).loadCampaignPlayerClasses(),
        },
        canDeactivate: [onExitReset(CharacterStore)],
      },
      {
        path: ':name/update',
        loadComponent: () =>
          import(
            './pages/character-create-update-page/character-create-update-page.component'
          ).then((m) => m.CharacterUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/creature-update-create-page/creature-update-create-page.component'
          ).then((m) => m.CreatureUpdateCreateComponent),
        data: { name: 'creature-create', requiredMinimumRole: 'member' },
        resolve: {},
        canDeactivate: [onExitReset(CreatureUpdateCreateStore)],
      },
      {
        path: ':name',
        loadComponent: () =>
          import('./pages/creature-page/creature-page.component').then(
            (m) => m.CreaturePageComponent,
          ),
        data: { name: 'creature', requiredMinimumRole: 'guest' },
        resolve: {
          loadCreature: (route: ActivatedRouteSnapshot) =>
            inject(CreaturePageStore).loadCreature(route.params['name']),
        },
        canDeactivate: [onExitReset(CreaturePageStore)],
      },
      {
        path: ':name/update',
        loadComponent: () =>
          import(
            './pages/creature-update-create-page/creature-update-create-page.component'
          ).then((m) => m.CreatureUpdateCreateComponent),
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
        loadComponent: () =>
          import(
            './pages/item-create-update-page/item-create-update-page.component'
          ).then((m) => m.ItemCreateUpdatePageComponent),
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
        loadComponent: () =>
          import('./pages/item-page/item-page.component').then(
            (m) => m.ItemPageComponent,
          ),
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
        loadComponent: () =>
          import(
            './pages/item-create-update-page/item-create-update-page.component'
          ).then((m) => m.ItemCreateUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/diaryentry-create-update-page/diaryentry-create-update-page.component'
          ).then((m) => m.DiaryentryCreateUpdatePageComponent),
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
            loadComponent: () =>
              import('./pages/diaryentry-page/diaryentry-page.component').then(
                (m) => m.DiaryentryPageComponent,
              ),
            data: { name: 'diaryentry', requiredMinimumRole: 'guest' },
          },
          {
            path: 'encounter/:encounterTitle',
            loadComponent: () =>
              import('./pages/diaryentry-page/diaryentry-page.component').then(
                (m) => m.DiaryentryPageComponent,
              ),
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
        loadComponent: () =>
          import(
            './pages/diaryentry-create-update-page/diaryentry-create-update-page.component'
          ).then((m) => m.DiaryentryCreateUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/location-create-update-page/location-create-update-page.component'
          ).then((m) => m.LocationCreateUpdatePageComponent),
        data: { name: 'location-create', requiredMinimumRole: 'member' },
        canDeactivate: [onExitReset(LocationCreateUpdateStore)],
        resolve: {
          loadLocations: () =>
            inject(LocationCreateUpdateStore).loadCampaignLocations(),
        },
      },
      {
        path: ':parent_name/:name',
        loadComponent: () =>
          import('./pages/location-page/location-page.component').then(
            (m) => m.LocationPageComponent,
          ),
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
        loadComponent: () =>
          import(
            './pages/location-create-update-page/location-create-update-page.component'
          ).then((m) => m.LocationCreateUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/organization-create-update-page/organization-create-update-page.component'
          ).then((m) => m.OrganizationCreateUpdatePageComponent),
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
        loadComponent: () =>
          import('./pages/organization-page/organization-page.component').then(
            (m) => m.OrganizationPageComponent,
          ),
        data: { name: 'organization', requiredMinimumRole: 'guest' },
        resolve: {
          organization: (route: ActivatedRouteSnapshot) =>
            inject(OrganizationStore).loadOrganization(route.params['name']),
        },
        canDeactivate: [onExitReset(OrganizationStore)],
      },
      {
        path: ':name/update',
        loadComponent: () =>
          import(
            './pages/organization-create-update-page/organization-create-update-page.component'
          ).then((m) => m.OrganizationCreateUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/quests-overview-page/quests-overview-page.component'
          ).then((m) => m.QuestsOverviewPageComponent),
        data: { name: 'quest-overview', requiredMinimumRole: 'guest' },
        resolve: {
          quests: () => inject(QuestOverviewPageStore).loadCampaignQuests(),
        },
      },
      {
        path: 'create',
        loadComponent: () =>
          import(
            './pages/quest-create-update-page/quest-create-update-page.component'
          ).then((m) => m.QuestCreateUpdatePageComponent),
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
        loadComponent: () =>
          import('./pages/quest-page/quest-page.component').then(
            (m) => m.QuestPageComponent,
          ),
        data: { name: 'quest', requiredMinimumRole: 'guest' },
        resolve: {
          quest: (route: ActivatedRouteSnapshot) =>
            inject(QuestPageStore).loadQuest(route.params['name']),
        },
      },
      {
        path: ':name/update',
        loadComponent: () =>
          import(
            './pages/quest-create-update-page/quest-create-update-page.component'
          ).then((m) => m.QuestCreateUpdatePageComponent),
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
    resolve: {
      playerClasses: () => inject(SpellsPageStore).loadPlayerClasses(),
      spells: () => inject(SpellsPageStore).loadSpells(),
    },
    canDeactivate: [onExitReset(SpellsPageStore)],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/spells-page/spells-page.component').then(
            (m) => m.SpellsPageComponent,
          ),
        data: { name: 'spells', requiredMinimumRole: 'guest' },
      },
      {
        path: ':name',
        loadComponent: () =>
          import('./pages/spells-page/spells-page.component').then(
            (m) => m.SpellsPageComponent,
          ),
        data: { name: 'spell', requiredMinimumRole: 'guest' },
      },
    ],
  },
  // Rules
  {
    path: 'rules',
    resolve: {
      rules: () => inject(RulesPageStore).loadRules(),
    },
    canDeactivate: [onExitReset(RulesPageStore)],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/rules-page/rules-page.component').then(
            (m) => m.RulesPageComponent,
          ),
        data: { name: 'rules', requiredMinimumRole: 'guest' },
      },
      {
        path: ':name',
        loadComponent: () =>
          import('./pages/rules-page/rules-page.component').then(
            (m) => m.RulesPageComponent,
          ),
        data: { name: 'rule', requiredMinimumRole: 'guest' },
      },
    ],
  },
  // Sessions
  {
    path: 'sessions',
    loadComponent: () =>
      import('./pages/sessions-page/sessions-page.component').then(
        (m) => m.SessionsPageComponent,
      ),
    data: { name: 'sessions', requiredMinimumRole: 'guest' },
    resolve: {
      sessions: () => inject(SessionsPageStore).loadSessions(),
    },
    canDeactivate: [onExitReset(SessionsPageStore)],
  },
  // Quotes
  {
    path: 'quotes/:name',
    loadComponent: () =>
      import('./pages/quote-overview-page/quote-overview-page.component').then(
        (m) => m.QuoteOverviewPageComponent,
      ),
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
        loadComponent: () =>
          import(
            './pages/map-create-update-page/map-create-update-page.component'
          ).then((m) => m.MapCreateUpdatePageComponent),
        data: { name: 'map-create', requiredMinimumRole: 'member' },
        canDeactivate: [onExitReset(MapPageStore)],
      },
      {
        path: 'default',
        loadComponent: () =>
          import('./pages/map-page/map-page.component').then(
            (m) => m.MapPageComponent,
          ),
        data: { name: 'default-map', requiredMinimumRole: 'guest' },
        resolve: {
          maps: () => inject(MapPageStore).loadCampaignMaps(),
          map: () => inject(MapPageStore).loadDefaultMap(),
        },
        canDeactivate: [onExitReset(MapPageStore)],
      },
      {
        path: ':name',
        loadComponent: () =>
          import('./pages/map-page/map-page.component').then(
            (m) => m.MapPageComponent,
          ),
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
        loadComponent: () =>
          import(
            './pages/map-create-update-page/map-create-update-page.component'
          ).then((m) => m.MapCreateUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/marker-create-update-page/marker-create-update-page.component'
          ).then((m) => m.MarkerCreateUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/marker-create-update-page/marker-create-update-page.component'
          ).then((m) => m.MarkerCreateUpdatePageComponent),
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
        loadComponent: () =>
          import('./pages/marker-page/marker-page.component').then(
            (m) => m.MarkerPageComponent,
          ),
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
        loadComponent: () =>
          import(
            './pages/marker-create-update-page/marker-create-update-page.component'
          ).then((m) => m.MarkerCreateUpdatePageComponent),
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
        loadComponent: () =>
          import(
            './pages/session-audio-overview-page/session-audio-overview-page.component'
          ).then((m) => m.SessionAudioOverviewPageComponent),
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
        loadComponent: () =>
          import(
            './pages/sessionaudio-create-update-page/sessionaudio-create-update-page.component'
          ).then((m) => m.SessionaudioCreateUpdatePageComponent),
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
        loadComponent: () =>
          import('./pages/sessionaudio-page/sessionaudio-page.component').then(
            (m) => m.SessionaudioPageComponent,
          ),
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
        loadComponent: () =>
          import(
            './pages/sessionaudio-create-update-page/sessionaudio-create-update-page.component'
          ).then((m) => m.SessionaudioCreateUpdatePageComponent),
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
  // Graph
  {
    path: 'wiki-overview',
    loadComponent: () =>
      import('./pages/graph-page/graph-page.component').then(
        (m) => m.GraphPageComponent,
      ),
    providers: [GraphPageStore],
    resolve: {
      nodeMap: () => inject(GraphPageStore).loadGraph(),
      linkTypes: () => inject(GraphPageStore).loadCustomLinkTypes(),
    },
    data: { name: 'graph', requiredMinimumRole: 'guest' },
  },
  // Campaign Configs
  {
    path: `configtables`,
    loadComponent: () =>
      import(
        './pages/campaign-config-administration-page/campaign-config-administration-page.component'
      ).then((m) => m.CampaignConfigAdministrationPageComponent),
    data: { name: 'campaign-config-tables' },
    canActivate: [campaignGuard],
    providers: [ConfigAdministrationPageStore],
    canDeactivate: [onExitReset(ConfigAdministrationPageStore)],
  },
];

export const campaignRoutes = [
  {
    path: '',
    children: [...overviewRoutes, ...detailRoutes],
    data: { requiredMinimumRole: 'guest' },
    canActivate: [campaignGuard],
  },
];
