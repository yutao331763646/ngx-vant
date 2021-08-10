import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { VANT_I18N, zh_CN ,en_US, Vant18nModule} from "ngx-vant/i18n";
@NgModule({
    imports: [
        RouterModule, CommonModule,Vant18nModule
    ],

    // providers: [{ provide: VANT_I18N, useValue: en_US }],

})
export class MobileModule { }