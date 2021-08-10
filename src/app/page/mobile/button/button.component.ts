import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { en_US, VantI18nService, zh_CN } from 'ngx-vant/i18n';
import { Subject } from 'rxjs';

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
