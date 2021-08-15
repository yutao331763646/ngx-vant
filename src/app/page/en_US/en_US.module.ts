import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnRoutingModule } from './en_US.routing';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { DocSharedModule } from '../shared/doc-shared';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { ThemeComponent } from './theme/theme.component';
import { LocaleComponent } from './locale/locale.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
    imports: [
        CommonModule, EnRoutingModule,
        DocSharedModule
    ],
    declarations: [
        QuickstartComponent,ButtonComponent,HomeComponent,
        ThemeComponent,LocaleComponent,
        CellComponent
    ]
})
export class En_USModule { }
