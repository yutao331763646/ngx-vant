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
export interface Column {
    values: string[]
    defaultIndex: number
    className: string
    children: Column
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
    @Input() defaultIndex: number = 0
    // @Input() columns: any[] = []
    @Input() toolbarPosition: string = 'top'
    @Input() valueKey: string = 'text'


    @Input()
    get columns(): Column[] | any[] { return this._columns; }
    set columns(columns: Column[] | any[]) {
        this._columns = columns;
        const firstColumn = columns[0] || {};
        if (firstColumn.children) {
            this.formatCascade();

        } else if (firstColumn.values) {
            this.formattedColumns = columns;
        } else {
            this.formattedColumns = [{ values: columns }];
        }
        console.log(this.formattedColumns)
    }
    private _columns: any[] = [];



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
    dataType: string = ''
    formattedColumns: any[] = []
    constructor() { }

    ngOnInit() {
    }
    formatCascade() {
        const formatted = [];

        let cursor: any = { children: this.columns };

        while (cursor && cursor.children) {
            const { children } = cursor;
            let defaultIndex = cursor.defaultIndex ?? +this.defaultIndex;

            while (children[defaultIndex] && children[defaultIndex].disabled) {
                if (defaultIndex < children.length - 1) {
                    defaultIndex++;
                } else {
                    defaultIndex = 0;
                    break;
                }
            }

            formatted.push({
                values: cursor.children,
                className: cursor.className,
                defaultIndex,
            });

            cursor = children[defaultIndex];
        }

        this.formattedColumns = formatted;
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


@Component({
    selector: 'van-picker-column',
    templateUrl: './picker-column.component.html',
    styleUrls: ['./picker.component.less']
})
export class PickerColumnComponent implements OnInit {
    @Input() valueKey: string = 'text'
    @Input() readonly: boolean = false
    @Input() allowHtml: boolean = true
    @Input() className: string = 'text'
    @Input() defaultIndex: number | string = 0
    @Input() visibleItemCount: number = 6
    @Input() initialOptions: any[] = []
    @Input() swipeDuration: number | string = 1000
    duration: number = 0
    offset: number = 0
    baseOffset: number = 0

    @Input()
    get itemHeight(): number { return this._itemHeight; }
    set itemHeight(itemHeight: number) {
        this.baseOffset = (this.itemHeight * (this.visibleItemCount - 1)) / 2;
        this._itemHeight = itemHeight;

    }
    private _itemHeight: number = 44;


    constructor() { }

    ngOnInit() {
    }

}
