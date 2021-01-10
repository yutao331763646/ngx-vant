import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BasicRoutingModule } from "./basic.routing";
import { DomeComponent } from '../../components/dome/dome.component'
import { ButtonComponent } from './button/button.component'
import { IconComponent } from './icon/icon.component'
import { HighlightPipe } from '../../common/pipe/highlight.pipe'
import { LoadingComponent } from "./loading/loading.component";
@NgModule({
    imports: [
        RouterModule, CommonModule,
        BasicRoutingModule
    ],
    declarations: [
        DomeComponent, ButtonComponent, HighlightPipe,
        IconComponent,LoadingComponent
    ]
})
export class BasicModule { }
