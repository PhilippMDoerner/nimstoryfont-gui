import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { CharacterDetails } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { Quote } from 'src/app/_models/quote';
import { GroupByPipe } from 'src/design/atoms/_pipes/groupObjects';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { SpinnerComponent } from 'src/design/atoms/spinner/spinner.component';
import { CollapsiblePanelComponent } from 'src/design/molecules';
import { CardComponent } from '../../atoms/card/card.component';
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
  ],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesComponent {
  campaignId = input.required<number>();
  character = input.required<CharacterDetails>();
  campaignCharacters = input.required<OverviewItem[]>();
  campaignSessions = input.required<OverviewItem[]>();
  quotes = input.required<Quote[]>();
  serverModel = input.required<Quote | undefined>();
  quoteControlsBlacklist = input<QuoteControlKind[]>([]);
  canUpdate = input<boolean>(false);
  canDelete = input<boolean>(false);
  canCreate = input<boolean>(false);

  isCreatingQuote = signal(false);
  createQuoteData = computed(() => ({}) as Quote);
}
