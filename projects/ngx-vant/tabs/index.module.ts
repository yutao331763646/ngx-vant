import { NgModule } from '@angular/core';
import { TabModule } from '../tab/tab.module';
import { VantTabsModule } from './tabs.module';

@NgModule({
    imports: [VantTabsModule, TabModule
    ],
    exports: [VantTabsModule, TabModule],
})
export class TabsModule { }
