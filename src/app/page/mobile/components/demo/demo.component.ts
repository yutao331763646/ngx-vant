import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'vant-mobile-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {
    @Input() title = ''
    constructor() { }
    ngOnInit() {
    }

}
