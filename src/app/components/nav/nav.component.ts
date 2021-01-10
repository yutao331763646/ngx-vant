import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navConfig } from './config'
@Component({
    selector: 'vant-doc-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
    readonly navConfig = navConfig
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }
    toPath(nav: any): void {
        console.log(nav)
        const { path } = nav
        this.router.navigateByUrl(`/basic/${path}`);
    }
}
