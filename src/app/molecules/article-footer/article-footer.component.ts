import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss']
})
export class ArticleFooterComponent {
  @Input() buttonLabel!: string;
  @Input() buttonLink?: string;
  @Input() deleteMessage: string = 'Delete this entry?';
  @Input() showDelete: boolean = true;
  
  @Output() buttonClick: EventEmitter<null> = new EventEmitter();
  @Output() delete: EventEmitter<null> = new EventEmitter();
}
