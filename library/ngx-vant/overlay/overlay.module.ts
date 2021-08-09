import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [OverlayComponent],
    declarations: [OverlayComponent]
})
export class OverlayModule { }
