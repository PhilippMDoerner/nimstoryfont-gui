import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { copyToClipboard } from 'src/app/core/_functions/clipboard';
import { BadgeListEntry } from 'src/design/molecules';
import { Character } from '../../../app/_models/character';
import { Quote, QuoteConnection } from '../../../app/_models/quote';

type QuoteState =
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE'
  | 'DISPLAY'
  | 'UPDATE_OUTDATED';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit, OnChanges {
  @Input() quote?: Quote;
  @Input() character!: Character;
  @Input() campaignCharacters!: OverviewItem[];
  @Input() canCreate: boolean = false;
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;

  @Output() quoteDelete: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteCreate: EventEmitter<null> = new EventEmitter();
  @Output() quoteUpdate: EventEmitter<Quote> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output() refreshQuote: EventEmitter<null> = new EventEmitter();

  state: QuoteState = 'DISPLAY';
  badgeEntries: BadgeListEntry[] = [];
  campaignName!: string;
  isLoadingQuote: boolean = false;
  quoteOverviewUrl!: string;

  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.badgeEntries = this.parseConnection(this.quote?.connections ?? []);
    this.campaignName = this.character.campaign_details?.name as string;
    this.quoteOverviewUrl = this.routingService.getRoutePath('quote-overview', {
      name: this.character.name,
      campaign: this.campaignName,
    });
  }

  ngOnChanges(): void {
    this.isLoadingQuote = false;
  }

  onConnectionDelete(connection: QuoteConnection) {
    if (!this.canDelete) {
      return;
    }

    this.connectionDelete.emit(connection);
  }

  onConnectionCreate(character: OverviewItem) {
    if (!this.canCreate || !this.quote) {
      return;
    }

    const newConnection: QuoteConnection = {
      quote: this.quote.pk as number,
      character: character.pk as number,
    };
    this.connectionCreate.emit(newConnection);
  }

  getNextRandomQuote() {
    this.isLoadingQuote = true;
    this.refreshQuote.emit();
  }

  private parseConnection(connections: QuoteConnection[]): BadgeListEntry[] {
    return connections.map((con) => {
      const characterName = con.character_details?.name as string;
      const link = this.routingService.getRoutePath('character', {
        name: characterName,
        campaign: this.campaignName,
      });

      return {
        text: characterName,
        badgeValue: con,
        link,
      };
    });
  }

  copyQuoteToClipboard() {
    if (!this.quote) {
      return;
    }
    const quoteLines = this.quote.quote.split('<br />');
    const modifiedQuoteLines = quoteLines.map(
      (line: string) => `\>${line.trim().trimStart()}`,
    );
    const modifiedQuote = modifiedQuoteLines.join('<br />');

    const descriptionSuffix = `- ${this.quote.description} `;
    const text = `${modifiedQuote}\n>${descriptionSuffix}`;
    copyToClipboard(text);
  }
}
