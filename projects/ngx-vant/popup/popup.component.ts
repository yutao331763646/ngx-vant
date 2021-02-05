import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { overlayAnimation } from '../overlay/overlay.animation';
export type iconPositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
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
    @Input() overlay:boolean=true
    @Input() closeOnClickOverlay: boolean = true
    @Input() position: 'top' | 'bottom' | 'right' | 'left' | 'center' = 'center'
    @Input() customStyle: { [klass: string]: any } = {};
    @Input() round: boolean = false
    @Input() safeAreaInsetBottom: boolean = false
    @Input() closeable: boolean = false
    @Input() closeIcon: string = 'cross'
    // @Input() closeIconPosition: string = 'top-right'

    iconPositionNativeClass = 'van-popup__close-icon--top-right'
    @Input()
    get closeIconPosition(): iconPositionType { return this._closeIconPosition; }
    set closeIconPosition(value: iconPositionType) {
        this.iconPositionNativeClass = 'van-popup__close-icon--' + value
        this._closeIconPosition = value;
    }
    private _closeIconPosition: iconPositionType = 'top-right';



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
