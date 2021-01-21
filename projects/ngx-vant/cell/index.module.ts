import { NgModule } from '@angular/core';
import { CellGroupModule } from '../cell-group/cell-group.module';
import { CelModule } from './cell.module';

@NgModule({
  imports: [CelModule,CellGroupModule
  ],
  exports:[CelModule,CellGroupModule],
})
export class CellModule { }
