import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TangerineFormComponent } from './tangerine-form/tangerine-form.component';
import { NgJsonFormModule } from '../ng-json-form/ng-json-form.module';

@NgModule({
  imports: [
    CommonModule,
    NgJsonFormModule
  ],
  exports: [TangerineFormComponent],
  declarations: [TangerineFormComponent]
})
export class TangerineFormModule { }
