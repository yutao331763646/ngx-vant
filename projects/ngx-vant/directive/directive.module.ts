import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vanTemplateOutletDirective } from './string_template_outlet.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[vanTemplateOutletDirective],
  declarations: [vanTemplateOutletDirective]
})
export class DirectiveModule { }
