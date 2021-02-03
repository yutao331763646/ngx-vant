import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [TabComponent],
    declarations: [TabComponent]
})
export class TabModule { }
