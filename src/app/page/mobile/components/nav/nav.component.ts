import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'vant-mobile-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less']
})
export class MNavComponent implements OnInit {
    @Input() title = ''
    constructor() { }

    ngOnInit() {
    }

}
