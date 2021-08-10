import { Component, OnInit } from '@angular/core';
import { VantI18nService } from 'ngx-vant/i18n';
import { navConfig } from './config'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    readonly  navConfig = navConfig
    constructor(
        private vantI18n: VantI18nService,
    ) { }

    ngOnInit() {
    }

}
