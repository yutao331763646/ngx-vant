import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { HeaderComponent } from "src/app/components/header/header.component";
import { NavComponent } from "src/app/components/nav/nav.component";
import { SimulatorComponent } from "src/app/components/simulator/simulator.component";

import { IndexComponent } from "./index.component";
import { IndexRoutingModule } from "./index.routing";

@NgModule({
    declarations: [
        
      
    ],
    imports: [
        RouterModule,CommonModule,
        IndexRoutingModule,
    ],
    providers: [],
})
export class IndexModule { }
