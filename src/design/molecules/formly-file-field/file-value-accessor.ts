import { Directive, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // tslint:disable-next-line
  selector: 'input[type="file"]',
  host: {
    '(change)': 'onChange($event.target.files)',
    '(blur)': 'onTouched()',
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true },
  ],
})
// https://github.com/angular/angular/issues/7341
export class FileValueAccessor implements ControlValueAccessor, OnInit {
  ngOnInit(): void {
    console.log('DIRECTIVE APPLIED');
  }

  value: any;
  onChange = (_: any) => {
    console.log('Accessor on change');
  };
  onTouched = () => {
    console.log('Accessor on touch');
  };

  writeValue(value: any) {}
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
