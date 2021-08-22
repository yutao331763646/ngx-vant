import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { StickyComponent } from "./sticky/sticky.component";
import { ButtonComponent } from "./button/button.component";
import { CellComponent } from "./cell/cell.component";
import { FieldComponent } from "./field/field.component";
import { HomeComponent } from "./home/home.component";
import { IconComponent } from "./icon/icon.component";
import { ImageComponent } from "./image/image.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoadingComponent } from "./loading/loading.component";
// import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NotifyComponent } from "./notify/notify.component";
// import { OverlayComponent } from "./overlay/overlay.component";
// import { PopupComponent } from "./popup/popup.component";
// import { ProgressComponent } from "./progress/progress.component";
import { QuickstartComponent } from "./quickstart/quickstart.component";
// import { TabsComponent } from "./tabs/tabs.component";
// import { TagComponent } from "./tag/tag.component";
// import { ToastComponent } from "./toast/toast.component";
import { PickerComponent } from "./picker/picker.component";
import { ThemeComponent } from "./theme/theme.component";
// import { ContributionComponent } from "./contribution/contribution.component";
// import { DesignComponent } from "./design/design.component";
// import { StyleGuideComponent } from "./style-guide/style-guide.component";
import { LocaleComponent } from "./locale/locale.component";

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
        path: 'theme',
        component: ThemeComponent
    },
    // {
    //     path: 'contribution',
    //     component: ContributionComponent
    // },
    // {
    //     path: 'design',
    //     component: DesignComponent
    // },
    // {
    //     path: 'style-guide',
    //     component: StyleGuideComponent
    // },
    {
        path: 'locale',
        component: LocaleComponent
    },
    {
        path: 'button',
        component: ButtonComponent
    },
    {
        path: 'icon',
        component: IconComponent
    },
    {
        path: 'loading',
        component: LoadingComponent
    },
    //  {
    //     path: 'nav-bar',
    //     component: NavBarComponent
    // }, 
    {
        path: 'image',
        component: ImageComponent
    },
    {
        path: 'layout',
        component: LayoutComponent
    },
    // {
    //     path: 'toast',
    //     component: ToastComponent
    // }, {
    //     path: 'progress',
    //     component: ProgressComponent
    // }, 
    {
        path: 'cell',
        component: CellComponent
    },
    {
        path: 'field',
        component: FieldComponent
    },
    // {
    //     path: 'overlay',
    //     component: OverlayComponent
    // }, {
    //     path: 'popup',
    //     component: PopupComponent
    // }, {
    //     path: 'tab',
    //     component: TabsComponent
    // },
    {
        path: 'notify',
        component: NotifyComponent
    },
    // {
    //     path: 'tag',
    //     component: TagComponent
    // }, {
    //     path: 'sticky',
    //     component: StickyComponent
    // }, 
    {
        path: 'picker',
        component: PickerComponent
    }
];

export const BasicRoutes = RouterModule.forChild(routes);
@NgModule({
    imports: [BasicRoutes],
    exports: [RouterModule],
})
export class EnRoutingModule {
}
