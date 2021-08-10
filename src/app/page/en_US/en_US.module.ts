import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnRoutingModule } from './en_US.routing';
import { QuickstartComponent } from './quickstart/quickstart.component';

@NgModule({
    imports: [
        CommonModule, EnRoutingModule
    ],
    declarations: [
        QuickstartComponent
    ]
})
export class En_USModule { }
