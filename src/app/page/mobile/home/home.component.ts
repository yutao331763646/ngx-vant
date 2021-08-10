import { Component, OnDestroy, OnInit } from '@angular/core';
import { VantI18nService } from 'ngx-vant/i18n';
import { Subject } from 'rxjs';
import { navConfig } from './config'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit ,OnDestroy{
    navConfig = navConfig
    private _unSubject = new Subject<void>();
    constructor(
        private vantI18n: VantI18nService,
    ) { }
    

    ngOnInit() {
    }
    ngOnDestroy() {
        this._unSubject.next();
        this._unSubject.unsubscribe();
    }
}
