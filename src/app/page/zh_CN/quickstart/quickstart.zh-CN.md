# 快速上手

### 介绍

通过本章节你可以了解到 Vant 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 Vant 时，可以通过 `npm` 或 `yarn` 进行安装：

```bash
npm i ngx-vant -S
```







## 按需引入组件



```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonModule } from 'ngx-vant/button';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```






