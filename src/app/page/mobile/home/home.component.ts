import { Component, OnDestroy, OnInit } from '@angular/core';
import { VantI18nService } from 'ngx-vant/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { navConfig, navEnConfig } from './config'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class MHomeComponent implements OnInit, OnDestroy {
    navConfig = navConfig
    private _unSubject = new Subject<void>();
    constructor(
        private vantI18n: VantI18nService,
    ) { }
    ngOnInit() {
        this.vantI18n.localeChange
            .pipe(
                takeUntil(this._unSubject)
            ).subscribe(({ locale }) => {
                console.log(locale)
                this.navConfig = locale === 'en_US' ? navEnConfig : navConfig
            })
    }
    ngOnDestroy() {
        this._unSubject.next();
        this._unSubject.unsubscribe();
    }
}
