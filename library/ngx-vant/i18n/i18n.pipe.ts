import { Pipe, PipeTransform } from '@angular/core';
import { VantI18nService } from './i18n.service';

@Pipe({
    name: 'vantI18n',
    pure: false
})
export class VantI18nPipe implements PipeTransform {
    private localeId: any;
    private catchContent: any;
    constructor(private locale: VantI18nService) { }

    transform(path: string, keyValue?: object) {
        // console.log(path,keyValue)
        const localeId = this.locale.getLocaleId();
        const content = this.locale.translate(path, keyValue);
        // console.log(content)
        if (this.localeId !== localeId || this.catchContent !== content) {
            this.catchContent = content;
            this.localeId = localeId;
        }
        return this.catchContent;
    }

}
