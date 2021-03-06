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
@NgModule({
    imports: [
        RouterModule, CommonModule, NgxVantModule
    ],

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