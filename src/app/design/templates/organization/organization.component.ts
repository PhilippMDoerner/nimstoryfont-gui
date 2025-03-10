import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import { Image } from 'src/app/_models/image';
import { Organization } from 'src/app/_models/organization';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonLinkComponent } from '../../atoms/button-link/button-link.component';
import { ListEntry } from '../../molecules';
import { ArticleFooterComponent } from '../../molecules/article-footer/article-footer.component';
import { ListComponent } from '../../molecules/list/list.component';
import { EditableTextComponent } from '../../organisms/editable-text/editable-text.component';
import { ImageCarouselCardComponent } from '../../organisms/image-carousel-card/image-carousel-card.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  imports: [
    PageContainerComponent,
    RouterLink,
    ButtonLinkComponent,
    NgTemplateOutlet,
    ImageCarouselCardComponent,
    EditableTextComponent,
    ListComponent,
    ArticleFooterComponent,
    HotkeyDirective,
  ],
})
export class OrganizationComponent {
  organization = input.required<Organization>();
  organizationServerModel = input.required<Organization | undefined>();
  serverUrl = input.required<string>();
  imageServerModel = input.required<Image | undefined>();
  canUpdate = input.required<boolean>();
  canCreate = input.required<boolean>();
  canDelete = input.required<boolean>();

  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  @Output() organizationDelete: EventEmitter<Organization> = new EventEmitter();
  organizationUpdate = output<Organization>();

  overviewUrl = computed(() => {
    const campaignName = this.organization().campaign_details?.name;
    return this.routingService.getRoutePath('organization-overview', {
      campaign: campaignName,
    });
  });
  updateUrl = computed(() => {
    const campaignName = this.organization().campaign_details?.name;
    return this.routingService.getRoutePath('organization-update', {
      campaign: campaignName,
      name: this.organization().name,
    });
  });

  organizationMembers = computed<ListEntry[]>(() => {
    return (
      this.organization().members?.map((member) => ({
        label: member.name,
        link: this.routingService.getRoutePath('character', {
          campaign: this.organization().campaign_details?.name,
          name: member.name,
        }),
      })) ?? []
    );
  });
  headquarterUrl = computed(() => {
    const campaignName = this.organization().campaign_details?.name;
    return this.routingService.getRoutePath('location', {
      campaign: campaignName,
      name: this.organization().headquarter_details?.name,
      parent_name: this.organization().headquarter_details?.parent_name,
    });
  });
  leaderUrl = computed(() => {
    const campaignName = this.organization().campaign_details?.name;
    return this.routingService.getRoutePath('character', {
      campaign: campaignName,
      name: this.organization().leader,
    });
  });

  constructor(private routingService: RoutingService) {}

  routeToCharacterCreation() {
    this.routingService.routeToPath('character-create', {
      campaign: this.organization().campaign_details?.name,
    });
  }

  onDescriptionUpdate(description: string): void {
    const isUpdatedAfterBeingOutdated =
      this.organizationServerModel() !== undefined;
    const itemToUpdate = isUpdatedAfterBeingOutdated
      ? this.organizationServerModel()
      : this.organization();

    if (itemToUpdate) {
      this.organizationUpdate.emit({ ...itemToUpdate, description });
    }
  }
}
