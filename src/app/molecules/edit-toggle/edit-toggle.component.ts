import { Component, EventEmitter, Output } from '@angular/core';
import { ToggleState } from 'src/app/_models/toggle';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss']
})
export class EditToggleComponent {
  @Output() toggle: EventEmitter<ToggleState> = new EventEmitter();
}
