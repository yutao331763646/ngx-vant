import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { removeNgTag } from '../utils';

@Component({
    selector: 'van-cell',
    templateUrl: './cell.component.html',
})
export class CellComponent implements OnInit {
    @Input() center: boolean = false;
    @Input() icon: string = '';
    @Input() label: string = '';
    @Input() size: string = '';
    @Input() border: boolean = false;
    @Input() isLink: boolean = false;
    @Input() required: boolean = false;
    @Input() clickable: boolean = false;
    @Input() iconPrefix: string = '';
    @Input() titleStyle: { [klass: string]: any } = {};
    @Input() titleClass: string = '';
    @Input() valueClass: string = '';
    @Input() labelClass: string = '';
    @Input() cellClass: string = '';
    @Input() title: string | number = '';
    @Input() value: string | number | TemplateRef<void> = '';
    @Input() arrowDirection: 'up' | 'down' | 'left' | 'right' | '' = '';
    @Input() disabled: boolean = false
    @Output() readonly click = new EventEmitter<MouseEvent>();
    constructor(private el: ElementRef) { }
    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }
    onClick(e: MouseEvent): void {
        this.click.emit(e);
    }

}
