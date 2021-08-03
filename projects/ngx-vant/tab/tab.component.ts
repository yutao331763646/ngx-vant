import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { removeNgTag } from '../utils';

@Component({
    selector: 'van-tab',
    templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit, OnChanges {
    @ViewChild('contentTemplate', { static: true }) contentTemplate!: TemplateRef<any>;
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
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes.title.currentValue)

    }
    get content(): TemplateRef<any> {
        return this.contentTemplate;
    }
}
