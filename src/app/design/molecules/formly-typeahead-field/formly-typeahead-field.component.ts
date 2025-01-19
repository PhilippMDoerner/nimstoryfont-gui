import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbTypeahead,
  NgbTypeaheadModule,
  NgbTypeaheadSelectItemEvent,
} from '@ng-bootstrap/ng-bootstrap';
import { FieldType } from '@ngx-formly/bootstrap/form-field';
import { FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import {
  combineLatest,
  fromEvent,
  map,
  merge,
  Observable,
  OperatorFunction,
  ReplaySubject,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { filterNil } from 'src/utils/rxjs-operators';
import { BadgeComponent } from '../../atoms/badge/badge.component';

export interface CustomTypeaheadProps<T> {
  getOptions: (searchTerm: string) => Observable<T[]>;
  optionLabelProp: keyof T;
  optionValueProp: keyof T;
}

@Component({
  selector: 'app-formly-typeahead-field',
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NgbTypeaheadModule,
    AsyncPipe,
    BadgeComponent,
  ],
  templateUrl: './formly-typeahead-field.component.html',
  styleUrl: './formly-typeahead-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyTypeaheadFieldComponent<T>
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  destroyRef = inject(DestroyRef);
  typeaheadElement = viewChild<NgbTypeahead>(`instance`, {
    debugName: 'instance',
  });

  inputElement = viewChild<ElementRef<HTMLInputElement>>(`inputElement`);
  inputElement$ = toObservable(this.inputElement).pipe(
    map((input) => input?.nativeElement),
    filterNil(),
  );
  focus$ = this.inputElement$.pipe(
    switchMap((input) => fromEvent<FocusEvent>(input, 'focus')),
    map((event) => (event.target as HTMLInputElement | null)?.value),
  );
  click$ = this.inputElement$.pipe(
    switchMap((input) => fromEvent(input, 'click')),
    map((event) => (event.target as HTMLInputElement | null)?.value),
  );

  selectedItem$ = new ReplaySubject<T | null>(1);
  selectedItemLabel$ = this.selectedItem$.pipe(
    map((item) =>
      item ? `${item?.[this.getCustomProps().optionLabelProp]}` : null,
    ),
  );

  ngOnInit(): void {
    this.selectedItem$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((item) => this.formControl.setValue(item));
  }

  search: OperatorFunction<string, readonly T[]> = (
    searchTrigger$: Observable<string>,
  ) => {
    const searchTerm$ = merge(searchTrigger$, this.focus$, this.click$).pipe(
      startWith(''),
      tap(() => console.log('searchTerm$')),
    );
    const customProps = this.getCustomProps();
    const options$ = searchTerm$.pipe(
      switchMap((term) => customProps.getOptions(term ?? '')),
    );

    return combineLatest({
      searchTerm: searchTerm$,
      options: options$,
    }).pipe(
      tap(() => console.log('init')),
      map(({ searchTerm, options }) => {
        if (!searchTerm) return options;
        return options.filter((opt) =>
          this.matchesSearchterm(searchTerm, opt[customProps.optionLabelProp]),
        );
      }),
      tap((resp) => console.log('resp', resp)),
    );
  };

  resetSelectedValue() {
    this.selectedItem$.next(null);
  }

  resetValueAndText() {
    this.resetSelectedValue();
    this.typeaheadElement()?.writeValue('');
  }

  onSelect(event: NgbTypeaheadSelectItemEvent): void {
    if (event.item) {
      this.selectedItem$.next(event.item);
    } else {
      event.preventDefault();
    }
  }

  clearOnEmptyInput(target: EventTarget | null): void {
    const inputText = (target as HTMLInputElement | null)?.value;
    if (!inputText) {
      this.resetSelectedValue();
    }
  }

  formatItem(item: T): string {
    return item[this.getCustomProps().optionLabelProp] as string;
  }

  private matchesSearchterm(searchTerm: string, optionLabel: T[keyof T]) {
    switch (typeof optionLabel) {
      case 'string':
      case 'number':
      case 'bigint':
      case 'boolean':
        return `${optionLabel}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      case 'symbol':
        return optionLabel.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
      case 'undefined':
      case 'object':
      case 'function':
      default:
        return false;
    }
  }

  private getCustomProps(): CustomTypeaheadProps<T> {
    return this.props['additionalProperties'];
  }
}