import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binder Demo';
  binderConfig: Array<any> = [];
  result: object;
  constructor() {
    this.binderConfig = [
      [
        {
          questionClass: 'DropdownQuestion',
          key: 'binder_opinion',
          label: 'What do you think of binders?',
          options: [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          order: 1
        },
        {
          questionClass: 'TextboxQuestion',
          key: 'favorite_binder',
          label: 'What was the name of your favorite binder?',
          value: '',
          required: true,
          order: 2
        }
      ],
      [
        {
          questionClass: 'DropdownQuestion',
          key: 'cat_opinion',
          label: 'What do you think of cats?',
          options: [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          order: 1
        },
        {
          questionClass: 'TextboxQuestion',
          key: 'favorite_cat',
          label: 'What was the name of your favorite cat?',
          value: '',
          required: true,
          order: 2
        }
      ]
    ];

  }

  onBinderDone(data) {
    this.result = data;
    console.log(data);
  }
}
