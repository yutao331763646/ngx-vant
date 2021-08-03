import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'van-cell-group',
    templateUrl: './cell-group.component.html',
})
export class CellGroupComponent implements OnInit {
    @Input() title: string = '';
    @Input() border: boolean = true;
    constructor() { }

    ngOnInit() {
    }

}
