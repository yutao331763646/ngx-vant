import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellGroupComponent } from './cell-group.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [CellGroupComponent],
    declarations: [CellGroupComponent]
})
export class CellGroupModule { }
