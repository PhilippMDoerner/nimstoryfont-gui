import { Component } from '@angular/core';
import { fadeIn } from 'src/design/animations/fadeIn';

@Component({
    selector: 'app-page-container',
    templateUrl: './page-container.component.html',
    styleUrls: ['./page-container.component.scss'],
    imports: [],
    animations: [fadeIn]
})
export class PageContainerComponent {}
