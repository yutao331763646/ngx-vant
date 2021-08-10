import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { en_US, VantI18nService, zh_CN } from 'ngx-vant/i18n';
import { pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'vant-doc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    lang = 'En'
    private _unSubject = new Subject<void>();
    constructor(
        public cdr: ChangeDetectorRef,
        private vantI18n: VantI18nService
        ) { }

    ngOnInit() {
    }
    onSwitchLang() {

        this.lang = this.lang === 'En' ? '中文' : 'En'
        const lang = this.lang === 'En' ? en_US : zh_CN
        this.vantI18n.setLocale(lang,true);
        this.cdr.markForCheck();
        // this.vantI18n.localeChange.pipe(
        //     takeUntil(this._unSubject)
        //     )
        //     .subscribe(() => {
        //         console.log('change')
        //         this.cdr.markForCheck()
        //     });
    }
}
