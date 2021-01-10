import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [LoadingComponent],
    declarations: [LoadingComponent]
})
export class LoadingModule { }
