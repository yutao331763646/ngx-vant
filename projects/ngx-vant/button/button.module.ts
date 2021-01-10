import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LoadingModule } from '../loading/loading.module';
import { IconModule } from '../icon/icon.module';
@NgModule({
  imports: [
    CommonModule,LoadingModule,IconModule
  ],
  exports:[ButtonComponent],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
