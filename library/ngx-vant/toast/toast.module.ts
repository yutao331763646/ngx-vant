import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastServiceModule } from './toast.service.module';

@NgModule({
  imports: [
    CommonModule,ToastServiceModule
  ],
  exports:[ToastComponent],
  declarations: [ToastComponent]
})
export class ToastModule { }
