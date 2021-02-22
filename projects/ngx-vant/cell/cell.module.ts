import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { IconModule } from '../icon/icon.module';
import { DirectiveModule } from '../directive/directive.module';

@NgModule({
    imports: [
        CommonModule, IconModule, DirectiveModule
    ],
    exports: [CellComponent],
    declarations: [CellComponent]
})
export class CelModule { }
