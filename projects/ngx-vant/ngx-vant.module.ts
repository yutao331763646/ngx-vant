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
import { CellModule } from './cell/index.module';
import { FieldModule } from './field/field.module';
import { OverlayModule } from './overlay/overlay.module';
import { PopupModule } from './popup/popup.module';
import { TabsModule } from './tabs/index.module';
import { NotifyModule } from './notify/notify.module';
import { TagModule } from './tag/tag.module';
import { StickyModule } from './sticky/sticky.module';
import { DirectiveModule } from './directive/directive.module';
import { PickerModule } from './picker/picker.module';

export * from './icon/icon.module';
export * from './button/button.module';
export * from './loading/loading.module';
export * from './nav-bar/nav-bar.module';
export * from './image/image.module';
export * from './row/row.module';
export * from './col/col.module';
export * from './toast/toast.module';
export * from './progress/progress.module';
export * from './cell/index.module';
export * from './field/field.module';
export * from './overlay/overlay.module';
export * from './popup/popup.module';
export * from './tabs/index.module';
export * from './notify/notify.module';
export * from './tag/tag.module';
export * from './sticky/sticky.module';
export * from './directive/directive.module';
export * from './picker/picker.module';
@NgModule({
    imports: [DirectiveModule],
    exports: [
        IconModule,ButtonModule,LoadingModule,
        NavBarModule,ImageModule,RowModule,ColModule,
        ToastModule,ProgressModule,CellModule,FieldModule,
        OverlayModule,PopupModule,TabsModule,NotifyModule,
        TagModule,StickyModule,DirectiveModule,PickerModule
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
  