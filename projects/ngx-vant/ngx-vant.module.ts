import { ModuleWithProviders, NgModule } from '@angular/core';

import {IconModule} from './icon/icon.module';
import {ButtonModule} from './button/button.module';
import {LoadingModule} from './loading/loading.module'
import { NavBarModule } from './nav-bar/nav-bar.module';

export * from './icon/icon.module';
export * from './button/button.module';
export * from './loading/loading.module';
export * from './nav-bar/nav-bar.module';
@NgModule({
    imports: [],
    exports: [
        IconModule,ButtonModule,LoadingModule,
        NavBarModule
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
  