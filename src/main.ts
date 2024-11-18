/// <reference types="@angular/localize" />

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { errorInterceptor } from './app/_interceptors/errorInterceptor';
import { addTokenInterceptor } from './app/_interceptors/tokenInterceptor';
import { FORMLY_MODULE } from './app/_modules/formly_constants';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { GlobalStore } from './app/global.store';
import { NavigationStore } from './app/navigation.store';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, FORMLY_MODULE),
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    provideHttpClient(
      withInterceptors([addTokenInterceptor, errorInterceptor]),
    ),
    GlobalStore,
    NavigationStore,
    provideAnimations(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
}).catch((err) => console.error(err));
