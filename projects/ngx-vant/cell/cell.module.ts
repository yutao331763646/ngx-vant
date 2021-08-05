import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { IconModule } from 'ngx-vant/icon';
import { DirectiveModule } from 'ngx-vant/directive';

@NgModule({
    imports: [
        CommonModule, IconModule, DirectiveModule
    ],
    exports: [CellComponent],
    declarations: [CellComponent]
})
export class CelModule { }
