import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { isDef } from 'ngx-vant/utils';
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
export function isObject(val: unknown): val is Record<any, any> {
    return val !== null && typeof val === 'object';
}
const { hasOwnProperty } = Object.prototype;
export type ObjectIndex = Record<string, any>;
function assignKey(to: ObjectIndex, from: ObjectIndex, key: string) {
    const val = from[key];

    if (!isDef(val)) {
        return;
    }

    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
        to[key] = val;
    } else {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        to[key] = deepAssign(Object(to[key]), from[key]);
    }
}

export function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
    Object.keys(from).forEach((key) => {
        assignKey(to, from, key);
    });

    return to;
}


export function deepClone(obj: object): object {
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    if (typeof obj === 'object') {
        return deepAssign({}, obj);
    }

    return obj;
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
})
export class PickerComponent implements OnInit {
    @Output() readonly cancel = new EventEmitter<MouseEvent>();
    @Output() readonly confirm = new EventEmitter<MouseEvent>();

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
    }
    private _columns: any[] = [];



    @Input()
    get itemHeight(): number { return this._itemHeight; }
    set itemHeight(value: number) {
        const hei = value ? unitToPx(value) : DEFAULT_ITEM_HEIGHT;
        this._itemHeight = hei;
        this.frameHeight = hei.toString() + 'px'
        console.log(this.frameHeight)
        this.columnsHeight = (hei * this.visibleItemCount).toString() + 'px'
        this.maskBackHeight = ((hei * this.visibleItemCount - hei) / 2).toString() + 'px'
    }
    private _itemHeight: number = 44;
    frameHeight: string = '44px'
    columnsHeight: string = '264px'
    maskBackHeight: string = '110px'
    dataType: string = 'text'
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
    preventDefault(e: TouchEvent) {
        e.preventDefault()
    }
    onCancel(e: MouseEvent): void {
        this.cancel.emit(e)
    }
    onConfirm(e: MouseEvent): void {
        this.confirm.emit(e)
    }
}


@Component({
    selector: '[van-toolbar]',
    templateUrl: './toolbar.component.html',
})
export class ToolBarComponent implements OnInit {
    @Input() title: string = ''
    @Input() cancelButtonText: string = '取消'
    @Input() confirmButtonText: string = '确认'
    @Output() readonly cancel = new EventEmitter<MouseEvent>();
    @Output() readonly confirm = new EventEmitter<MouseEvent>();

    constructor() { }

    ngOnInit() {
    }
    onCancel(e: MouseEvent): void {
        this.cancel.emit(e)
    }
    onConfirm(e: MouseEvent): void {
        this.confirm.emit(e)
    }
}

const MIN_DISTANCE = 10;

function getDirection(x: number, y: number) {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }

    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }

    return '';
}
function getElementTranslateY(element: any) {
    const style = window.getComputedStyle(element);
    const transform = style.transform || style.webkitTransform;
    const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

    return Number(translateY);
}
export function range(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}
// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;
const DEFAULT_DURATION = 200;
@Component({
    selector: '[van-picker-column]',
    templateUrl: './picker-column.component.html',
    host: {
        '[class]': '"van-picker-column " + className',
        '(touchstart)': 'onTouchStart($event)',
        '(touchmove)': 'onTouchMove($event)',
        '(touchend)': 'onTouchEnd($event)',
        '(touchcancel)': 'onTouchEnd($event)'
    }
})
export class PickerColumnComponent implements OnInit {
    @ViewChild('wrapper') wrapper!: ElementRef<HTMLElement>;
    @Input() valueKey: string = 'text'
    @Input() readonly: boolean = false
    @Input() allowHtml: boolean = true
    @Input() className: string = 'text'
    @Input() visibleItemCount: number = 6
    @Input() swipeDuration: number | string = 1000
    duration: number = 0
    offset: number = 0
    baseOffset: number = 0

    @Input()
    get itemHeight(): number { return this._itemHeight }
    set itemHeight(itemHeight: number) {
        this.baseOffset = (this.itemHeight * (this.visibleItemCount - 1)) / 2;
        this._itemHeight = itemHeight;

    }
    private _itemHeight: number = 44;



    @Input()
    get initialOptions(): any[] { return this._initialOptions }
    set initialOptions(initialOptions: any[]) {
        this.options = deepClone(initialOptions)
        console.log(this.options)
        this.count = this.options.length
        this._initialOptions = initialOptions;

    }
    private _initialOptions: any[] = []

    options: any = null


    @Input()
    get defaultIndex(): number { return this._defaultIndex }
    set defaultIndex(defaultIndex: number) {
        this.currentIndex = defaultIndex
        this._defaultIndex = defaultIndex;

    }
    private _defaultIndex: number = 0;

    currentIndex: number = 0
    count: number = 0
    startX: number = 0
    startY: number = 0
    deltaX: number = 0
    deltaY: number = 0
    offsetX: number = 0
    offsetY: number = 0
    startOffset: number = 0
    momentumOffset: number = 0
    direction: string = ''
    moving: boolean = false
    transitionEndTrigger: any = null
    touchStartTime = Date.now()
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log(this)
        // this.bindTouchEvent(this.elementRef.nativeElement);
    }
    isObject(val: unknown): val is Record<any, any> {
        return val !== null && typeof val === 'object';
    }
    isOptionDisabled(option: any) {
        return isObject(option) && option.disabled;
    }
    touchStart(event: any) {
        this.resetTouchStatus();
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
    }
    touchMove(event: any) {
        const touch = event.touches[0];
        this.deltaX = touch.clientX - this.startX;
        this.deltaY = touch.clientY - this.startY;
        this.offsetX = Math.abs(this.deltaX);
        this.offsetY = Math.abs(this.deltaY);
        this.direction =
            this.direction || getDirection(this.offsetX, this.offsetY);
    }

    resetTouchStatus() {
        this.direction = '';
        this.deltaX = 0;
        this.deltaY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
    }
    onTouchStart(event: Event) {
        if (this.readonly) {
            return;
        }
        this.touchStart(event);
        if (this.moving) {
            const translateY = getElementTranslateY(this.wrapper.nativeElement);
            this.offset = Math.min(0, translateY - this.baseOffset);
            this.startOffset = this.offset;
        } else {
            this.startOffset = this.offset;
        }

        this.duration = 0;
        this.transitionEndTrigger = null;
        this.touchStartTime = Date.now();
        this.momentumOffset = this.startOffset;
    }
    onTouchMove(event: Event) {
        if (this.readonly) {
            return;
        }
        this.touchMove(event);
        if (this.direction === 'vertical') {
            this.moving = true;
            event.preventDefault()
            event.stopPropagation()
        }

        this.offset = range(
            this.startOffset + this.deltaY,
            -(this.count * this.itemHeight),
            this.itemHeight
        );
        console.log('offset:' + this.offset)
        console.log('baseOffset:' + this.baseOffset)
        const now = Date.now();
        if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
            this.touchStartTime = now;
            this.momentumOffset = this.offset;
        }
    }
    onTouchEnd(event: Event) {
        console.log(event)
        if (this.readonly) {
            return;
        }

        const distance = this.offset - this.momentumOffset;
        const duration = Date.now() - this.touchStartTime;
        const allowMomentum =
            duration < MOMENTUM_LIMIT_TIME &&
            Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

        if (allowMomentum) {
            this.momentum(distance, duration);
            return;
        }

        const index = this.getIndexByOffset(this.offset);
        this.duration = DEFAULT_DURATION;
        this.setIndex(index, true);

        // compatible with desktop scenario
        // use setTimeout to skip the click event Emitted after touchstart
        setTimeout(() => {
            this.moving = false;
        }, 0);
    }
    getIndexByOffset(offset: number) {
        return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    }

    adjustIndex(index: number): void | number {
        index = range(index, 0, this.count);
        for (let i = index; i < this.count; i++) {
            if (!this.isOptionDisabled(this.options[i])) {
                return i;
            } else {
                return 0
            }
        }

        for (let i = index - 1; i >= 0; i--) {
            if (!this.isOptionDisabled(this.options[i])) {
                return i;
            } else {
                return 0
            }
        }
    }
    setIndex(index: number, emitChange: any) {
        index = this.adjustIndex(index) || 0;

        const offset = -index * this.itemHeight;

        const trigger = () => {
            if (index !== this.currentIndex) {
                this.currentIndex = index;

                if (emitChange) {
                    // this.$emit('change', index);
                }
            }
        };

        // trigger the change event after transitionend when moving
        if (this.moving && offset !== this.offset) {
            this.transitionEndTrigger = trigger;
        } else {
            trigger();
        }

        this.offset = offset;
    }
    momentum(distance: number, duration: number) {
        const speed = Math.abs(distance / duration);

        distance = this.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

        const index = this.getIndexByOffset(distance);

        this.duration = +this.swipeDuration;
        this.setIndex(index, true);
    }

}
