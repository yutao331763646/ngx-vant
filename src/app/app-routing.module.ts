import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './page/mobile/button/button.component';
import { CellComponent } from './page/mobile/cell/cell.component';
import { FieldComponent } from './page/mobile/field/field.component';
import { MHomeComponent } from './page/mobile/home/home.component';
import { IconComponent } from './page/mobile/icon/icon.component';
import { ImageComponent } from './page/mobile/image/image.component';
import { LayoutComponent } from './page/mobile/layout/layout.component';
import { LoadingComponent } from './page/mobile/loading/loading.component';
import { MobileComponent } from './page/mobile/mobile.component';
import { NavBarComponent } from './page/mobile/nav-bar/nav-bar.component';
import { NotifyComponent } from './page/mobile/notify/notify.component';
import { OverlayComponent } from './page/mobile/overlay/overlay.component';
import { PickerComponent } from './page/mobile/picker/picker.component';
import { PopupComponent } from './page/mobile/popup/popup.component';
import { ProgressComponent } from './page/mobile/progress/progress.component';
import { StickyComponent } from './page/mobile/sticky/sticky.component';
import { TabsComponent } from './page/mobile/tabs/tabs.component';
import { TagComponent } from './page/mobile/tag/tag.component';
import { ToastComponent } from './page/mobile/toast/toast.component';




const M_PATH = [
    {
        path: 'home',
        component: MHomeComponent
    },
    {
        path: 'button',
        component: ButtonComponent
    },
    {
        path: 'icon',
        component: IconComponent
    }, {
        path: 'loading',
        component: LoadingComponent
    }, {
        path: 'nav-bar',
        component: NavBarComponent
    }, {
        path: 'image',
        component: ImageComponent
    }, {
        path: 'layout',
        component: LayoutComponent
    }, {
        path: 'toast',
        component: ToastComponent
    }, {
        path: 'progress',
        component: ProgressComponent
    }
    , {
        path: 'cell',
        component: CellComponent
    }, {
        path: 'field',
        component: FieldComponent
    }, {
        path: 'overlay',
        component: OverlayComponent
    }, {
        path: 'popup',
        component: PopupComponent
    }, {
        path: 'tab',
        component: TabsComponent
    }, {
        path: 'notify',
        component: NotifyComponent
    }, {
        path: 'tag',
        component: TagComponent
    }, {
        path: 'sticky',
        component: StickyComponent
    }, {
        path: 'picker',
        component: PickerComponent
    }
]
const routes: Routes = [
    {
        path: '', loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)
    }
    , {
        path: 'zh_CN',
        loadChildren: () => import('./page/zh_CN/basic.module').then(m => m.BasicModule)
    },
    {
        path: 'en_US',
        loadChildren: () => import('./page/en_US/en_US.module').then(m => m.En_USModule)
    },
    {
        path: 'zh_CN/mobile',
        component: MobileComponent,
        children: [
            {
                path: '', redirectTo: '/zh_CN/mobile/home', pathMatch: 'full'
            },
            ...M_PATH
        ]
    },
    {
        path: 'en_US/mobile',
        component: MobileComponent,
        children: [
            {
                path: '', redirectTo: '/en_US/mobile/home', pathMatch: 'full'
            },
            ...M_PATH
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
