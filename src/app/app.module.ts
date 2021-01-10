import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileModule } from './page/mobile/mobile.module';
import { NgxVantModule } from 'projects/ngx-vant/ngx-vant.module';
@NgModule({
    declarations: [
        AppComponent,
     
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MobileModule,NgxVantModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
