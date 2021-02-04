import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { addUnit } from '../utils';
import { TitleComponent } from './title.component';
import { delay, filter, first, startWith, takeUntil } from 'rxjs/operators';
export type TabsType = 'line' | 'card';
@Component({
    selector: 'van-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
    @ContentChildren(TabComponent, { descendants: true }) allTabs: QueryList<TabComponent> = new QueryList<TabComponent>();
    @ViewChildren('titleRef') titleRef!: QueryList<TitleComponent>;


    @Input() swipeThreshold: number | string = 5
    @Input() ellipsis: boolean = true
    @Input() type: TabsType = 'line'
    @Input() color: string = '#ee0a24'
    @Input() background: string = 'white'
    @Input() animated: boolean = false
    @Input() duration: string = '0.3'
    @Input() border: boolean = false

    @Input()
    get lineWidth(): string | number { return this._lineWidth; }
    set lineWidth(value: string | number) {
        this._lineWidth = addUnit(value) as string;
    }
    private _lineWidth: string | number = '';

    @Input()
    get lineHeight(): string | number { return this._lineHeight; }
    set lineHeight(value: string | number) {
        this._lineHeight = addUnit(value) as string;
    }
    private _lineHeight: string | number = '';

    lineLeft: string = ''

    currentIndex: number = 0
    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            const dom: any = document.getElementsByClassName('van-tab')
            console.log(dom[0].offsetWidth)
            const { offsetLeft, offsetWidth } = dom[0]
            const target = {
                currentTarget: { offsetLeft, offsetWidth }
            }
            this.currentChange(target, 0)
        })
    }
    ngAfterViewInit() {
    }
    ngAfterContentInit() {
      
    }

    currentChange(currentTarget: any, index: number) {
        const target = currentTarget.currentTarget
        const { offsetLeft, offsetWidth } = target
        this.lineLeft = offsetLeft + offsetWidth / 2;
        this.currentIndex = index
    }
}


@Component({
    selector: '[tab-body]',
    template: `
      <ng-container *ngIf="active ">
        <ng-template [ngTemplateOutlet]="content"></ng-template>
      </ng-container>
    `,
    host: {
        class: 'van-tab__pane',
        role: 'tabpanel'
    }
})
export class TabBodyComponent {
    @Input() content: TemplateRef<void> | null = null;
    @Input() active = false;
}
