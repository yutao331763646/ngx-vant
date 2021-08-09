import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
const removeNgTag = (nativeElement: HTMLElement): void => {
    const parentElement = nativeElement.parentElement
    if (!parentElement || !parentElement.insertBefore) return
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement)
    }
    parentElement.removeChild(nativeElement)
}
function isImage(name?: string): boolean {
    return name ? name.indexOf('/') !== -1 : false;
}
function isNumeric(val: string): boolean {
    return /^\d+(\.\d+)?$/.test(val);
}
function isDef<T>(val: T): val is NonNullable<T> {
    return val !== undefined && val !== null;
}
function addUnit(value?: string | number): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumeric(value) ? `${value}px` : value;
}
@Component({
    selector: 'van-icon',
    templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
    @Output() readonly click = new EventEmitter<MouseEvent>();
    @Input() isLeftArrow: boolean = false
    @Input() dot: boolean = false
    @Input() color: string = ''
    @Input() classPrefix: string = 'van-icon'
    @Input() nativeClassName: string = ''
    @Input() show: boolean = true
    private _name: string = '';
    @Input()
    get name(): string { return this._name; }
    set name(value: string) {
        this.imageIcon = isImage(value)
        this._name = value;
    }

    private _badge: number | string = '';
    @Input()
    get badge(): number | string { return this._badge; }
    set badge(value: number | string) {
        this.showInfo = isDef(value) && value !== '';
        this._badge = value;
    }

    private _size: number | string = '';
    @Input()
    get size(): number | string { return this._size; }
    set size(value: number | string) {
        this.fontSize = addUnit(value)
        this._size = value;
    }

    imageIcon = false;
    showInfo = false;
    fontSize: undefined | string = ''
    constructor(private el: ElementRef) { }
    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }
    onClick(event: MouseEvent): void {
        event.preventDefault()
        this.click.emit(event);
    }
}
