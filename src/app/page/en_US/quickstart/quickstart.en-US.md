# Quickstart

## Install

### npm or yarn
 
```js
npm i ngx-vant -S
```


## Usage




###  Manually import


```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonModule } from 'ngx-vant/button';
import { Vant18nModule, VANT_I18N } from 'ngx-vant/i18n';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule
    ],
    providers: [{ provide: VANT_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent]
})
export class AppModule { }
```



