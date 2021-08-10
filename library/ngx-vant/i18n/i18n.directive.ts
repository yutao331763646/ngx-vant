import { Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { VantI18nService } from './i18n.service';
import { takeUntil } from 'rxjs/operators';

// 值改变判断
export const VantIsChange = (...changes: SimpleChange[]) => {
    for (let change of changes) {
        if (change?.currentValue !== change?.previousValue) return true;
    }
    return false;
};
@Directive({
    selector: '[vant-i18n]'
})
export class VantI18nDirective implements OnChanges, OnDestroy {
    @Input('vant-i18n') path!: string;
    private _unSubject = new Subject<void>();
    constructor(
        private locale: VantI18nService,
        private elementRef: ElementRef
    ) {
        this.locale.localeChange.pipe(takeUntil(this._unSubject)).subscribe(() => this.setLocale());
    }

    ngOnDestroy(): void {
        this._unSubject.next();
        this._unSubject.complete();
    }
    ngOnChanges(changes: SimpleChanges): void {
        VantIsChange(changes.path) && this.setLocale();
    }
    setLocale() {
        if (typeof this.path !== 'undefined') {
            const content = this.locale.translate(this.path);
            this.elementRef.nativeElement.innerText = content;
        }
    }
}
