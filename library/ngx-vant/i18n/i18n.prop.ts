import { InjectionToken } from "@angular/core";

export interface VantI18nProperty {
    locale: string;
    [property: string]: any;
}

export const VANT_I18N = new InjectionToken<VantI18nProperty>('vant-i18n');