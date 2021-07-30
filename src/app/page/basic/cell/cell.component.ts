import { Component, Input, OnInit } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
    selector: 'app-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.less']
})
export class CellComponent implements OnInit {
    //     cards = [{
    //         title: '介绍',
    //         desc: '单元格为列表中的单个展示项。'

    //     }, {
    //         title: '引入',
    //         code:
    //             `  import CellModule from 'VantModule'; `
    //     }]
    //     cards2 = [{
    //         title: '基础用法',
    //         desc: '<code>Cell</code> 可以单独使用，也可以与 <code>CellGroup</code> 搭配使用，<code>CellGroup</code> 可以为 <code>Cell</code> 提供上下外边框。',
    //         code: `  <van-cell-group>
    //     <van-cell title="单元格" value="内容" ></van-cell>
    //     <van-cell title="单元格" value="内容" label="描述信息" ></van-cell>
    //   </van-cell-group>`

    //     }, {
    //         title: '单元格大小',
    //         desc: '通过 <code>size</code> 属性可以控制单元格的大小。',
    //         code:
    //             `  <van-cell title="单元格" value="内容" size="large"  ></van-cell>
    //   <van-cell title="单元格" value="内容" size="large" label="描述信息"  ></van-cell> `
    //     }, {
    //         title: '展示图标',
    //         desc: '通过 <code>icon</code> 属性在标题左侧展示图标。',
    //         code: `  <van-cell title="单元格" icon="location-o"  ></van-cell>`
    //     }, {
    //         title: '只设置 value',
    //         desc: '只设置 <code>value</code> 时，内容会靠左对齐。',
    //         code: `  <van-cell value="内容" ></van-cell>`
    //     }, {
    //         title: '展示箭头',
    //         desc: '设置 <code>[isLink]="true"</code> 属性后会在单元格右侧显示箭头，并且可以通过 <code>arrow-direction</code> 属性控制箭头方向。',
    //         code: `  <van-cell title="单元格" [isLink]="true" ></van-cell>
    //   <van-cell title="单元格" [isLink]="true" value="内容" ></van-cell>
    //   <van-cell title="单元格" [isLink]="true" arrowDirection="down" value="内容" ></van-cell>`
    //     },{
    //         title:'分组标题',
    //         desc:'通过 <code>CellGroup</code> 的 <code>title</code> 属性可以指定分组标题。',
    //         code:`<van-cell-group title="分组1">
    //   <van-cell title="单元格" value="内容"></van-cell>
    // </van-cell-group>
    // <van-cell-group title="分组2">
    //   <van-cell title="单元格" value="内容" ></van-cell>
    // </van-cell-group>`
    //     },{
    //         title:'垂直居中',
    //         desc:'通过 <code>center</code> 属性可以让 Cell 的左右内容都垂直居中。',
    //         code:`  <van-cell [center]="true" title="单元格" value="内容" label="描述信息" ></van-cell>`
    //     }]

    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }

    constructor() { }

    ngOnInit() {
        this.setReadMe()
    }
    setReadMe() {
        this.readMe = require(`!html-loader!markdown-loader!./README.zh-CN.md`).default;
    }

}
