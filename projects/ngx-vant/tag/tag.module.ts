import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
    imports: [
        CommonModule, IconModule
    ],
    exports: [TagComponent],
    declarations: [TagComponent]
})
export class TagModule { }
