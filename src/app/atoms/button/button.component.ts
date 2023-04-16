import { Component, Input } from '@angular/core';

type ButtonType = "PRIMARY" | "SECONDARY" | "TERTIARY";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType = "PRIMARY";
}
