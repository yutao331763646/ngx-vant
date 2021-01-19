import { Component, EventEmitter, Input, Output } from '@angular/core';

export type RowType = 'flex' | ''
export type RowAlign = 'top' | 'center' | 'bottom';
export type RowJustify =
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.less']
})
export class RowComponent {
    @Input() type: RowType = ''
    @Input() justify: RowJustify = 'start'
    @Input() align: RowAlign = 'top'
    @Input() gutter: string | number = ''
    @Output() readonly click = new EventEmitter<MouseEvent>();
    constructor() { }
    onClick(e: MouseEvent): void {
        this.click.emit(e);
    }
}
