import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-col',
    templateUrl: './col.component.html',
    styleUrls: ['./col.component.less']
})
export class ColComponent implements OnInit {
    @Input() span: number | string = 1
    @Input() offset: number | string = 1
    constructor() { }

    ngOnInit() {
    }

}
