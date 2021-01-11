import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './page/mobile/button/button.component';
import { HomeComponent } from './page/mobile/home/home.component';
import { IconComponent } from './page/mobile/icon/icon.component';
import { LoadingComponent } from './page/mobile/loading/loading.component';
import { MobileComponent } from './page/mobile/mobile.component';
import { NavBarComponent } from './page/mobile/nav-bar/nav-bar.component';

const routes: Routes = [
    {
        path: '', loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)
    }
    , {
        path: 'basic',
        loadChildren: () => import('./page/basic/basic.module').then(m => m.BasicModule)
    },
    {
        path: 'mobile',
        component: MobileComponent,
        children: [
            {
                path: '', redirectTo: '/mobile/button', pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
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
            }
        ]
        // loadChildren: () => import('./page/mobile/mobile.module').then(m => m.MobileModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
