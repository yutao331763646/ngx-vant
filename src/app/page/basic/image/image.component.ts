import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
    cards = [{
        title: '介绍',
        desc: '增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。'

    }, {
        title: '引入',
        code:
            `  import ImageModule from 'VantModule'; `
    }]
  constructor() { }

  ngOnInit() {
  }

}
