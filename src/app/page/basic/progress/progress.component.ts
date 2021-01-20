import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
    cards = [{
        title: '介绍',
        desc: '用于展示操作的当前进度。'

    }, {
        title: '引入',
        code:
            `  import ProgressModule from 'VantModule'; `
    }]
    cards2 = [{
        title: '基础用法',
        desc: '进度条默认为蓝色，使用 <code>percentage</code> 属性来设置当前进度。',
        code:`  <van-progress [percentage]="50" ></van-progress>`

    }, {
        title: '线条粗细',
        desc:'通过 <code>strokeWidth</code> 可以设置进度条的粗细。',
        code:
            `  <van-progress [percentage]="50" strokeWidth='8' ></van-progress>`
    }, {
        title: '置灰',
        desc:'设置 <code>inactive</code> 属性后进度条将置灰。',
        code:
            `  <van-progress [percentage]="50" [inactive]="true" ></van-progress>`
    }
    , {
        title: '样式定制',
        desc:'可以使用 <code>pivotText</code> 属性自定义文字，<code>color</code> 属性自定义进度条颜色。',
        code:
            `  <van-progress pivotText="橙色" color="#f2826a" [percentage]="25" ></van-progress>
  <van-progress pivotText="红色" color="#ee0a24" [percentage]="50" ></van-progress>
  <van-progress
    [percentage]="75"
    pivotText="紫色"
    pivotColor="#7232dd"
    color="linear-gradient(to right, #be99ff, #7232dd)"
  ></van-progress>`
    }]
  constructor() { }

  ngOnInit() {
  }

}
