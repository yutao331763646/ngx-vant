import { Pipe, PipeTransform } from '@angular/core';
import { VantI18nService } from './i18n.service';

@Pipe({
  name: 'vantI18n'
})
export class I18nPipe implements PipeTransform {
    private localeId: any;
    private catchContent: any;
    constructor(private locale: VantI18nService) {}
  
  transform(value: any, args?: any): any {
    return null;
  }

}
