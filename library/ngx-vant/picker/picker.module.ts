import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerColumnComponent, PickerComponent, ToolBarComponent } from './picker.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [PickerComponent, ToolBarComponent,PickerColumnComponent],
    declarations: [PickerComponent, ToolBarComponent,PickerColumnComponent]
})
export class PickerModule { }
