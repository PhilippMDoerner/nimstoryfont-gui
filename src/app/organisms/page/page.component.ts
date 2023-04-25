import { Component, Input } from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';
import { UserData } from 'src/app/_models/token';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() user!: UserData;
  @Input() campaign!: Campaign;
  @Input() serverUrl!: string;
}
