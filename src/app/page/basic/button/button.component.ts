import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
    cards = [{
        title: '介绍',
        desc: '按钮用于触发一个操作，如提交表单。'

    }, {
        title: '引入',
        code:
            `  import ButtonModule from 'VantModule'; `
    }]
    cards2 = [
        {
            title: '按钮类型',
            desc: this.sanitizer.bypassSecurityTrustHtml('按钮支持 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>danger</code> 五种类型，默认为 <code>default</code>。'),
            code: `  <van-button type="primary">主要按钮</van-button>
  <van-button type="info">信息按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button> `
        }, {
            title: '朴素按钮',
            desc: this.sanitizer.bypassSecurityTrustHtml('通过 <code>plain</code> 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。'),
            code: `  <van-button [plain]="true" type="primary">朴素按钮</van-button>
  <van-button [plain]="true" type="info">朴素按钮</van-button> `
        }, {
            title: '细边框',
            desc: this.sanitizer.bypassSecurityTrustHtml('设置 <code>hairline</code> 属性可以展示 0.5px 的细边框。'),
            code: `  <van-button [plain]="true" [hairline]="true"  type="primary">朴素按钮</van-button>
  <van-button [plain]="true" [hairline]="true" type="info">朴素按钮</van-button> `
        }, {
            title: '禁用状态',
            desc: this.sanitizer.bypassSecurityTrustHtml('通过 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击。'),
            code: `  <van-button [disabled]="true" type="primary">朴素按钮</van-button>
  <van-button [disabled]="true" type="info">朴素按钮</van-button> `
        }, {
            title: '加载状态',
            desc: this.sanitizer.bypassSecurityTrustHtml('通过 <code>loading</code> 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 <code>loading-text</code> 设置加载状态下的文字。'),
            code: `  <van-button [loading]="true" type="primary" ></van-button>
  <van-button [loading]="true" type="primary" loadingType="spinner" ></van-button>
  <van-button [loading]="true" type="info" loadingText="加载中..." ></van-button> `
        }, {
            title: '按钮形状',
            desc: this.sanitizer.bypassSecurityTrustHtml('通过 <code>square</code> 设置方形按钮，通过 <code>round</code>设置圆形按钮。'),
            code: `  <van-button [square]="true" type="primary">方形按钮</van-button>
  <van-button [round]="true" type="info">圆形按钮</van-button> `
        }, {
            title: '图标按钮',
            desc: this.sanitizer.bypassSecurityTrustHtml('通过 <code>icon</code> 属性设置按钮图标，支持 <code>Icon</code> 组件里的所有图标，也可以传入图标 <code>URL</code>。'),
            code: `  <van-button icon="plus" type="primary"></van-button>
  <van-button icon="plus" type="primary">按钮</van-button>
  <van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">按钮</van-button>`
        }, {
            title: '按钮尺寸',
            desc: this.sanitizer.bypassSecurityTrustHtml('支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code>。'),
            code: `  <van-button type="primary" size="large">大号按钮</van-button>
  <van-button type="primary" size="normal">普通按钮</van-button>
  <van-button type="primary" size="small">小型按钮</van-button>
  <van-button type="primary" size="mini">迷你按钮</van-button>`
        }, {
            title: '块级元素',
            desc: this.sanitizer.bypassSecurityTrustHtml('按钮在默认情况下为行内块级元素，通过 <code>block</code> 属性可以将按钮的元素类型设置为块级元素。'),
            code: `  <van-button type="primary" [block]="true">块级元素</van-button>`
        }, {
            title: '页面导航',
            desc: this.sanitizer.bypassSecurityTrustHtml('可以通过 <code>url</code> 属性进行 <code>URL</code> 跳转，或通过 <code>to</code> 属性进行路由跳转。'),
            code: `  <van-button type="primary" url="/vant/mobile.html">URL 跳转</van-button>
  <van-button type="primary" to="index">路由跳转</van-button>`
        }, {
            title: '自定义颜色',
            desc: this.sanitizer.bypassSecurityTrustHtml('通过 <code>color</code> 属性可以自定义按钮的颜色。'),
            code: `  <van-button color="#7232dd">单色按钮</van-button>
  <van-button color="#7232dd" [plain]="true">单色按钮</van-button>
  <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</van-button>`
        },
    ]
    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
    }

}
