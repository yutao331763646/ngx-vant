import { Component, Input, OnInit } from '@angular/core';
import { addUnit } from 'ngx-vant/utils';
export type LoadingType = 'spinner' | 'circular';

@Component({
  selector: 'van-loading',
  exportAs: 'vanLoading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  @Input() type: LoadingType = 'circular';
  @Input() color: string = '';
  @Input() textColor: string = '';
  @Input() vertical: boolean = false;
  @Input() isButton: boolean = false;

  @Input()
  get textSize(): number | string {
    return this._textSize;
  }
  set textSize(value: number | string) {
    const iconSize = addUnit(value) as string;
    this._textSize = iconSize;
  }
  private _textSize: number | string = '';

  @Input()
  get size(): number | string {
    return this._size;
  }
  set size(value: number | string) {
    const iconSize = addUnit(value) as string;
    this._size = iconSize;
  }
  private _size: number | string = '';

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {}
}
