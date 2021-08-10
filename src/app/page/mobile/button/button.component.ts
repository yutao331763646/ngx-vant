import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { en_US, VantI18nService, zh_CN } from 'ngx-vant/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
    private _unSubject = new Subject<void>();
    constructor(
        private router: Router,
        private vantI18n: VantI18nService,
    ) {
        this.router.events.subscribe((event: any) => {
            // console.log(event)
            if (event instanceof NavigationEnd) {
                // const host = window.location.href.split('/#/')
                // console.log(host[1].split('/')[0])
                // const lang = host[1].split('/')[0] !== 'en_US' ? en_US : zh_CN
                // this.vantI18n.setLocale(lang);
            }
        })
    }

    ngOnInit() {
        this.vantI18n.localeChange.pipe(
            takeUntil(this._unSubject)
        ).subscribe(res => {
            console.log(res)
        })
    }
    ngOnDestroy() {
        this._unSubject.next();
        this._unSubject.unsubscribe();
    }
}
