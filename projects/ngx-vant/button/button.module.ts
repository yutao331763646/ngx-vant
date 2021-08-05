import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ngx-vant/icon';
import { LoadingModule } from 'ngx-vant/loading'
import { ButtonComponent } from './button.component';
@NgModule({
    imports: [
        CommonModule, LoadingModule, IconModule
    ],
    exports: [ButtonComponent],
    declarations: [ButtonComponent]
})
export class ButtonModule { }
