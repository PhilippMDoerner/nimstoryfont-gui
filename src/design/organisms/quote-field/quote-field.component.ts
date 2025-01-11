import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';

import { take } from 'rxjs';
import { ArticleService } from 'src/app/_services/article/article.service';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { CardComponent } from 'src/design/atoms/card/card.component';
import { HtmlTextComponent } from 'src/design/atoms/html-text/html-text.component';
import {
  BadgeListEntry,
  CompareFormComponent,
  FormComponent,
} from 'src/design/molecules';
import { CharacterDetails } from '../../../app/_models/character';
import { Quote, QuoteConnection, QuoteRaw } from '../../../app/_models/quote';
import { QuoteComponent, QuoteControlKind } from '../quote/quote.component';

type QuoteState =
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE'
  | 'DISPLAY'
  | 'UPDATE_OUTDATED';

@Component({
    selector: 'app-quote-field',
    templateUrl: './quote-field.component.html',
    styleUrls: ['./quote-field.component.scss'],
    imports: [
        NgTemplateOutlet,
        QuoteComponent,
        CardComponent,
        FormComponent,
        CompareFormComponent,
        HtmlTextComponent,
        ButtonComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteFieldComponent {
  quote = input.required<Quote | undefined>();
  character = input.required<CharacterDetails>();
  campaignCharacters = input.required<OverviewItem[]>();
  serverModel = input.required<Quote | undefined>();
  canCreate = input(false);
  canUpdate = input(false);
  canDelete = input(false);
  encounters = input.required<OverviewItem[]>();
  sessions = input.required<OverviewItem[]>();
  quoteControlsBlacklist = input<QuoteControlKind[]>([]);

  @Output() quoteDelete: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteCreate: EventEmitter<QuoteRaw> = new EventEmitter();
  @Output() quoteUpdate: EventEmitter<Quote> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output() refreshQuote: EventEmitter<null> = new EventEmitter();

  sessions$ = toObservable(this.sessions).pipe(take(1));
  encounters$ = toObservable(this.encounters).pipe(take(1));
  state = signal<QuoteState>('DISPLAY');
  badgeEntries = computed<BadgeListEntry<QuoteConnection>[]>(() =>
    this.parseConnection(this.quote()?.connections ?? []),
  );
  campaignName = computed(
    () => this.character().campaign_details?.name as string,
  );

  isLoadingQuote = signal(false);
  quoteOverviewUrl = computed(() =>
    this.routingService.getRoutePath('quote-overview', {
      name: this.character().name,
      campaign: this.campaignName,
    }),
  );
  userModel = signal<Partial<QuoteRaw> | Quote>({});
  formlyFields = computed<FormlyFieldConfig[]>(() => {
    return [
      this.formlyService.buildInputConfig({
        key: 'description',
        required: true,
        inputKind: 'STRING',
      }),
      this.formlyService.buildOverviewSelectConfig({
        key: 'session',
        required: true,
        campaign: this.campaignName(),
        options$: this.sessions$,
        labelProp: 'name_full',
        valueProp: 'pk',
      }),
      this.formlyService.buildAutocompleteConfig<
        Quote | QuoteRaw,
        OverviewItem
      >({
        key: 'encounter',
        required: false,
        loadOptions: (searchTerm) =>
          this.articleService.searchArticlesKind(
            this.campaignName(),
            searchTerm,
            'encounter',
          ),
        optionKeyProp: 'pk',
        optionLabelProp: 'name',
        optionValueProp: 'pk',
        initialValue$: this.quote()?.encounter
          ? this.articleService.readArticle(
              this.quote()?.encounter as number,
              'encounter',
            )
          : undefined,
      }),
      this.formlyService.buildEditorConfig({ key: 'quote', required: true }),
    ];
  });

  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
    private articleService: ArticleService,
  ) {
    toObservable(this.quote)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.isLoadingQuote.set(false));
  }

  onSubmit(event: Partial<QuoteRaw> | Quote): void {
    switch (this.state()) {
      case 'UPDATE':
      case 'UPDATE_OUTDATED':
        this.quoteUpdate.emit(event as Quote);
        break;
      case 'CREATE':
        this.quoteCreate.emit(event as QuoteRaw);
        break;
      default:
        throw new Error(
          `QuoteField - Submitted form while in state '${this.state()}', which is not possible.`,
        );
    }

    this.changeState('DISPLAY', {} as QuoteRaw);
  }

  onDelete() {
    this.quoteDelete.emit(this.quote());
    this.changeState('DISPLAY', {} as QuoteRaw);
  }

  onCancel() {
    this.changeState('DISPLAY', {});
  }

  onConnectionDelete(connection: QuoteConnection) {
    if (!this.canDelete()) {
      return;
    }

    this.connectionDelete.emit(connection);
  }

  onConnectionCreate(character: OverviewItem) {
    if (!this.canCreate() || !this.quote) {
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

  changeState(
    newState: QuoteState,
    newModel: Partial<QuoteRaw> | Quote | undefined,
  ) {
    this.state.set(newState);
    this.userModel.set({ ...newModel });
  }

  private parseConnection(
    connections: QuoteConnection[],
  ): BadgeListEntry<QuoteConnection>[] {
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
}
