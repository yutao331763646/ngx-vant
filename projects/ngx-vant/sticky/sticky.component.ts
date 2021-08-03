import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { getElementTop, getScroller, getScrollTop } from '../utils';

@Component({
    selector: 'van-sticky',
    templateUrl: './sticky.component.html',
})
export class StickyComponent implements OnInit, OnDestroy {
    @Input() offsetTop: number = 0
    scroller: any = null
    subscribeScoll$: Subscription = Subscription.EMPTY
    fixed: boolean = false
    constructor(private el: ElementRef) {
        if (!this.scroller) {
            console.log(this.el)
            this.scroller = getScroller(this.el.nativeElement);
            console.log(this.scroller)
            this.subscribeScoll$ = fromEvent(this.scroller, 'scroll')
                .subscribe((event) => {
                    const scrollTop = getScrollTop(window);
                    const topToPageTop = getElementTop(this.el.nativeElement);
                    console.log(event)
                    if (scrollTop + this.offsetTop > topToPageTop) {
                        this.fixed = true;
                    } else {
                        this.fixed = false;
                    }
                });
        }
    }

    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscribeScoll$.unsubscribe();
    }
}
