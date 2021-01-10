import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'vant-doc-dome',
    templateUrl: './dome.component.html',
    styleUrls: ['./dome.component.less'],
})
export class DomeComponent implements OnInit {
    @Input() title: string = ''
    @Input() desc: string = ''
    @Input() cards: any = []
    constructor() { }

    ngOnInit() {
    }

}
