import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  isDevMode,
  provideAppInitializer,
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
import { addTokenInServerInterceptor } from './_interceptors/serverCookieInterceptor';
import { FORMLY_MODULE } from './_modules/formly_constants';
import { ROUTES } from './app-routing.module';
import { AuthStore } from './auth.store';
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
        addTokenInServerInterceptor,
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
    provideAppInitializer(() => {
      // debugNgzoneState(inject(NgZone), 5);
      inject(AuthStore).loadAuthData();
    }),
  ],
};
