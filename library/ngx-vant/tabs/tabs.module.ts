import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBodyComponent, TabsComponent } from './tabs.component';
import { TitleComponent } from './title.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [TabsComponent,TitleComponent,TabBodyComponent],
    declarations: [TabsComponent,TitleComponent,TabBodyComponent]
})
export class TabsModule { }
