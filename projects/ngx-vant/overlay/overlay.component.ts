import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { removeNgTag } from '../utils';
import { overlayAnimation } from './overlay.animation';

@Component({
    selector: 'van-overlay',
    templateUrl: './overlay.component.html',
    animations: [overlayAnimation]
})
export class OverlayComponent implements OnInit {
    @Output() readonly click = new EventEmitter<MouseEvent>();
    @Output() readonly maskClose = new EventEmitter<MouseEvent>();
    @Input() show: boolean = false;
    @Input() zIndex: number | string = 1;
    @Input() duration: number | string | null = 0.3;
    @Input() className: string = "";
    @Input() lockScroll: boolean = true;
    @Input() customStyle: { [klass: string]: any } = {};
    @Input() closeOnClickOverlay: boolean = false
    constructor(private el: ElementRef) { }

    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }
    onClick(e: MouseEvent): void {
        this.click.emit(e);
        if (this.closeOnClickOverlay) {
            this.maskClose.emit(e);
        }
    }

}
