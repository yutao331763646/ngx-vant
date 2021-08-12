import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import en_US from 'src/app/common/i18n/languages/en_US';
import zh_CN from 'src/app/common/i18n/languages/zh_CN';
import { ConfigService } from 'src/app/common/services';

@Component({
    selector: 'vant-doc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    lang = 'En'
    constructor(
        public cdr: ChangeDetectorRef,
        private vantI18n: ConfigService,
    ) { }

    ngOnInit() {
    }
    onSwitchLang() {
        this.lang = this.lang === 'En' ? '中文' : 'En'
        const lang = this.lang !== 'En' ? en_US : zh_CN
        this.vantI18n.setLocale(lang);
    }
}
