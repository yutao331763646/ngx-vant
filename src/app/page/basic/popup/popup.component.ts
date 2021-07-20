import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';
import * as hljs from 'highlight.js/lib/core';
@Component({
    selector: 'app-popup',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {
    private _readMe: HTMLElement | string = '';
    @Input() set readMe(readMe: HTMLElement | string) {
        this._readMe = readMe;
        setTimeout(() => {
            this.refreshView();
        });
    }
    get readMe() {
        return cardWrapper(this._readMe);
    }
    document: Document | any;
    constructor() { }

    ngOnInit() {
        this.setReadMe()
    }
    ngAfterViewInit(): void {
        this.refreshView();
    }
    refreshView() {
        console.log()
        Array.from<HTMLElement>(document.querySelectorAll('pre code')).forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
    setReadMe() {
        this.readMe = require(`!html-loader!markdown-loader!./README.md`).default;
    }

}
