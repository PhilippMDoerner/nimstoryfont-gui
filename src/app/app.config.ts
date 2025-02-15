import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { errorInterceptor } from './_interceptors/errorInterceptor';
import { offlineInterceptor } from './_interceptors/offlineInterceptor';
import { addTokenInterceptor } from './_interceptors/tokenInterceptor';
import { FORMLY_MODULE } from './_modules/formly_constants';
import { ROUTES } from './app-routing.module';
import { GlobalStore } from './global.store';
import { NavigationStore } from './navigation.store';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FORMLY_MODULE),
    provideRouter(ROUTES, withViewTransitions()),
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    provideHttpClient(
      withFetch(),
      withInterceptors([
        addTokenInterceptor,
        offlineInterceptor,
        errorInterceptor,
      ]),
    ),
    GlobalStore,
    NavigationStore,
    provideAnimations(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideClientHydration(withEventReplay()),
  ],
};
