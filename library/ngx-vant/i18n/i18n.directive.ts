import { Directive, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[vant-i18n]'
})
export class VantI18nDirective implements OnChanges, OnDestroy {

    constructor() { }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

}
