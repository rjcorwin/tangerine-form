import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  config: Array<any> = [];
  result: object;
  constructor() {
    this.config = [
      {
          questionClass: 'DropdownQuestion',
          key: 'brave',
          label: 'Super Bravery Rating',
          options: [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          order: 3
        },
        {
          questionClass: 'TextboxQuestion',
          key: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          required: true,
          order: 1
        },
        {
          questionClass: 'TextboxQuestion',
          key: 'emailAddress',
          label: 'Email',
          type: 'email',
          order: 2
        }
    ];
  }

  onFormDone(data) {
    console.log(data);
    this.result = data;
  }
}
