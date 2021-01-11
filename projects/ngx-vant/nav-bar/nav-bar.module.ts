import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,IconModule
  ],
  exports:[NavBarComponent],
  declarations: [NavBarComponent]
})
export class NavBarModule { }
