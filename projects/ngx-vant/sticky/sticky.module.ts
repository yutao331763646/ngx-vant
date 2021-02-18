import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyComponent } from './sticky.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [StickyComponent],
    declarations: [StickyComponent]
})
export class StickyModule { }
