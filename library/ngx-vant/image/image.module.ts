import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { IconModule } from 'ngx-vant/icon';

@NgModule({
    imports: [
        CommonModule,IconModule
    ],
    exports: [ImageComponent],
    declarations: [ImageComponent]
})
export class ImageModule { }
