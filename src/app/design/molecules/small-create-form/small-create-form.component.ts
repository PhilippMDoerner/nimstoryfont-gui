import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Output,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import { ElementKind } from 'src/app/design/atoms/_models/button';
import { BadgeComponent } from 'src/app/design/atoms/badge/badge.component';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { filterNil } from 'src/utils/rxjs-operators';

type State = 'DISPLAY' | 'CREATE';
export type DisableableOption<T> = { value: T; disabled: boolean };
@Component({
  selector: 'app-small-create-form',
  templateUrl: './small-create-form.component.html',
  styleUrls: ['./small-create-form.component.scss'],
  imports: [BadgeComponent, NgTemplateOutlet, ButtonComponent, HotkeyDirective],
})
export class SmallCreateFormComponent<T> {
  options = input.required<T[]>();
  labelProp = input.required<keyof T>();
  badgeText = input<string>('Add Entry');
  valueProp = input.required<keyof T>();
  submitButtonType = input<ElementKind>('PRIMARY');
  cancelButtonType = input<ElementKind>('SECONDARY');
  createHotkey = input<string | undefined>();
  disableHotkeys = input<boolean>(false);

  @Output() create: EventEmitter<T> = new EventEmitter();

  destroyRef = inject(DestroyRef);
  selectFieldName = computed(() => `select-' + ${String(this.labelProp())}`);
  selectElement = viewChild<ElementRef<HTMLElement>>('select');
  selectElement$ = toObservable(this.selectElement);
  form = new FormGroup({});
  userModel: Partial<T> = {};
  state = signal<State>('DISPLAY');

  changeState(newState: State) {
    this.state.set(newState);
    if (newState === 'CREATE') {
      this.selectElement$
        .pipe(filterNil(), takeUntilDestroyed(this.destroyRef), take(1))
        .subscribe((element) => element.nativeElement.focus());
    }
  }

  onChange(event: any) {
    const selectedIndex = event.srcElement.value;
    this.userModel = this.options()[selectedIndex];
  }

  onCancel() {
    this.changeState('DISPLAY');
    this.userModel = {};
  }

  onSubmit() {
    this.changeState('DISPLAY');

    const hasValue = this.userModel[this.valueProp()] != null;
    if (hasValue) {
      this.create.emit(this.userModel as T);
    }
    this.userModel = {};
  }

  toggleForm() {
    switch (this.state()) {
      case 'DISPLAY':
        return this.changeState('CREATE');
      case 'CREATE':
        return this.onCancel();
    }
  }
}
