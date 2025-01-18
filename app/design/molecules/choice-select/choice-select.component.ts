import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';

@Component({
    selector: 'app-choice-select',
    templateUrl: './choice-select.component.html',
    styleUrls: ['./choice-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})
export class ChoiceSelectComponent {
  choices = input.required<any[]>();
  labelProp = input.required<string>();
  selectedLabelValue = input.required<string | undefined>();

  @Output() choiceSelect: EventEmitter<any> = new EventEmitter();

  onChange(event: any) {
    const selectedChoiceIndex: number = parseInt(event.target?.value);
    this.choiceSelect.emit(this.choices()[selectedChoiceIndex]);
  }
}
