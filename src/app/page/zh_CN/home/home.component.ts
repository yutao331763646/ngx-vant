import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    cards = [{
        title: '介绍',
        desc: 'Ngx-Vant 是基于有赞<strong>Zan Design System</strong>视觉规范实现的<strong>Angular UI</strong> 组件库，全部代码开源并遵循 MIT 协议，任何企业、组织及个人均可免费使用。'
    }, {
        title: '开源协议',
        desc: '本项目基于 <strong>MIT</strong> 协议，请自由地享受和参与开源'

    }]
    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }
    constructor() { }

    ngOnInit() {
    }

}
