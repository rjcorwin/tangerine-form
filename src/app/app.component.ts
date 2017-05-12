import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tangerine Form Demo';
  binderConfig: object;
  result: object;
  constructor() {
    this.binderConfig = {
      _id: "43a883f3-9277-42ec-b93b-f037b8a3da4a",
      _rev: "1-045b5094-e6c8-4603-8c12-f909eae744de",
      title: "Binder for School Observations Spreadsheet v3",
      collection: "Binder",
      status: "published",
      spreadsheetId: "ced3aca4-3101-11e7-93ae-92361f002671",
      spreadsheetRevision: "ced3aca4-3101-11e7-93ae-92361f002671",
      spreadsheetSchemaId: "dd74f132-3101-11e7-93ae-92361f002671",
      children: [
        {
          _id: "a",
          collection: "section",
          title: "Section 1",
          stopwatch: true,
          time_limit: "5 minutes",
          code: "function(event, variables, scope, callback) { ... }",
          declarations: [ ],
          imports: [ ],
          repeatable: true,
          sheetName: 'Student Observations for English P2',
          columnName: 'Student Observations for English P2',
          repeatN: 3,
          forkable: true,
          children: [
            {
              _id: "1",
              title: "Page 1",
              collection: "Page",
              columnNames: [ "Column Name 1", "Column Name 2" ],
              config: [
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
              ]
            },
            {
              _id: "2",
              title: "Page 2",
              collection: "Page",
              columnNames: [ "Column Name 1", "Column Name 2" ],
              config: [
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
            }
          ]
        },
        {
          _id: "b",
          collection: "section",
          title: "Section 2",
          stopwatch: true,
          time_limit: "5 minutes",
          code: "function(event, variables, scope, callback) { ... }",
          declarations: [ ],
          imports: [ ],
          repeatable: true,
          sheetName: 'Student Observations for English P3',
          columnName: 'Student Observations for English P3',
          repeatN: 3,
          forkable: true,
          children: [
            {
              _id: "3",
              title: "Page 1",
              collection: "Page",
              columnNames: [ "Column Name 1", "Column Name 2" ],
              config: [
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
              ]
            },
            {
              _id: "4",
              title: "Page 2",
              collection: "Page",
              columnNames: [ "Column Name 1", "Column Name 2" ],
              config: [
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
            }
          ]
        }
      ]
    };
  }


  onBinderDone(data) {
    this.result = data;
    console.log(data);
  }
}
