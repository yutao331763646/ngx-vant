import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonComponent } from "../basic/button/button.component";
import { IndexComponent } from "./index.component";

const routes: Routes = [
    {
        path: '', component: IndexComponent,
        children: [
            { path: '', redirectTo: '/basic/button', pathMatch: 'full' },
            {
                path: 'basic',
                loadChildren: () => import('../basic/basic.module').then(m => m.BasicModule)
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
