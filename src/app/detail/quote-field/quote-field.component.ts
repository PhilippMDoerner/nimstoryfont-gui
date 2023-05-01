import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyServiceService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { BadgeListEntry } from 'src/app/molecules';
import { Character } from '../../_models/character';
import { Quote, QuoteConnection } from '../../_models/quote';
import { copyToClipboard } from '../_functions/clipboard';

type QuoteState = "CREATE" | "UPDATE" | "DELETE" | "DISPLAY" | "UPDATE_OUTDATED"

@Component({
  selector: 'app-quote-field',
  templateUrl: './quote-field.component.html',
  styleUrls: ['./quote-field.component.scss']
})
export class QuoteFieldComponent implements OnInit, OnChanges{
  @Input() quote!: Quote;
  @Input() character!: Character;
  @Input() campaignCharacters!: OverviewItem[];
  @Input() serverModel!: Quote;
  @Input() canCreate: boolean = false;
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() quoteDelete: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteCreate: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteUpdate: EventEmitter<Quote> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<QuoteConnection> = new EventEmitter();
  @Output() connectionCreate: EventEmitter<QuoteConnection> = new EventEmitter();
  @Output() refreshQuote: EventEmitter<null> = new EventEmitter();
  
  state: QuoteState = 'DISPLAY';
  badgeEntries: BadgeListEntry[] = [];
  campaignName!: string;
  isLoadingQuote: boolean = false;
  quoteOverviewUrl!: string;
  userModel!: Quote;
  formlyFields!: FormlyFieldConfig[];
  
  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyServiceService,
  ){}
  
  ngOnInit(): void {
    this.badgeEntries = this.parseConnection(this.quote.connections ?? []);
    this.campaignName = this.character.campaign_details?.name as string;
    this.quoteOverviewUrl = this.routingService.getRoutePath('quote-overview', {name: this.character.name, campaign: this.campaignName})
    this.setFormlyFields();
  }
  
  ngOnChanges(): void {
    this.isLoadingQuote = false;
    
  }
  
  setFormlyFields(){
    this.formlyFields = [
      this.formlyService.buildEditorConfig({key: "quote", required: true}),
      this.formlyService.buildInputConfig({key: "description", required: true, inputKind: 'STRING'}),
      this.formlyService.buildOverviewSelectConfig({
        key: "session", 
        overviewType: 'SESSION', 
        required: true, 
        campaign: this.campaignName,
        labelProp: 'name_full',
        valueProp: 'pk',
      }),
      this.formlyService.buildOverviewSelectConfig({
        key: "encounter", 
        overviewType: 'ENCOUNTER', 
        required: false, 
        campaign: this.campaignName,
        labelProp: 'name_full',
        valueProp: 'pk',
      }),
    ]
  }
  
  onSubmit(): void {
    switch(this.state) {
      case "DELETE":
        this.quoteDelete.emit(this.quote);
        break;
      case "UPDATE":
      case "UPDATE_OUTDATED":
        this.quoteUpdate.emit(this.userModel);
        break;
      case "CREATE":
        this.quoteCreate.emit(this.userModel);
        break;
      default:
        throw `ImageCarouselCard - Submitted form while in state '${this.state}', which is not possible.`;
    };
    
    this.userModel = {} as Quote;
    this.changeState('DISPLAY', undefined);
  }

  onCancel(){
    this.userModel = {} as Quote;
    this.changeState('DISPLAY', undefined);
  }
  
  onConnectionDelete(connection: QuoteConnection){
    if(!this.canDelete){
      return;
    }
  
    this.connectionDelete.emit(connection);
  }
  
  onConnectionCreate(character: OverviewItem){
    if(!this.canCreate){
      return;
    }
    
    const newConnection: QuoteConnection = {
      quote: this.quote.pk as number,
      character: character.pk as number,
    };
    this.connectionCreate.emit(newConnection);
  }

  getNextRandomQuote(){
    this.isLoadingQuote = true;
    this.refreshQuote.emit();
  }
  
  changeState(newState: QuoteState, newModel: Quote | undefined){
    this.state = newState;
    this.userModel = {...newModel} as Quote;
  }
  
  private parseConnection(connections: QuoteConnection[]): BadgeListEntry[]{
    return connections.map(con => {
      const characterName = con.character_details?.name as string;
      const link = this.routingService.getRoutePath(
        'character', 
        {
          name: characterName,
          campaign: this.campaignName,
        }
      );
      
      return { 
        text: characterName,
        badgeValue: con,
        link
      };
    });
  }
  
  copyQuoteToClipboard(){
    const quoteLines = this.quote.quote.split("<br />");
    const modifiedQuoteLines = quoteLines.map( (line: string) => `\>${line.trim().trimStart()}`);
    const modifiedQuote = modifiedQuoteLines.join("<br />");

    const descriptionSuffix = `- ${this.quote.description} `;
    const text = `${modifiedQuote}\n>${descriptionSuffix}`;
    copyToClipboard(text);
  }
}
