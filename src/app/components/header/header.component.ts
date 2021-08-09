import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vant-doc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    lang = 'En'
    constructor() { }

    ngOnInit() {
    }
    onSwitchLang() {

    }
}
