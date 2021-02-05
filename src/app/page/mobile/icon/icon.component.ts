import { Component, OnInit } from '@angular/core';
import { icons } from './config';
@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {
    icons = icons
    constructor() { }

    ngOnInit() {
        console.log(icons)
    }

}
