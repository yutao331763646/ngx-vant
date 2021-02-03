import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [TabsComponent],
    declarations: [TabsComponent]
})
export class VantTabsModule { }
