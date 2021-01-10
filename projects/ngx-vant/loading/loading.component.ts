import { Component, Input, OnInit } from '@angular/core';
export type LoadingType = 'spinner' | 'circular'
export function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}
export function isNumeric(val: string): boolean {
    return /^\d+(\.\d+)?$/.test(val);
}

export function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }

    value = String(value);
    return isNumeric(value) ? `${value}px` : value;
}
@Component({
    selector: 'van-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
    @Input() type: LoadingType = 'circular'
    @Input() color: string = ''
    @Input() textColor: string = ''
    @Input() vertical: boolean = false
    @Input() isButton: boolean = false

    @Input()
    get textSize(): number | string { return this._textSize; }
    set textSize(value: number | string) {
        const iconSize = addUnit(value) as string;
        this._textSize = iconSize;
    }
    private _textSize: number | string = '';


    @Input()
    get size(): number | string { return this._size; }
    set size(value: number | string) {
        const iconSize = addUnit(value) as string;
        this._size = iconSize;
    }
    private _size: number | string = '';


    constructor() { }

    ngOnInit() {
    }
    ngOnChanges() {

    }
}
