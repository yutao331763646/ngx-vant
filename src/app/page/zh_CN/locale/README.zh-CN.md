# 国际化

### 介绍

Nnx-Vant 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

## 使用方法

### 在app.module.ts中指定默认语言


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

### 运行时修改

 `Ngx-Vant` 提供了`VantI18nService`服务用于动态修改国际化：

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

### 语言包

目前支持的语言:

| 语言           | 文件名       |
| -------------- | ------------ |
| 简体中文       | zh-CN        |
| 繁體中文（港） | zh-HK        |
| 繁體中文（台） | zh-TW        |
| 英语           | en-US        |
| 德语           | de-DE        |
| 德语 (正式)    | de-DE-formal |
| 土耳其语       | tr-TR        |
| 西班牙语       | es-ES        |
| 日语           | ja-JP        |
| 罗马尼亚语     | ro-RO        |
| 挪威语         | nb-NO        |

> 在 [这里](https://github.com/youzan/vant/tree/dev/src/locale/lang) 查看所有的语言包源文件。


