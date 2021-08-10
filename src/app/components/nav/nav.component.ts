import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VantI18nService } from 'ngx-vant/i18n';
import { navConfig } from './config'
@Component({
    selector: 'vant-doc-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
    readonly navConfig = navConfig
    constructor(
        private vantI18n: VantI18nService,
        private router: Router
    ) { }
    lang = 'zh_CN'
    nav = ''
    ngOnInit() {
        this.vantI18n.localeChange.subscribe(({ locale }) => {
            console.log(locale)
            const host = window.location.href.split('/#/')
            console.log(host)
            const path = host[1].replace(this.lang, locale)
            console.log(path)
            this.lang = locale
            this.router.navigateByUrl(`/${path}`);
        })
    }
    toPath(nav: any): void {
        console.log(nav)
        const { path } = nav
        this.nav = path
        this.router.navigateByUrl(`/${this.lang}/${path}`);
    }
}
