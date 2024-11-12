import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { PageComponent } from 'src/design/organisms/page/page.component';
import { ToastOverlayComponent } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { addTokenInterceptor } from './_interceptors/tokenInterceptor';
import { FORMLY_MODULE } from './_modules/formly_constants';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStore } from './global.store';
import { NavigationStore } from './navigation.store';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    PageComponent,
    ToastOverlayComponent,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FORMLY_MODULE,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    provideHttpClient(withInterceptors([addTokenInterceptor])),
    GlobalStore,
    NavigationStore,
  ],
})
export class AppModule {}
