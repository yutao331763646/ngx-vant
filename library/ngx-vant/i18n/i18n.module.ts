import { NgModule } from '@angular/core';
import { VantI18nPipe } from './i18n.pipe';
import { VantI18nDirective } from './i18n.directive';

@NgModule({
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
