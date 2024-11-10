import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { CharacterDetails } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { Quote, QuoteConnection, QuoteRaw } from 'src/app/_models/quote';
import { GroupByPipe } from 'src/design/atoms/_pipes/groupObjects';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { SpinnerComponent } from 'src/design/atoms/spinner/spinner.component';
import { CollapsiblePanelComponent } from 'src/design/molecules';
import { CardComponent } from '../../atoms/card/card.component';
import { QuoteFieldComponent } from '../quote-field/quote-field.component';
import { QuoteComponent, QuoteControlKind } from '../quote/quote.component';

interface QuoteCard {
  quote: Quote;
  isOpen: boolean;
}

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [
    ButtonComponent,
    QuoteComponent,
    CollapsiblePanelComponent,
    SpinnerComponent,
    CardComponent,
    GroupByPipe,
    QuoteFieldComponent,
  ],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesComponent {
  campaignId = input.required<number>();
  character = input.required<CharacterDetails>();
  quoteServerModel = input.required<Quote | undefined>();
  campaignCharacters = input.required<OverviewItem[]>();
  campaignSessions = input.required<OverviewItem[]>();
  campaignEncounters = input.required<OverviewItem[]>();
  quotes = input.required<Quote[]>();
  serverModel = input.required<Quote | undefined>();
  quoteControlsBlacklist = input<QuoteControlKind[]>([]);
  canUpdate = input<boolean>(false);
  canDelete = input<boolean>(false);
  canCreate = input<boolean>(false);

  quoteCreate = output<QuoteRaw>();
  quoteDelete = output<Quote>();
  quoteUpdate = output<Quote>();
  connectionCreate = output<QuoteConnection>();
  connectionDelete = output<QuoteConnection>();

  isCreatingQuote = signal(false);
  createQuoteData = computed(() => ({}) as Quote);
}
