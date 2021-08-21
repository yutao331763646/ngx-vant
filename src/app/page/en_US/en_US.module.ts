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
import { FieldComponent } from './field/field.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { LayoutComponent } from './layout/layout.component';
import { LoadingComponent } from './loading/loading.component';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
    imports: [
        CommonModule, EnRoutingModule,
        DocSharedModule
    ],
    declarations: [
        QuickstartComponent, ButtonComponent, HomeComponent,
        ThemeComponent, LocaleComponent,
        CellComponent, FieldComponent, IconComponent,
        ImageComponent,
        LayoutComponent,
        LoadingComponent, NotifyComponent
    ]
})
export class En_USModule { }
