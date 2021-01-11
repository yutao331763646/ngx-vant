import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { removeNgTag } from '../utils';

@Component({
    selector: 'van-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
    //leftText rightText暂时只传入string,后续需支持TemplateRef传入
    @Input() title: string = ''
    @Input() leftArrow: boolean = false
    @Input() leftText: string = ''
    @Input() rightText: string = ''
    @Input() safeAreaInsetTop: boolean = false
    @Input() fixed: boolean = false
    @Input() border: boolean = true
    @Input() zIndex: number | string = 1
    @Output() readonly clickLeft = new EventEmitter<MouseEvent>();
    @Output() readonly clickRight = new EventEmitter<MouseEvent>();
    constructor(private el: ElementRef) { }

    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }
    leftClick(e: MouseEvent): void {
        this.clickLeft.emit(e);
    }
    leftRight(e: MouseEvent): void {
        this.clickRight.emit(e);
    }
}
