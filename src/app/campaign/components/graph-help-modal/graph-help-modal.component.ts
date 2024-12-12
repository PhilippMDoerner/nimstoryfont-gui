import {
  ChangeDetectionStrategy,
  Component,
  inject,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from '../../../../design/atoms/icon/icon.component';
import { SeparatorComponent } from '../../../../design/atoms/separator/separator.component';

const GRAPH_INFO_RULES = [
  {
    nodeKind1: 'Organization',
    nodeKind2: 'Location',
    description: "The location contains that organization's headquarter",
  },
  {
    nodeKind1: 'Organization',
    nodeKind2: 'Character',
    description: 'The character is a member of that organization',
  },
  {
    nodeKind1: 'Location',
    nodeKind2: 'Location',
    description: 'The location is part of the other location',
  },
  {
    nodeKind1: 'Location',
    nodeKind2: 'Character',
    description: 'The character is in that location',
  },
  {
    nodeKind1: 'Character',
    nodeKind2: 'Item',
    description: 'The character owns that item',
  },
  {
    nodeKind1: 'Organization',
    nodeKind2: 'Organization',
    description:
      'The organization is a smaller group within the other organization',
  },
  {
    nodeKind1: 'Any',
    nodeKind2: 'Any',
    description: 'A custom relationship between 2 articles',
  },
];

const GRAPH_INTERACTIONS = [
  {
    event: 'Hovering a node',
    description: 'Node changes color',
  },
  {
    event: 'Left-click node',
    description: 'Node gets selected for creating a custom connection',
  },
  {
    event: 'Right-click node',
    description: 'Open a context menu with information about the node',
  },
  {
    event: 'Hovering a link (clicking a link on mobile)',
    description: 'Link expand and shows label',
  },
  {
    event: 'Right-click link',
    description:
      'Open a context menu with possible actions for the link (some may be disabled for specific kinds of links)',
  },
  {
    event: 'Click on graph background',
    description:
      'Reset node selection, close context menus and reset any links that might have changed',
  },
];

@Component({
  selector: 'app-graph-help-modal',
  standalone: true,
  imports: [IconComponent, SeparatorComponent],
  templateUrl: './graph-help-modal.component.html',
  styleUrl: './graph-help-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphHelpModalComponent {
  modalService = inject(NgbModal);

  infoRules = GRAPH_INFO_RULES;
  infoInteractions = GRAPH_INTERACTIONS;

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-title',
      modalDialogClass: 'border border-info border-3 rounded mymodal',
    });
  }
}
