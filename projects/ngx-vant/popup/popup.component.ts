import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { overlayAnimation } from '../overlay/overlay.animation';

@Component({
    selector: 'van-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.less'],
    animations: [overlayAnimation]
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

    @Input() position: 'top' | 'bottom' | 'right' | 'left' | 'center' = 'center'
    @Input() customStyle: { [klass: string]: any } = {};


    get transform(): string | null {
        if (this.isOpen) {
            return null;
        }
        let position = ''
        switch (this.position) {
            case 'left':
                position = `translate3d(-100%, -50%, 0)`;
                break;
            case 'right':
                position = `translate3d(100%, -50%, 0)`;
                break;
            case 'top':
                position = `translate3d(0, -100%, 0)`;
                break;
            case 'bottom':
                position = `translate3d(0, 100%, 0)`;
                break;
            default:
                position = ``;
        }
        return position

    }
    constructor() { }

    ngOnInit() {
    }
    maskClose() {
        this.visible = false
        this.visibleChange.emit(false)
    }
  
}
