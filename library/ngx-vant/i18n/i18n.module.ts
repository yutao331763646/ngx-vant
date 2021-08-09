import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VantI18nPipe } from './i18n.pipe';
import { VantI18nDirective } from './i18n.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports:[
        VantI18nPipe,
        VantI18nDirective 
    ],
    declarations: [
        VantI18nPipe,
        VantI18nDirective
    ]
})
export class Vant18nModule { }
