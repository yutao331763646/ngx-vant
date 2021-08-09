import { InjectionToken } from "@angular/core";

export interface VantI18nProperty {
    locale: string;
    [property: string]: any;
}
export interface VantI18nComment {
    comments?: string
    giveALike?: string
    reply?: string
    more?: string
}
export const VANT_I18N = new InjectionToken<VantI18nProperty>('vant-i18n');