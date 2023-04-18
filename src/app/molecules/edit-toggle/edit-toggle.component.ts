import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss']
})
export class EditToggleComponent {
  @Input() canUpdate: boolean = false;
}
