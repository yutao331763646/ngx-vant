import { ModuleWithProviders, NgModule } from '@angular/core';

import {IconModule} from './icon/icon.module';
import {ButtonModule} from './button/button.module';
import {LoadingModule} from './loading/loading.module'
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ImageModule } from './image/image.module';
import { RowModule } from './row/row.module';
import { ColModule } from './col/col.module';
import { ToastModule } from './toast/toast.module';
import { ProgressModule } from './progress/progress.module';

export * from './icon/icon.module';
export * from './button/button.module';
export * from './loading/loading.module';
export * from './nav-bar/nav-bar.module';
export * from './image/image.module';
export * from './row/row.module';
export * from './col/col.module';
export * from './toast/toast.module';
export * from './progress/progress.module';
@NgModule({
    imports: [],
    exports: [
        IconModule,ButtonModule,LoadingModule,
        NavBarModule,ImageModule,RowModule,ColModule,
        ToastModule,ProgressModule
    ],
    declarations: []
  })
  export class NgxVantModule {
    static forRoot(): ModuleWithProviders<NgxVantModule> {
      return {
        ngModule: NgxVantModule,
      };
    }
  }
  