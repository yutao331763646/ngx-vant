import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { NavComponent } from './components/nav/nav.component'
import { DemoComponent } from './components/demo/demo.component'
import { IconComponent } from './icon/icon.component'
import { MobileComponent } from './mobile.component'
import { LoadingComponent } from "./loading/loading.component";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ImageComponent } from "./image/image.component";
import { LayoutComponent } from "./layout/layout.component";
import { ToastComponent } from "./toast/toast.component";
import { ProgressComponent } from "./progress/progress.component";
import { CellComponent } from "./cell/cell.component";
import { FieldComponent } from "./field/field.component";
import { OverlayComponent } from "./overlay/overlay.component";
import { PopupComponent } from "./popup/popup.component";
import { VanDocDemoCardComponent } from "./components/van-doc-demo-card/van-doc-demo-card.component";
import { TabsComponent } from "./tabs/tabs.component";
import { NotifyComponent } from "./notify/notify.component";
import { TagComponent } from "./tag/tag.component";
import { StickyComponent } from "./sticky/sticky.component";
import { PickerComponent } from "./picker/picker.component";


import { CellModule } from 'ngx-vant/cell';
import { TabsModule } from 'ngx-vant/tabs';
import { IconModule } from "ngx-vant/icon";
import { ButtonModule } from "ngx-vant/button";
import { RowModule } from "ngx-vant/row";
import { LoadingModule } from "ngx-vant/loading";
import { ToastModule } from "ngx-vant/toast";
import { NavBarModule } from "ngx-vant/nav-bar";
import { ColModule } from "ngx-vant/col";
import { ProgressModule } from "ngx-vant/progress";
import { ImageModule } from "ngx-vant/image";
import { OverlayModule } from "ngx-vant/overlay";
import { FieldModule } from "ngx-vant/field";
import { PopupModule } from "ngx-vant/popup";
import { NotifyModule } from "ngx-vant/notify";
import { TagModule } from "ngx-vant/tag";
import { StickyModule } from "ngx-vant/sticky";
import { PickerModule } from "ngx-vant/picker";
import { TabModule } from "ngx-vant/tab";
import { CellGroupModule } from "ngx-vant/cell-group";
import { zh_CN, VANT_I18N, Vant18nModule } from 'ngx-vant/i18n';

const NGX_VANT=[
    IconModule,ButtonModule,LoadingModule,
    NavBarModule,ImageModule,RowModule,ColModule,
    ToastModule,ProgressModule,CellModule,CellGroupModule,FieldModule,
    OverlayModule,PopupModule,TabsModule,TabModule,NotifyModule,
    TagModule,StickyModule,PickerModule,Vant18nModule
]

@NgModule({
    imports: [
        RouterModule, CommonModule,
        ...NGX_VANT
    ],
    providers: [{ provide: VANT_I18N, useValue: zh_CN }],

    declarations: [
        ButtonComponent, NavComponent, DemoComponent,
        IconComponent, MobileComponent, LoadingComponent, HomeComponent,
        NavBarComponent, ImageComponent, LayoutComponent, ToastComponent,
        ProgressComponent, CellComponent, FieldComponent, OverlayComponent,
        PopupComponent, VanDocDemoCardComponent, TabsComponent,NotifyComponent,
        TagComponent,StickyComponent,
        PickerComponent
    ]
})
export class MobileModule { }