import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileModule } from './page/mobile/mobile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { VANT_I18N, zh_CN } from 'ngx-vant/i18n';



@NgModule({
    declarations: [
        AppComponent,
     
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MobileModule,
        BrowserAnimationsModule,
    ],
    providers: [{ provide: VANT_I18N, useValue: zh_CN }],

    bootstrap: [AppComponent]
})
export class AppModule { }
