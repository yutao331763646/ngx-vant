import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index.component";

const routes: Routes = [
    {
        path: '', component: IndexComponent,
        children: [
            { path: '', redirectTo: '/zh_CN/home', pathMatch: 'full' },
            {
                path: 'zh_CN',
                loadChildren: () => import('../zh_CN/basic.module').then(m => m.BasicModule)
            },
        ]
    },
];

export const BasicRoutes = RouterModule.forChild(routes);
@NgModule({
    imports: [BasicRoutes],
    exports: [RouterModule],
})
export class IndexRoutingModule {
}
