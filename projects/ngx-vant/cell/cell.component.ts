import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'van-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.less']
})
export class CellComponent implements OnInit {
    @Input() center: boolean = false;
    @Input() icon: string = '';
    @Input() label: string = '';
    @Input() size: string = '';
    @Input() border: boolean = false;
    @Input() isLink: boolean = false;
    @Input() required: boolean = false;
    @Input() clickable: boolean = false;
    @Input() iconPrefix: string = '';
    @Input() titleStyle: { [klass: string]: any } = {};
    @Input() titleClass: string = '';
    @Input() valueClass: string = '';
    @Input() labelClass: string = '';
    @Input() title: string | number = '';
    @Input() value: string | number = '';
    @Input() arrowDirection: 'up' | 'down' | 'left' | 'right' |'' = '';
    constructor() { }
    
    ngOnInit() {
    }

}
