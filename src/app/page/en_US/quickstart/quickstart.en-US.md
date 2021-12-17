# Quickstart

## Install

### npm or yarn

```js
npm i ngx-vant -S
```

## Usage

### Manually import

```js
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ButtonModule } from "ngx-vant/button";
import { Vant18nModule, VANT_I18N, zh_CN } from "ngx-vant/i18n";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, Vant18nModule],
  providers: [{ provide: VANT_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Import Styles

Import the less stylesheet in style.less

```js
/* You can add global styles to this file, and also import other style files */
@import "../node_modules/ngx-vant/ngx-vant.less";
```
