import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-binder',
  templateUrl: './binder.component.html',
  styleUrls: ['./binder.component.css']
})
export class BinderComponent implements OnInit {

  @Input() config: Array<any> = [];
  @Output() binderDone: EventEmitter<Object> = new EventEmitter();
  currentPage: object;
  pageNumber: number;
  result: Array<any> = [];

  constructor() {
    this.pageNumber = 0;
   }

   ngOnInit() {
    this.currentPage = this.config[this.pageNumber];
   }

  onJsonFormSubmit(data) {
    this.result.push(data);
    this.pageNumber++;
    if (this.config[this.pageNumber]) {
      this.currentPage = this.config[this.pageNumber];
    } else {
      this.binderDone.emit(this.result);
    }
  }

}
