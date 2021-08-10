import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnRoutingModule } from './en_US.routing';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { DocSharedModule } from '../shared/doc-shared';

@NgModule({
    imports: [
        CommonModule, EnRoutingModule,
        DocSharedModule
    ],
    declarations: [
        QuickstartComponent
    ]
})
export class En_USModule { }
