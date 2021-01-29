import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { OverlayModule } from '../overlay/overlay.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,OverlayModule,IconModule
  ],
  exports:[PopupComponent],
  declarations: [PopupComponent]
})
export class PopupModule { }
