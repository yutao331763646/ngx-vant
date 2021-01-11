import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { HomeComponent } from "./home/home.component";
import { IconComponent } from "./icon/icon.component";
import { LoadingComponent } from "./loading/loading.component";
import { QuickstartComponent } from "./quickstart/quickstart.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path:'quickstart',
        component:QuickstartComponent
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
    }
];

export const BasicRoutes = RouterModule.forChild(routes);
@NgModule({
    imports: [BasicRoutes],
    exports: [RouterModule],
})
export class BasicRoutingModule {
}
