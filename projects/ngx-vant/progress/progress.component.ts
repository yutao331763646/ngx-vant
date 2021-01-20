import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { removeNgTag } from '../utils';
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
    selector: 'van-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
    @ViewChild("pro", { static: true }) pro!: ElementRef<HTMLDivElement>;
    @ViewChild("pivot", { static: true }) pivot!: ElementRef<HTMLDivElement>;
    progressWidth = ''
    pivotLeft = ''
    @Input() pivotText: string = ''
    @Input() color: string = '#1989fa'
    @Input() inactive: boolean = false
    @Input() textColor: string = 'white'
    @Input() pivotColor: string = ''
    @Input() trackColor: string = '#e5e5e5'
    @Input() showPivot: boolean = true

    @Input()
    get percentage(): number { return this._percentage; }
    set percentage(value: number) {
        this._percentage = value;
    }
    private _percentage: number = 0;


    @Input()
    get strokeWidth(): number | string { return this._strokeWidth; }
    set strokeWidth(value: number | string) {
        const width = addUnit(value) as string;
        this._strokeWidth = width;
    }
    private _strokeWidth: number | string = '4px';

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.percentage) {
            this.progressWidth = (this.pro.nativeElement.offsetWidth * this.percentage) / 100 + 'px'
            let pivotWidth = this.pivot.nativeElement.offsetWidth
            this.pivotLeft = `${((this.pro.nativeElement.offsetWidth - pivotWidth) * this.percentage) / 100}px`
        }
    }

}