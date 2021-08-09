import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from './i18n.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
      I18nPipe
   ]
})
export class I18nModule { }
