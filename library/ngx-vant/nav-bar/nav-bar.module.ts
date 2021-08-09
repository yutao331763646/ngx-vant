import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { IconModule } from 'ngx-vant/icon';

@NgModule({
  imports: [
    CommonModule,IconModule
  ],
  exports:[NavBarComponent],
  declarations: [NavBarComponent]
})
export class NavBarModule { }
