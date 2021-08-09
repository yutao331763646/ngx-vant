import { Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { VantI18nService } from './i18n.service';
import { takeUntil } from 'rxjs/operators';
@Directive({
    selector: '[vant-i18n]'
})
export class VantI18nDirective implements OnChanges, OnDestroy {
    @Input('x-i18n') path!: string;
    private _unSubject = new Subject<void>();
    constructor(private locale: VantI18nService, private elementRef: ElementRef) {
        this.locale.localeChange.pipe(takeUntil(this._unSubject)).subscribe(() => this.setLocale());
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }
    setLocale() {
        if (typeof this.path !== 'undefined') {
            const content = this.locale.translate(this.path);
            this.elementRef.nativeElement.innerText = content;
        }
    }
}
