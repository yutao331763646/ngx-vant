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

## 常见问题

### 找不到所需的语言包？

如果上方列表中没有你需要的语言，欢迎给我们提 Pull Request 来增加新的语言包，改动内容可以参考[增加德语语言包](https://github.com/youzan/vant/pull/7245) 的 PR。

### 业务代码如何实现国际化？

可以使用 [vue-i18n](https://github.com/kazupon/vue-i18n) 来实现。

### 以 CDN 形式引入时，如何使用语言包？

目前没有提供 CDN 形式的语言包，可以手动拷贝语言包的内容来使用。

### 语言包中不包含 Sku 组件？

语言包中默认不包含 Sku 业务组件的语言配置，因此如果有 Sku 组件的国际化需求，请自行配置国际化文案。
