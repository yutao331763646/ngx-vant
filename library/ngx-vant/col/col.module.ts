import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColComponent } from './col.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ColComponent],
  declarations: [ColComponent]
})
export class ColModule { }
