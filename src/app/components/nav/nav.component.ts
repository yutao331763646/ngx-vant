import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { en_US, VantI18nService, zh_CN } from 'ngx-vant/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { navConfig, navEnConfig } from './config'

@Component({
    selector: 'vant-doc-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit, OnDestroy {
    navConfig = navConfig
    private _unSubject = new Subject<void>();
    constructor(
        private vantI18n: VantI18nService,
        private router: Router
    ) { 
        //    this.router.events.subscribe((event: any) => {
        //             // console.log(event)
        //             if (event instanceof NavigationEnd) {
        //                 const host = window.location.href.split('/#/')
        //                 console.log(host[1].split('/')[0])
        //                 const lang = host[1].split('/')[0] !== 'en_US' ? en_US : zh_CN
        //                 this.vantI18n.setLocale(lang);
        //             }
        //         })
    }
    lang = 'zh_CN'
    nav = ''
    ngOnInit() {
        this.vantI18n.localeChange
            .pipe(
                takeUntil(this._unSubject)
            ).subscribe(({ locale }) => {
                console.log(locale)
                this.navConfig = locale === 'en_US' ? navEnConfig : navConfig
                const host = window.location.href.split('/#/')
                const path = host[1].replace(this.lang, locale)
                this.lang = locale
                this.router.navigateByUrl(`/${path}`);



                
            })

             
    }
    ngOnDestroy() {
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
