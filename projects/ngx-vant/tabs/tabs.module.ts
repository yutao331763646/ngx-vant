import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TitleComponent } from './title.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [TabsComponent,TitleComponent],
    declarations: [TabsComponent,TitleComponent]
})
export class VantTabsModule { }
