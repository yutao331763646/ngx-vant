import { AfterContentInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { ColComponent } from '../col/col.component';
import { removeNgTag } from '../utils';

export type RowType = 'flex' | ''
export type RowAlign = 'top' | 'center' | 'bottom';
export type RowJustify =
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between';

@Component({
    selector: 'van-row',
    templateUrl: './row.component.html',
})
export class RowComponent implements OnInit, AfterContentInit {
    @ContentChildren(ColComponent) clos: QueryList<ColComponent> | undefined;
    @Input() type: RowType = ''
    @Input() justify: RowJustify = 'start'
    @Input() align: RowAlign = 'top'
    @Input() gutter: string | number = ''
    @Output() readonly click = new EventEmitter<MouseEvent>();
    constructor(private el: ElementRef) { }
    onClick(e: MouseEvent): void {
        this.click.emit(e);
    }
    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }
    ngAfterContentInit() {
        console.log(this.clos);
        const gutter = Number(this.gutter);
        const spaces: any = [];
        const groups: number[][] = [[]];

        let totalSpan = 0;
        this.clos?.forEach((item, index) => {
            totalSpan += Number(item.span);

            if (totalSpan > 24) {
                groups.push([index]);
                totalSpan -= 24;
            } else {
                groups[groups.length - 1].push(index);
            }
        })
        groups.forEach((group: number[]) => {
            const averagePadding = (gutter * (group.length - 1)) / group.length;

            group.forEach((item: number, index: number) => {
                if (index === 0) {
                    spaces.push({ right: averagePadding });
                } else {
                    const left = gutter - spaces[item - 1].right;
                    const right = averagePadding - left;
                    spaces.push({ left, right });
                }
            });
        });
        this.clos?.forEach((item, index) => {
            item.setGutter(spaces[index])
        })
        console.log(spaces)
    }
}
