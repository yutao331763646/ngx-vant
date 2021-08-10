import { Component, Input, OnInit } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.less']
})
export class ContributionComponent implements OnInit {

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
        this.readMe = require(`!html-loader!markdown-loader!./contribution.zh-CN.md`).default;
    }

}
