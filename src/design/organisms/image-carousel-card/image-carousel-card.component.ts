import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';

import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { IconComponent } from 'src/design/atoms/icon/icon.component';
import { SpinnerComponent } from 'src/design/atoms/spinner/spinner.component';
import { FormComponent } from 'src/design/molecules';
import { Image } from '../../../app/_models/image';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

type State = 'DISPLAY' | 'DELETE' | 'UPDATE' | 'UPDATE_OUTDATED' | 'CREATE';

@Component({
    selector: 'app-image-carousel-card',
    templateUrl: './image-carousel-card.component.html',
    styleUrls: ['./image-carousel-card.component.scss'],
    imports: [
        ImageCarouselComponent,
        SpinnerComponent,
        IconComponent,
        FormComponent,
        ButtonComponent,
        NgTemplateOutlet,
    ]
})
export class ImageCarouselCardComponent implements OnInit, OnChanges {
  @Input() images!: Image[];
  @Input() serverUrl!: string;
  @Input() serverModel?: Image;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;

  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();

  currentImageIndex: number = 0;
  currentImage!: Image;
  state: State = 'DISPLAY';
  userModel?: Image = {} as Image;
  isLoading: boolean = false;

  createFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'name',
      label: 'Image Title',
      required: false,
      inputKind: 'STRING',
    }),
    this.formlyService.buildInputConfig({
      key: 'character_article',
      label: 'Character Article',
      hide: true,
      inputKind: 'NUMBER',
      required: false,
    }),
    this.formlyService.buildInputConfig({
      key: 'location_article',
      label: 'Location Article',
      hide: true,
      inputKind: 'NUMBER',
      required: false,
    }),
    this.formlyService.buildInputConfig({
      key: 'creature_article',
      label: 'Creature Article',
      hide: true,
      inputKind: 'NUMBER',
      required: false,
    }),
    this.formlyService.buildInputConfig({
      key: 'organization_article',
      label: 'Organization Article',
      hide: true,
      inputKind: 'NUMBER',
      required: false,
    }),
    this.formlyService.buildInputConfig({
      key: 'encounter_article',
      label: 'Encounter Article',
      hide: true,
      inputKind: 'NUMBER',
      required: false,
    }),
    this.formlyService.buildInputConfig({
      key: 'item_article',
      label: 'Item Article',
      hide: true,
      inputKind: 'NUMBER',
      required: false,
      placeholder: undefined,
    }),
    this.formlyService.buildFileFieldConfig({
      label: 'Image file',
      key: 'image',
      fileButtonType: 'DARK',
    }),
  ];

  updateFields: FormlyFieldConfig[] = this.formlyService.toUpdateForm(
    this.createFields,
  );

  constructor(private formlyService: FormlyService) {}

  ngOnInit(): void {
    this.currentImage = this.images[this.currentImageIndex];
  }

  ngOnChanges(): void {
    this.currentImage = this.images[this.currentImageIndex];
  }

  changeState(event: any, newState: State) {
    this.userModel = event ?? null;
    this.state = newState;
  }

  onSlide(slideEvent: { event: NgbSlideEvent; index: number }) {
    this.currentImageIndex = slideEvent.index;
    this.currentImage = this.images[this.currentImageIndex];
  }

  onCancel(): void {
    this.changeState(null, 'DISPLAY');
  }

  onSubmit(event: any): void {
    switch (this.state) {
      case 'DELETE':
        this.deleteImage.emit(this.currentImage);
        break;
      case 'UPDATE':
      case 'UPDATE_OUTDATED':
        this.updateImage.emit(this.userModel);
        break;
      case 'CREATE':
        this.createImage.emit(this.userModel);
        break;
      default:
        throw `ImageCarouselCard - Submitted form while in state '${this.state}', which is not possible.`;
    }

    this.userModel = {} as Image;
    this.changeState(null, 'DISPLAY');
  }
}
