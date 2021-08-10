import { Injectable } from '@angular/core';
import { VantI18nProperty, VantI18nService } from 'ngx-vant/i18n';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(
        private vantI18n: VantI18nService
    ) { }
    setLocale(locale: VantI18nProperty) {
        this.vantI18n.setLocale(locale, true)
    }
}
