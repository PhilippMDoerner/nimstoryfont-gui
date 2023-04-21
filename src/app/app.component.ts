import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nimstoryfont-gui';
  form = new FormGroup({});
  model = {};
  options = {};
  fields = [
    {
      key: 'text',
      type: 'text-editor',
    },
  ];
  
  constructor(){console.log(this)};
}
