import { Component, Input, OnInit } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
    selector: 'app-quickstart',
    templateUrl: './quickstart.component.html',
    styleUrls: ['./quickstart.component.less']
})
export class QuickstartComponent implements OnInit {

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
        this.readMe = require(`!html-loader!markdown-loader!./quickstart.zh-CN.md`).default;
    }

}
