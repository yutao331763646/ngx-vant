import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BasicRoutingModule } from "./basic.routing";
import { DomeComponent } from '../../components/dome/dome.component'
import { ButtonComponent } from './button/button.component'
import { IconComponent } from './icon/icon.component'
import { HighlightPipe } from '../../common/pipe/highlight.pipe'
import { LoadingComponent } from "./loading/loading.component";
import { HomeComponent } from "./home/home.component";
import { QuickstartComponent } from "./quickstart/quickstart.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ImageComponent } from "./image/image.component";
import { LayoutComponent } from "./layout/layout.component";
import { ProgressComponent } from "./progress/progress.component";
import { CellComponent } from "./cell/cell.component";
import { FieldComponent } from "./field/field.component";
import { OverlayComponent } from "./overlay/overlay.component";
import { PopupComponent } from "./popup/popup.component";
import { TabsComponent } from "./tabs/tabs.component";
import { NotifyComponent } from "./notify/notify.component";
import { TagComponent } from "./tag/tag.component";
import { StickyComponent } from "./sticky/sticky.component";
import { PickerComponent } from "./picker/picker.component";
import { SafePipe } from "src/app/common/pipe/sage.pipe";
import { DocComponent } from "src/app/components/doc/doc.component";
@NgModule({
    imports: [
        RouterModule, CommonModule,
        BasicRoutingModule
    ],
    declarations: [
        DomeComponent, ButtonComponent, HighlightPipe,
        IconComponent, LoadingComponent, HomeComponent,
        QuickstartComponent,ImageComponent,
        NavBarComponent,LayoutComponent,ProgressComponent,
        CellComponent,FieldComponent,OverlayComponent,PopupComponent,
        TabsComponent,NotifyComponent,TagComponent,StickyComponent,
        PickerComponent,SafePipe,DocComponent
    ]
})
export class BasicModule { }
