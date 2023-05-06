import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MoleculesModule } from '../../design/molecules';
import { DiaryentryEncountersComponent } from './diaryentry-encounters/diaryentry-encounters.component';
import { EncounterAccordionComponent } from './encounter-accordion/encounter-accordion.component';
import { EncounterComponent } from './encounter/encounter.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FormlyDatepickerFieldComponent } from './formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from './formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from './formly-select-disable/formly-select-disable-field.component';
import { IconCardListComponent } from './icon-card-list/icon-card-list.component';
import { ImageCarouselCardComponent } from './image-carousel-card/image-carousel-card.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { LocationAccordionComponent } from './location-accordion/location-accordion.component';
import { LocationComponent } from './location/location.component';
import { NgxLeafletMapComponent } from './ngx-leaflet-map/ngx-leaflet-map.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageComponent } from './page/page.component';
import { PlayerComponent } from './player/player.component';
import { QuoteFieldComponent } from './quote-field/quote-field.component';
import { QuoteComponent } from './quote/quote.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SessionaudioPlayerComponent } from './sessionaudio-player/sessionaudio-player.component';



@NgModule({
  declarations: [
    FilterListComponent,
    FormlyDatepickerFieldComponent,
    FormlyEditorFieldComponent,
    FormlySelectDisableFieldComponent,
    IconCardListComponent,
    ImageGridComponent,
    PageComponent,
    PageContainerComponent,
    SidebarComponent,
    PlayerComponent,
    NgxLeafletMapComponent,
    DiaryentryEncountersComponent,
    EncounterAccordionComponent,
    EncounterComponent,
    ImageCarouselCardComponent,
    ImageCarouselComponent,
    LocationAccordionComponent,
    LocationComponent,
    QuoteComponent,
    QuoteFieldComponent,
    SessionaudioPlayerComponent,
  ],
  imports: [
    CommonModule,
    FormlyModule,
    MoleculesModule,
    LeafletModule,
  ],
  exports: [
    FilterListComponent,
    FormlyDatepickerFieldComponent,
    FormlyEditorFieldComponent,
    FormlySelectDisableFieldComponent,
    IconCardListComponent,
    ImageGridComponent,
    MoleculesModule,
    PageComponent,
    PageContainerComponent,
    SidebarComponent,
    PlayerComponent,
    NgxLeafletMapComponent,
    DiaryentryEncountersComponent,
    EncounterAccordionComponent,
    EncounterComponent,
    ImageCarouselCardComponent,
    ImageCarouselComponent,
    LocationAccordionComponent,
    LocationComponent,
    QuoteComponent,
    QuoteFieldComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
  ]
})
export class OrganismsModule { }
