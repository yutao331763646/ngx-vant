import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
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
