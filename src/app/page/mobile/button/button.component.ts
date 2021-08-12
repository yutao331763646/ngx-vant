import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {  VantI18nService } from 'ngx-vant/i18n';
import en_US from 'src/app/common/i18n/languages/en_US';
import zh_CN from 'src/app/common/i18n/languages/zh_CN';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
    constructor(
        private router: Router,
        private vantI18n: VantI18nService,
    ) {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                const host = window.location.href.split('/#/')
                console.log(host[1].split('/')[0])
                const lang = host[1].split('/')[0] !== 'en_US' ? en_US : zh_CN
                this.vantI18n.setLocale(lang);
            }
        })
    }

    ngOnInit() {
        
    }
    ngOnDestroy() {
    }
}
