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
  imports: [],
})
export class ChoiceSelectComponent<T> {
  choices = input.required<T[]>();
  labelProp = input.required<keyof T>();
  selectedLabelValue = input.required<string | undefined>();
  id = input.required<string>();

  @Output() choiceSelect: EventEmitter<T> = new EventEmitter();

  onChange(event: Event) {
    const selectedChoiceIndex: number = parseInt(
      (event.target as HTMLInputElement)?.value,
    );
    this.choiceSelect.emit(this.choices()[selectedChoiceIndex]);
  }
}
