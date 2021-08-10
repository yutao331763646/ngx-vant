import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VantI18nService } from 'ngx-vant/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { navConfig } from './config'
@Component({
    selector: 'vant-doc-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
    readonly navConfig = navConfig
    private _unSubject = new Subject<void>();
    constructor(
        private vantI18n: VantI18nService,
        private router: Router
    ) { }
    lang = 'zh_CN'
    nav = ''
    ngOnInit() {
        this.vantI18n.localeChange
        .pipe(
            takeUntil(this._unSubject)
        ).subscribe(({ locale }) => {
            console.log(locale)
            const host = window.location.href.split('/#/')
            console.log(host)
            const path = host[1].replace(this.lang, locale)
            console.log(path)
            this.lang = locale
            this.router.navigateByUrl(`/${path}`);
        })
    }
    ngOnDestory() {
        this._unSubject.next();
        this._unSubject.unsubscribe();
    }
    toPath(nav: any): void {
        console.log(nav)
        const { path } = nav
        this.nav = path
        this.router.navigateByUrl(`/${this.lang}/${path}`);
    }
}
