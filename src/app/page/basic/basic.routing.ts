import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { HomeComponent } from "./home/home.component";
import { IconComponent } from "./icon/icon.component";
import { ImageComponent } from "./image/image.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoadingComponent } from "./loading/loading.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ProgressComponent } from "./progress/progress.component";
import { QuickstartComponent } from "./quickstart/quickstart.component";
import { ToastComponent } from "./toast/toast.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path: 'quickstart',
        component: QuickstartComponent
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
];

export const BasicRoutes = RouterModule.forChild(routes);
@NgModule({
    imports: [BasicRoutes],
    exports: [RouterModule],
})
export class BasicRoutingModule {
}
