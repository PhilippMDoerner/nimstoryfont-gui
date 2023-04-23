import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleState } from 'src/app/_models/toggle';
import { ElementType } from 'src/app/atoms/_models/button';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss']
})
export class EditToggleComponent {
  @Input() buttonType: ElementType = 'SECONDARY';
  @Output() toggle: EventEmitter<ToggleState> = new EventEmitter();
}
