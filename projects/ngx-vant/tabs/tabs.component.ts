import { Component, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { addUnit, scrollLeftTo } from '../utils';
export type TabsType = 'line' | 'card';
@Component({
    selector: 'van-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
    @ContentChildren(TabComponent, { descendants: true }) allTabs: QueryList<TabComponent> = new QueryList<TabComponent>();
    // @ViewChildren('titleRef') titleRef!: QueryList<TitleComponent>;
    @ViewChild('navRef') navRef!: ElementRef<HTMLElement>;  
    @Input() ellipsis: boolean = true
    @Input() type: TabsType = 'line'
    @Input() color: string = '#ee0a24'
    @Input() background: string = 'white'
    @Input() animated: boolean = false
    @Input() duration: string = '0.3'
    @Input() border: boolean = false
    scrollable: boolean = false

    @Input()
    get swipeThreshold(): string | number { return this._swipeThreshold; }
    set swipeThreshold(value: string | number) {
        this.scrollable = this.allTabs.length > value
        console.log(this.allTabs)
        this._swipeThreshold = addUnit(value) as string;
    }
    private _swipeThreshold: string | number = '';



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
            const { offsetLeft, offsetWidth } = dom[0]
            const target = {
                currentTarget: { offsetLeft, offsetWidth }
            }
            this.currentChange(target, 0, false)
        })
    }
    ngAfterViewInit() {
    }
    ngAfterContentInit() {
        this.scrollable = this.allTabs.length > this.swipeThreshold
    }

    currentChange(currentTarget: any, index: number, bool: boolean) {
        const target = currentTarget.currentTarget
        const { offsetLeft, offsetWidth } = target
        this.lineLeft = offsetLeft + offsetWidth / 2;
        this.currentIndex = index
        if (bool) {
            this.scrollIntoView(offsetLeft, offsetWidth, false)
        }
    }
    // scroll active tab into view
    scrollIntoView(offsetLeft: any, offsetWidth: any, immediate: boolean) {
        console.log(this.navRef)
        // if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        //     return;
        // }
        const to = offsetLeft - (this.navRef.nativeElement.offsetWidth - offsetWidth) / 2;
        scrollLeftTo(this.navRef.nativeElement, to, immediate ? 0 : +this.duration);
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
