import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VantI18nService } from 'ngx-vant/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { navConfig, navEnConfig } from './config'

@Component({
    selector: 'vant-doc-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
    navConfig = navConfig
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
                this.navConfig = locale==='en_US'?navEnConfig:navConfig
                const host = window.location.href.split('/#/')
                const path = host[1].replace(this.lang, locale)
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
