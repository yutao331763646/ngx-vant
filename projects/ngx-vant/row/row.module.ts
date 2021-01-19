import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[RowComponent],
  declarations: [RowComponent]
})
export class RowModule { }
