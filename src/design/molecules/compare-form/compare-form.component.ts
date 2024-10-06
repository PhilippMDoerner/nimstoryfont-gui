import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-compare-form',
  templateUrl: './compare-form.component.html',
  styleUrls: ['./compare-form.component.scss'],
})
export class CompareFormComponent<T> implements OnInit {
  @Input() fields!: FormlyFieldConfig[];
  @Input() modelFromUser!: T;
  @Input() modelFromServer!: T;
  @Input() displayVertically: boolean = false;
  @Input() enctype: string = 'application/x-www-form-urlencoded'; //Default form enctype in HTML5

  @Output() formlySubmit: EventEmitter<NonNullable<T>> = new EventEmitter();
  @Output() formlyCancel: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    this.markFieldDifferences();
  }

  /**
   * Purpose is to have the user-assigned fields that don't match
   * the server side marked so they can see differences.
   */
  markFieldDifferences() {
    for (let field of this.fields) {
      const fieldName: string | undefined = field.key?.toString();

      const hasFieldName = fieldName != null;
      if (!hasFieldName) {
        throw "CompareFormContainer - Trying to have form with fields that don't have keys";
      }

      const userModelValue = (this.modelFromUser as Record<string, unknown>)[
        fieldName
      ];
      const serverModelValue = (
        this.modelFromServer as Record<string, unknown>
      )[fieldName];

      const hasDifference = userModelValue != serverModelValue;
      if (!hasDifference) {
        continue;
      }

      field.className = 'updated';
    }
  }

  onCancel() {
    this.formlyCancel.emit();
  }

  onSubmit() {
    //Update the "update_datetime" field of the user-model
    (this.modelFromUser as any).update_datetime = (
      this.modelFromServer as any
    ).update_datetime;
    this.formlySubmit.emit(this.modelFromUser as NonNullable<T>);
  }
}
