import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent, ToolBarComponent } from './picker.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [PickerComponent, ToolBarComponent],
    declarations: [PickerComponent, ToolBarComponent]
})
export class PickerModule { }
