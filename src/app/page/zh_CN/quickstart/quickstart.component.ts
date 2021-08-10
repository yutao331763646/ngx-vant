import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quickstart',
    templateUrl: './quickstart.component.html',
    styleUrls: ['./quickstart.component.less']
})
export class QuickstartComponent implements OnInit {

    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }


    cards = [{
        title: '介绍',
        desc: '通过本章节你可以了解到 Ngx-Vant 的安装方法和基本使用姿势。'
    }]
    cards2 = [{
        title: '通过 npm 安装',
        desc: '在现有项目中使用 <code>Ngx-Vant</code> 时，可以通过 <code>npm</code> 进行安装：'

        , code: `  npm i ngx-vant -S`
    }]
    cards3 = [{
        title: '按需引入组件',
         code: `  import { BrowserModule } from '@angular/platform-browser';
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
  export class AppModule { }`
    }]
    constructor() { }

    ngOnInit() {
        this.setReadMe()
    }
    setReadMe() {
        this.readMe = require(`!html-loader!markdown-loader!./README.zh-CN.md`).default;
    }

}
