import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { httpInterceptorProviders } from './_interceptors';
import { dateMessage, dateValidator, faPrefixMessage, fieldMatchValidator, fieldsDontMatchMessage, hasSpecialCharactersMessage, iconValidator, integerValidator, invalidTimeMessage, notIntegerMessage, requiredIconMessage, requiredIconValidator, requiredMessage, requiredValidator, sessionAlreadyHasAuthor, sessionAuthorUniqueValidator, specialCharacterValidator, timeValidator } from './_services/formly/validators';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignEffects } from './app/_effects/campaign.effect';
import { LoadConfigTablesEffects } from './app/_effects/config-tables.effect';
import { GroupEffects } from './app/_effects/group.effect';
import { LoadRecentlyUpdatedArticlesEffects } from './app/_effects/load-recently-updated-article.effect';
import { LoginEffects } from './app/_effects/login.effect';
import { MapEffects } from './app/_effects/map.effect';
import { ResetPasswordEffects } from './app/_effects/resetPassword.effect';
import { StatisticEffects } from './app/_effects/statistics.effect';
import { UserEffects } from './app/_effects/user.effect';
import { CampaignOverviewPageComponent } from './app/campaign-overview-page/campaign-overview-page.component';
import { ConfigAdministrationPageComponent } from './app/config-administration-page/config-administration-page.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { MapPageComponent } from './app/map-page/map-page.component';
import { ProfilePageComponent } from './app/profile-page/profile-page.component';
import { SiteAdministrationPageComponent } from './app/site-administration-page/site-administration-page.component';
import { FormlyFileFieldComponent } from './design/molecules';
import { FormlyDatepickerFieldComponent, FormlyEditorFieldComponent, FormlySelectDisableFieldComponent } from './design/organisms';
import { TemplatesModule } from './design/templates/templates.module';
import { metaReducers, rootReducers } from './root.reducer';

@NgModule({ declarations: [
        AppComponent,
        MapPageComponent,
        HomePageComponent,
        CampaignOverviewPageComponent,
        LoginPageComponent,
        ProfilePageComponent,
        ConfigAdministrationPageComponent,
        SiteAdministrationPageComponent,
    ],
    bootstrap: [AppComponent], imports: [AdministrationModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LeafletModule,
        FormlyModule.forRoot({
            types: [
                { name: 'file', component: FormlyFileFieldComponent, wrappers: ['form-field'] },
                { name: 'text-editor', component: FormlyEditorFieldComponent },
                { name: 'select-disable', component: FormlySelectDisableFieldComponent },
                { name: 'datepicker', component: FormlyDatepickerFieldComponent },
            ],
            validationMessages: [
                invalidTimeMessage,
                requiredMessage,
                dateMessage,
                requiredIconMessage,
                faPrefixMessage,
                notIntegerMessage,
                hasSpecialCharactersMessage,
                fieldsDontMatchMessage,
                sessionAlreadyHasAuthor,
            ],
            validators: [
                timeValidator,
                requiredValidator,
                dateValidator,
                requiredIconValidator,
                iconValidator,
                integerValidator,
                specialCharacterValidator,
                fieldMatchValidator,
                sessionAuthorUniqueValidator,
            ],
        }),
        StoreModule.forRoot(rootReducers, { metaReducers }),
        EffectsModule.forRoot([
            CampaignEffects,
            LoadRecentlyUpdatedArticlesEffects,
            LoginEffects,
            MapEffects,
            ResetPasswordEffects,
            LoadConfigTablesEffects,
            UserEffects,
            StatisticEffects,
            GroupEffects,
        ]),
        TemplatesModule], providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
        httpInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
