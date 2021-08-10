import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ngx-vant/icon';
import { LoadingModule } from 'ngx-vant/loading'
import { ButtonComponent } from './button.component';
import { Vant18nModule } from 'ngx-vant/i18n';
@NgModule({
    imports: [
        CommonModule,
        LoadingModule, IconModule,
        Vant18nModule
    ],

    exports: [ButtonComponent],
    declarations: [ButtonComponent]
})
export class ButtonModule { }
