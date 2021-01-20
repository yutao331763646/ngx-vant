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
@NgModule({
    imports: [
        RouterModule, CommonModule,
        BasicRoutingModule
    ],
    declarations: [
        DomeComponent, ButtonComponent, HighlightPipe,
        IconComponent, LoadingComponent, HomeComponent,
        QuickstartComponent,ImageComponent,
        NavBarComponent,LayoutComponent,ProgressComponent
    ]
})
export class BasicModule { }
