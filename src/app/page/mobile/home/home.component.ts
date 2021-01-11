import { Component, OnInit } from '@angular/core';
import { navConfig } from './config'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    readonly  navConfig = navConfig
    constructor() { }

    ngOnInit() {
    }

}
