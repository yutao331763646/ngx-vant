import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { NavComponent } from './components/nav/nav.component'
import { DemoComponent } from './components/demo/demo.component'
import { IconComponent } from './icon/icon.component'
import { MobileComponent } from './mobile.component'
import { LoadingComponent } from "./loading/loading.component";
import { NgxVantModule } from "projects/ngx-vant/ngx-vant.module";
@NgModule({
    imports: [
        RouterModule, CommonModule,NgxVantModule
    ],

    declarations: [
        ButtonComponent, NavComponent, DemoComponent,
        IconComponent, MobileComponent, LoadingComponent
    ]
})
export class MobileModule { }