import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { OverlayModule } from '../overlay/overlay.module';

@NgModule({
  imports: [
    CommonModule,OverlayModule
  ],
  exports:[PopupComponent],
  declarations: [PopupComponent]
})
export class PopupModule { }
