import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }
    cards = [{
        title: '介绍',
        desc: '加载图标，用于表示加载中的过渡状态。'

    }, {
        title: '引入',
        code:
            `  import LoadingModule from 'VantModule'; `
    }]
    cards2 = [{
        title: '按钮类型',
        desc:this.sanitizer.bypassSecurityTrustHtml('通过 <code>type</code> 属性可以设置加载图标的类型，默认为 <code>circular</code>，可选值为 <code>spinner</code>。') ,
        code: `  <van-loading />
  <van-loading type="spinner" /> `
    }]
  constructor(  private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
