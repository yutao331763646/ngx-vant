import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {
    show = false
    show1 = false
    show2 = false
    show3 = false
    show4 = false
    constructor() { }

    ngOnInit() {
    }

}
