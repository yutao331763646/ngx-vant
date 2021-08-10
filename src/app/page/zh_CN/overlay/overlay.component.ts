import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
    cards = [{
        title: '介绍',
        desc: '创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。'

    }, {
        title: '引入',
        code:
            `  import OverlayModule from 'VantModule'; `
    }]
  constructor() { }

  ngOnInit() {
  }

}
