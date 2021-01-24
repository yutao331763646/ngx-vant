import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';
import { FormsModule } from '@angular/forms';


import { CellModule } from '../cell/index.module'
@NgModule({
    imports: [
        CommonModule, CellModule,FormsModule
    ],
    exports: [FieldComponent],
    declarations: [FieldComponent]
})
export class FieldModule { }
