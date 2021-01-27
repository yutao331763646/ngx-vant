import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'van-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {
    isOpen = false;
    @Input()
    get visible(): boolean { return this.isOpen; }
    set visible(value: boolean) {
        this.isOpen = value;
    }
    @Output() visibleChange = new EventEmitter<boolean>(false);

    @Input() closeOnClickOverlay: boolean = true
    constructor() { }

    ngOnInit() {
    }
    maskClose() {
        this.visible = false
        this.visibleChange.emit(false)
    }
 
}
