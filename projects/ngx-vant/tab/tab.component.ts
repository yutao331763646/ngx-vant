import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { removeNgTag } from '../utils';

@Component({
    selector: 'van-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {
    @Input() title: string = ''
    @Input() disabled: boolean = false
    @Input() dot: boolean = false
    @Input() badge: number | string = ''
    @Input() info: number | string = ''
    @Input() name: number | string = ''
    @Input() titleStyle: { [klass: string]: any } = {};
    @Input() titleClass: string = ''
    constructor(private el: ElementRef) { }

    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }

}
