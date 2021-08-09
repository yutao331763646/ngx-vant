import { Component, OnInit } from '@angular/core';
import { en_US, VantI18nService, zh_CN } from 'ngx-vant/i18n';

@Component({
    selector: 'vant-doc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    lang = 'En'
    constructor(private vantI18n: VantI18nService) { }

    ngOnInit() {
    }
    onSwitchLang() {

        this.lang = this.lang === 'En' ? '中文' : 'En'
        const lang = this.lang === 'En' ? en_US : zh_CN
        this.vantI18n.setLocale(lang);

    }
}
