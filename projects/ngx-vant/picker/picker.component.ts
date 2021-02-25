import { Component, Input, OnInit } from '@angular/core';
export const inBrowser = typeof window !== 'undefined';
export const DEFAULT_ITEM_HEIGHT = 44;
let rootFontSize: number;
function getRootFontSize() {
    if (!rootFontSize) {
        const doc = document.documentElement;
        const fontSize =
            doc.style.fontSize || window.getComputedStyle(doc).fontSize;

        rootFontSize = parseFloat(fontSize);
    }

    return rootFontSize;
}
function convertRem(value: string) {
    value = value.replace(/rem/g, '');
    return +value * getRootFontSize();
}

function convertVw(value: string) {
    value = value.replace(/vw/g, '');
    return (+value * window.innerWidth) / 100;
}

function convertVh(value: string) {
    value = value.replace(/vh/g, '');
    return (+value * window.innerHeight) / 100;
}
export function unitToPx(value: string | number): number {
    if (typeof value === 'number') {
        return value;
    }

    if (inBrowser) {
        if (value.indexOf('rem') !== -1) {
            return convertRem(value);
        }
        if (value.indexOf('vw') !== -1) {
            return convertVw(value);
        }
        if (value.indexOf('vh') !== -1) {
            return convertVh(value);
        }
    }

    return parseFloat(value);
}

@Component({
    selector: 'van-picker',
    templateUrl: './picker.component.html',
    styleUrls: ['./picker.component.less']
})
export class PickerComponent implements OnInit {
    @Input() title: string = ''
    @Input() showToolbar: boolean = false
    @Input() loading: boolean = false
    @Input() readonly: boolean = false
    // @Input() itemHeight: number | string = 44
    @Input() cancelButtonText: string = '取消'
    @Input() confirmButtonText: string = '确认'
    @Input() allowHtml: boolean = true
    @Input() visibleItemCount: number = 6
    @Input() swipeDuration: number | string = 1000
    @Input() defaultIndex: number | string = 0
    @Input() columns: any[] = []
    @Input() toolbarPosition: string = 'top'
    @Input() valueKey: string = 'text'

    @Input()
    get itemHeight(): number { return this._itemHeight; }
    set itemHeight(value: number) {
        const hei = value ? unitToPx(value) : DEFAULT_ITEM_HEIGHT;
        this._itemHeight = hei;
        this.frameHeight = hei.toString() + 'px'
        this.columnsHeight = (hei * this.visibleItemCount).toString() + 'px'
        this.maskBackHeight = ((hei * this.visibleItemCount - hei) / 2).toString() + 'px'
    }
    private _itemHeight: number = 44;
    frameHeight: string = ''
    columnsHeight: string = ''
    maskBackHeight: string = ''
    constructor() { }

    ngOnInit() {
    }

}


@Component({
    selector: 'van-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./picker.component.less']
})
export class ToolBarComponent implements OnInit {
    @Input() title: string = ''
    @Input() cancelButtonText: string = '取消'
    @Input() confirmButtonText: string = '确认'
    constructor() { }

    ngOnInit() {
    }

}
