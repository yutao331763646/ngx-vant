import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VantI18nProperty, VANT_I18N } from './i18n.prop';
import zh_CN from './languages/zh_CN';

@Injectable({
    providedIn: 'root'
})
export class VantI18nService {
    private _locale!: VantI18nProperty;
    private _change = new BehaviorSubject<VantI18nProperty>(zh_CN);
    get localeChange(): Observable<VantI18nProperty> {
        console.log('get')
        return this._change.asObservable()
    }
    constructor(
        @Optional() @Inject(VANT_I18N) locale: VantI18nProperty
    ) {
        this.setLocale(locale || zh_CN);
    }
    translate(path: string, data?: any) {
        let content = this._getObjectPath(this._locale, path) as string;
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((key) => (content = content.replace(new RegExp(`%${key}%`, 'g'), data[key])));
            }
            return content;
        }
        return path;
    }
    getLocale(): VantI18nProperty {
        return this._locale;
    }
    getLocaleId(): string {
        return this._locale ? this._locale.locale : '';
    }

    setLocale(locale: VantI18nProperty, forceRefresh = false) {
        if (!forceRefresh && this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        console.log(locale)
        this._change.next(locale);
    }

    private _getObjectPath(obj: { [key: string]: any }, path: string): string | object | any {
        let res = obj;
        const paths = path.split('.');
        const depth = paths.length;
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }

}
