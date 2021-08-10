import { Component, Input, OnInit } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.less']
})
export class StyleGuideComponent implements OnInit {

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
        this.readMe = require(`!html-loader!markdown-loader!./style-guide.zh-CN.md`).default;
    }

}
