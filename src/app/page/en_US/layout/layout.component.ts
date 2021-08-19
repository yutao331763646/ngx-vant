import { Component, Input, OnInit } from '@angular/core';
import { cardWrapper } from 'src/app/common/card-wrapper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
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
    this.readMe = require(`!html-loader!markdown-loader!./README.md`).default;
}

}
