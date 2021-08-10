import { NgModule } from '@angular/core';
import { SafePipe } from 'src/app/common/pipe/sage.pipe';
import { DocComponent } from 'src/app/components/doc/doc.component';

@NgModule({
    imports: [],
    declarations: [DocComponent, SafePipe],
    exports: [DocComponent, SafePipe],
})
export class DocSharedModule { }
