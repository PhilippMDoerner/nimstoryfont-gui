import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-html-text',
  templateUrl: './html-text.component.html',
  styleUrls: ['./html-text.component.scss']
})
export class HtmlTextComponent {
  @Input() text!: string;
}
