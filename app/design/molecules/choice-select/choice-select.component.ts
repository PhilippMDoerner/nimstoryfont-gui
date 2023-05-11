import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choice-select',
  templateUrl: './choice-select.component.html',
  styleUrls: ['./choice-select.component.scss']
})
export class ChoiceSelectComponent {
  @Input() choices!: any[];
  @Input() labelProp!: string;
  @Input() selectedLabelValue?: string;
  
  @Output() choiceSelect: EventEmitter<any> = new EventEmitter();
  
  onChange(event: any){
    const selectedChoiceIndex: number = parseInt(event.target?.value);
    this.choiceSelect.emit(this.choices[selectedChoiceIndex]);
  }
}
