import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,IconModule
  ],
  exports:[CellComponent],
  declarations: [CellComponent]
})
export class CelModule { }
