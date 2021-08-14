# Internationalization

### Intro

Nnx-Vant uses Chinese as the default language. If you want to use other languages, please follow the instructions below.

## Usage



```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vant18nModule, VANT_I18N, zh_CN } from 'ngx-vant/i18n';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [{ provide: VANT_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent]
})
export class AppModule {}
```


```js
import { Component } from '@angular/core';
import { en_US, zh_CN } from 'ngx-vant/i18n';
import { VantI18nService } from 'ngx-vant/i18n';

@Component({
    selector: 'app',
    templateUrl: './demo.component.html'
})
export class AppComponent {
    constructor(
        private vantI18n: VantI18nService,
    ) { }
   
    onSwitchLang() {
        this.vantI18n.setLocale(lang);
    }
}
```

### Config files

Current supported languages:

| Language                 | Filename     |
| ------------------------ | ------------ |
| Chinese                  | zh-CN        |
| Traditional Chinese (HK) | zh-HK        |
| Traditional Chinese (TW) | zh-TW        |
| English                  | en-US        |
| German                   | de-DE        |
| German (formal)          | de-DE-formal |
| Norwegian                | nb-NO        |
| Japanese                 | ja-JP        |
| Romanian                 | ro-RO        |
| Spanish (Spain)          | es-ES        |
| Turkish                  | tr-TR        |

> View all language configs [Here](https://github.com/youzan/vant/tree/dev/src/locale/lang).

