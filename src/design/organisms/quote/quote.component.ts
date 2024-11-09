import {
  Component,
  computed,
  EventEmitter,
  input,
  OnChanges,
  Output,
  signal,
} from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';

import { ElementType } from 'src/design/atoms/_models/button';
import { Icon } from 'src/design/atoms/_models/icon';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { HtmlTextComponent } from 'src/design/atoms/html-text/html-text.component';
import { SeparatorComponent } from 'src/design/atoms/separator/separator.component';
import { SpinnerComponent } from 'src/design/atoms/spinner/spinner.component';
import { BadgeListComponent, BadgeListEntry } from 'src/design/molecules';
import { copyToClipboard } from 'src/utils/clipboard';
import { CharacterDetails } from '../../../app/_models/character';
import { Quote, QuoteConnection } from '../../../app/_models/quote';

type QuoteState =
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE'
  | 'DISPLAY'
  | 'UPDATE_OUTDATED';

type QuoteControl = {
  isVisible: boolean;
  title: string;
  type: ElementType;
  label?: string;
  icon: Icon;
  onClick: () => void;
};

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  standalone: true,
  imports: [
    HtmlTextComponent,
    BadgeListComponent,
    SeparatorComponent,
    ButtonComponent,
    SpinnerComponent,
  ],
})
export class QuoteComponent implements OnChanges {
  quote = input<Quote>();
  character = input.required<CharacterDetails>();
  campaignCharacters = input.required<OverviewItem[]>();
  canCreate = input(false);
  canUpdate = input(false);
  canDelete = input(false);

  @Output() quoteDelete: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteCreate: EventEmitter<null> = new EventEmitter();
  @Output() quoteUpdate: EventEmitter<Quote> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output() refreshQuote: EventEmitter<null> = new EventEmitter();

  state: QuoteState = 'DISPLAY';
  badgeEntries = computed<BadgeListEntry<QuoteConnection>[]>(() =>
    this.parseConnection(this.quote()?.connections ?? []),
  );
  campaignName = computed(() => this.character().campaign_details?.name);
  isLoadingQuote = signal(false);
  quoteOverviewUrl = computed(() =>
    this.routingService.getRoutePath('quote-overview', {
      name: this.character.name,
      campaign: this.campaignName,
    }),
  );

  private _quoteControlls = computed<QuoteControl[]>(() => [
    {
      isVisible: !!this.quote(),
      title: 'Load new quote',
      type: 'INFO',
      icon: 'refresh',
      onClick: () => this.getNextRandomQuote(),
    },
    {
      isVisible: !!this.quote() && this.canUpdate(),
      title: 'Edit Quote',
      type: 'SECONDARY',
      icon: 'pencil',
      onClick: () => this.quoteUpdate.emit(this.quote()),
    },
    {
      isVisible: this.canCreate(),
      title: 'Create Quote',
      label: this.quote() ? undefined : 'Create Quote',
      type: 'PRIMARY',
      icon: 'plus',
      onClick: () => this.quoteCreate.emit(),
    },
    {
      isVisible: !!this.quote() && this.canDelete(),
      title: 'Delete Quote',
      type: 'DANGER',
      icon: 'trash',
      onClick: () => this.quoteDelete.emit(this.quote()),
    },
    {
      isVisible: !!this.quote(),
      title: 'Copy Quote to Clipboard',
      type: 'DARK',
      icon: 'copy',
      onClick: () => this.copyQuoteToClipboard(),
    },
    {
      isVisible: !!this.quote(),
      title: 'See all quotes',
      type: 'SECONDARY',
      icon: 'th-list',
      onClick: () =>
        this.routingService.routeToPath('quote-overview', {
          name: this.character().name,
          campaign: this.campaignName(),
        }),
    },
  ]);
  quoteControlls = computed(() =>
    this._quoteControlls().filter((ctrl) => ctrl.isVisible),
  );

  constructor(private routingService: RoutingService) {}

  ngOnChanges(): void {
    this.isLoadingQuote.set(false);
  }

  onConnectionDelete(connection: QuoteConnection) {
    if (!this.canDelete()) {
      return;
    }

    this.connectionDelete.emit(connection);
  }

  onConnectionCreate(character: OverviewItem) {
    if (!this.canCreate() || !this.quote()) {
      return;
    }

    const newConnection: QuoteConnection = {
      quote: this.quote()?.pk as number,
      character: character.pk as number,
    };
    this.connectionCreate.emit(newConnection);
  }

  getNextRandomQuote() {
    this.isLoadingQuote.set(true);
    this.refreshQuote.emit();
  }

  private parseConnection(
    connections: QuoteConnection[],
  ): BadgeListEntry<QuoteConnection>[] {
    return connections.map((con) => {
      const characterName = con.character_details?.name as string;
      const link = this.routingService.getRoutePath('character', {
        name: characterName,
        campaign: this.campaignName(),
      });

      return {
        text: characterName,
        badgeValue: con,
        link,
      };
    });
  }

  copyQuoteToClipboard() {
    const quote = this.quote();
    if (!quote) {
      return;
    }
    const quoteLines = quote.quote.split('<br />');
    const modifiedQuoteLines = quoteLines.map(
      (line: string) => `\>${line.trim().trimStart()}`,
    );
    const modifiedQuote = modifiedQuoteLines.join('<br />');

    const descriptionSuffix = `- ${quote.description} `;
    const text = `${modifiedQuote}\n>${descriptionSuffix}`;
    copyToClipboard(text);
  }
}
