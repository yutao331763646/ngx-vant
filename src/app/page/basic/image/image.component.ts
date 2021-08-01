import { Component, Input, OnInit } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {

    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }


    cards = [{
        title: '介绍',
        desc: '增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。'

    }, {
        title: '引入',
        code:
            `  import ImageModule from 'VantModule'; `
    }]
    cards2 = [{
        title: '基础用法',
        desc: '基础用法与原生 <code>img</code> 标签一致，可以设置 <code>src</code>、<code>width</code>、<code>height</code>、<code>alt</code> 等原生属性。'
        , code: `  <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" ></van-image>`
    }, {
        title: '填充模式',
        desc: '通过 <code>fit</code> 属性可以设置图片填充模式，可选值见下方表格。',
        code: `  <van-image
    width="10rem"
    height="10rem"
    fit="contain"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
  </van-image>`
    }, {
        title: '圆形图片',
        desc: '通过 <code>round</code> 属性可以设置图片变圆，注意当图片宽高不相等且 <code>fit</code> 为 <code>contain</code> 或 <code>scale-down</code> 时，将无法填充一个完整的圆形。',
        code: `  <van-image
    width="10rem"
    height="10rem"
    [round]="true"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
  </van-image>`
    }, {
        title: '加载中提示',
        desc: '<code>Image</code> 组件提供了默认的加载中提示',
        code: `  <van-image
    width="10rem"
    height="10rem"
    [showLoading]="true"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
  </van-image>`
    }, {
        title: '加载失败提示',
        desc: '<code>Image</code> 组件提供了默认的加载失败提示',
        code: `  <van-image
    width="10rem"
    height="10rem"
    [showError]="true"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
  </van-image>`
    }]
    constructor() { }

    ngOnInit() {
        this.setReadMe()
    }
    setReadMe() {
        this.readMe = require(`!html-loader!markdown-loader!./README.zh-CN.md`).default;
    }

}
