import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [FieldComponent],
    declarations: [FieldComponent]
})
export class FieldModule { }
