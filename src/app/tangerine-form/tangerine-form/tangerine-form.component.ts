import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tangerine-form',
  templateUrl: './tangerine-form.component.html',
  styleUrls: ['./tangerine-form.component.css']
})
export class TangerineFormComponent implements OnInit {

  @Input() config: Array<any> = [];
  @Output() formDone: EventEmitter<Object> = new EventEmitter();
  result: object;
  constructor() {  }

  onJsonFormSubmit(data) {
    this.result = data;
    this.formDone.emit(data);
  }

  ngOnInit() {
  }

}
