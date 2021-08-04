import { Component, Input, OnInit } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {
    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }
    cards = [{
        title: '介绍',
        desc: '表单中的输入框组件。'

    }, {
        title: '引入',
        code:
            `  import FieldModule from 'VantModule'; `
    }]
    cards2 = [{
        title: '基础用法',
        desc: '可以通过 <code>ngModel</code> 双向绑定输入框的值，通过 <code>placeholder</code> 设置占位提示文字。',
        code: `<!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
<van-cell-group>
  <van-field [(ngModel)]="value" label="文本" placeholder="请输入用户名"></van-field>
</van-cell-group>`

    }, {
        title: '自定义类型',
        desc: '根据 <code>type</code> 属性定义不同类型的输入框，默认值为 <code>text</code>。',
        code:
            `<!-- 输入任意文本 -->
<van-field [(ngModel)]="text" label="文本" ></van-field>
<!-- 输入手机号，调起手机号键盘 -->
<van-field [(ngModel)]="tel" type="tel" label="手机号"></van-field>
<!-- 允许输入正整数，调起纯数字键盘 -->
<van-field [(ngModel)]="digit" type="digit" label="整数" ></van-field>
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<van-field [(ngModel)]="number" type="number" label="数字"></van-field>
<!-- 输入密码 -->
<van-field [(ngModel)]="password" type="password" label="密码" ></van-field>`
    }, {
        title: '禁用输入框',
        desc: '通过 <code>readonly</code> 将输入框设置为只读状态，通过 <code>disabled</code> 将输入框设置为禁用状态。',
        code: `<van-cell-group>
  <van-field label="文本" value="输入框只读" [readonly]="true" ></van-field>
  <van-field label="文本" value="输入框已禁用"  [disabled]="true" ></van-field>
</van-cell-group>`
    }, {
        title: '显示图标',
        desc: '通过 <code>leftIcon</code> 和 <code>rightIcon</code> 配置输入框两侧的图标，通过设置 <code>clearable</code> 在输入过程中展示清除图标。',
        code: `<van-cell-group>
    <van-field
        [(ngModel)]="value1"
        label="文本"
        leftIcon="smile-o"
        rightIcon="warning-o"
        placeholder="显示图标"
    ></van-field>
    <van-field
        [(ngModel)]="value2"
        [clearable]="true"
        label="文本"
        leftIcon="music-o"
        placeholder="显示清除图标"
    ></van-field>
</van-cell-group>
        `
    }, {
        title: '错误提示',
        desc: '设置  <code>required</code> 属性表示这是一个必填项，可以配合  <code>error</code> 或  <code>errorMessage</code> 属性显示对应的错误提示。',
        code: `<van-cell-group>
    <van-field
        [(ngModel)]="username"
        [error]="true"
        [required]="true"
        label="用户名"
        placeholder="请输入用户名"
    ></van-field>
    <van-field
        [(ngModel)]="phone"
        [required]="true"
        label="手机号"
        placeholder="请输入手机号"
        errorMessage="手机号格式错误"
    ></van-field>
</van-cell-group>
        `
    }, {
        title: '插入按钮',
        desc: '通过 <code>button</code> 可以在输入框尾部插入按钮。',
        code: `<van-field
    [(ngModel)]="sms"
    [center]="true"
    [clearable]="true"
    [button]="button"
    label="短信验证码"
    placeholder="请输入短信验证码"
>
    <ng-template #button>
        <van-button size="small" type="primary">发送验证码</van-button>
    </ng-template>
</van-field>`
    }, {
        title: '显示字数统计',
        desc: '设置 <code>maxlength</code> 和 <code>showWordLimit</code> 属性后会在底部显示字数统计。',
        code: `<van-field
    [(ngModel)]="message"
    rows="2"
    label="留言"
    type="textarea"
    maxlength="50"
    placeholder="请输入留言"
    [showWordLimit]="true"
></van-field>
        `
    }, {
        title: '输入框内容对齐',
        desc: '通过 <code>inputAlign</code> 属性可以设置输入框内容的对齐方式，可选值为 <code>center</code>、<code>right</code>。',
        code: `<van-field
    [(ngModel)]="value"
    label="文本"
    placeholder="输入框内容右对齐"
    inputAlign="right"
></van-field>`
    }]
    constructor() { }

    ngOnInit() {
        this.setReadMe()
    }
    setReadMe() {
        this.readMe = require(`!html-loader!markdown-loader!./README.zh-CN.md`).default;
    }

}
