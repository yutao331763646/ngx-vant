import { Component, ElementRef, EventEmitter, Host, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { removeNgTag } from '../utils';
export function isNotNil<T>(value: T): value is NonNullable<T> {
    return typeof value !== 'undefined' && value !== null;
}
@Component({
    selector: 'van-col',
    templateUrl: './col.component.html',
    styleUrls: ['./col.component.less']
})
export class ColComponent implements OnInit, OnChanges {
    classMap: { [key: string]: boolean } = {};
    @Input() span: number | string = '';
    @Input() offset: number | string = '';
    paddingLeft: string | null = ''
    paddingRight: string | null = ''
    @Output() readonly click = new EventEmitter<MouseEvent>();
    constructor(
        private elementRef: ElementRef,
        public renderer: Renderer2,
    ) { }
  
    ngOnInit() {
        removeNgTag(this.elementRef.nativeElement)
        this.setHostClassMap();
    }
    ngOnChanges(): void {
        this.setHostClassMap();
    }
    onClick(e: MouseEvent): void {
        this.click.emit(e);
    }
    setGutter(space: any) {
        console.log(space)
        if (space) {
            const { left, right } = space;
            console.log(left, right)
            this.paddingLeft = left ? `${left}px` : null
            this.paddingRight = right ? `${right}px` : null
        }
    }
    setHostClassMap(): void {
        const hostClassMap = {
            ['van-col']: true,
            [`van-col--${this.span}`]: isNotNil(this.span),
            [`van-col--offset-${this.offset}`]: isNotNil(this.offset),
        };
        // for (const i in this.classMap) {
        //     if (this.classMap.hasOwnProperty(i)) {
        //         this.renderer.removeClass(this.elementRef.nativeElement, i);
        //     }
        // }
        this.classMap = { ...hostClassMap };
        // for (const i in this.classMap) {
        //     if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
        //         this.renderer.addClass(this.elementRef.nativeElement, i);
        //     }
        // }
    }
}
