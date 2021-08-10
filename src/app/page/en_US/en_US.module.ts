import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnRoutingModule } from './en_US.routing';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { DocSharedModule } from '../shared/doc-shared';
import { ButtonComponent } from './button/button.component';

@NgModule({
    imports: [
        CommonModule, EnRoutingModule,
        DocSharedModule
    ],
    declarations: [
        QuickstartComponent,ButtonComponent
    ]
})
export class En_USModule { }
