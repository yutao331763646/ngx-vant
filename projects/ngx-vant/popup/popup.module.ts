import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { OverlayModule } from 'ngx-vant/overlay';
import { IconModule } from 'ngx-vant/icon';

@NgModule({
  imports: [
    CommonModule,OverlayModule,IconModule
  ],
  exports:[PopupComponent],
  declarations: [PopupComponent]
})
export class PopupModule { }
