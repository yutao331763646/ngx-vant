import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileModule } from './page/mobile/mobile.module';
import { NgxVantModule } from 'projects/ngx-vant/ngx-vant.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    declarations: [
        AppComponent,
     
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MobileModule,NgxVantModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
