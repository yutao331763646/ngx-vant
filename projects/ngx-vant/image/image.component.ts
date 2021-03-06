import { Component, Input, OnInit } from '@angular/core';
import { addUnit } from '../utils';

export type ImgageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

@Component({
    selector: 'van-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {

    @Input()
    get width(): number | string { return this._width; }
    set width(value: number | string) {
        const w = addUnit(value) as string;
        this._width = w;
    }
    private _width: number | string = '';

    @Input()
    get height(): number | string { return this._height; }
    set height(value: number | string) {
        const h = addUnit(value) as string;
        this._height = h;
    }
    private _height: number | string = '';


    @Input() radius: number | string = '';
    @Input() round: boolean = false;
    @Input() src: string = '';
    @Input() showLoading: boolean = false;
    @Input() loadingIcon: string = 'photo';
    @Input() loadingIconColor: string = '#dcdee0';
    @Input() loadingIconSize: number | string = '32';
    @Input() showError: boolean = false;
    @Input() errorIcon: string = 'photo-fail';
    @Input() fit: ImgageFit = 'fill';
    @Input() alt: string = '';
    constructor() { }
    ngOnInit() {
    }

}
