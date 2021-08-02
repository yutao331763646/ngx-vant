import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }
    cards = [{
        title: '介绍',
        desc: 'Layout 提供了 <code>van-row</code> 和 <code>van-col</code> 两个组件来进行行列布局。'

    }, {
        title: '引入',
        code:
            `  import RowModule from 'VantModule'; 
  import ColModule from 'VantModule'; `
    }]
    cards2 = [{
        title: '基础用法',
        desc: this.sanitizer.bypassSecurityTrustHtml('Layout 组件提供了 <code>24列栅格</code>，通过在 <code>Col</code> 上添加 <code>span</code> 属性设置列所占的宽度百分比。此外，添加 <code>offset</code> 属性可以设置列的偏移宽度，计算方式与 <code>span</code> 相同。'),
        code: `  <van-row>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
  </van-row>

  <van-row>
    <van-col span="4">span: 4</van-col>
    <van-col span="10" offset="4">offset: 4, span: 10</van-col>
  </van-row>

  <van-row>
    <van-col offset="12" span="12">offset: 12, span: 12</van-col>
  </van-row> `
    }, {
        title: '设置列元素间距',
        desc: this.sanitizer.bypassSecurityTrustHtml('通过 <code>gutter</code> 属性可以设置列元素之间的间距，默认间距为 <code>0</code>。'),
        code: `  <van-row gutter="20">
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
  </van-row>`
    }, {
        title: 'Flex 布局 ',
        desc: this.sanitizer.bypassSecurityTrustHtml('将 <code>type</code> 属性设置为 <code>flex</code> 可以启用 <code>flex</code> 布局，便于进行灵活的对齐。'),
        code: `  <!-- 左对齐 -->
  <van-row type="flex">
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
  </van-row>

  <!-- 居中 -->
  <van-row type="flex" justify="center">
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
  </van-row>

  <!-- 右对齐 -->
  <van-row type="flex" justify="end">
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
  </van-row>

  <!-- 两端对齐 -->
  <van-row type="flex" justify="space-between">
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
  </van-row>

  <!-- 每个元素的两侧间隔相等 -->
  <van-row type="flex" justify="space-around">
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
    <van-col span="6">span: 6</van-col>
  </van-row>`
    }]
    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.setReadMe()
    }
    setReadMe() {
        this.readMe = require(`!html-loader!markdown-loader!./README.zh-CN.md`).default;
    }
}
