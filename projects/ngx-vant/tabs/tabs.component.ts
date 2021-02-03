import { Component, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { addUnit } from '../utils';
import { TitleComponent } from './title.component';
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
    // @Input() lineWidth: number | string = '40px'
    // @Input() lineHeight: number | string = '3px'
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

        // this.titleRef.changes.subscribe(res=>{
        //     console.log(res)
        // })
        //     console.log((this.titleRef))
    }
    ngAfterContentInit() {
        // this.children = this.allTabs.map((item, index) => {
        //     console.log(item.title)
        //     const { badge, disabled, dot, title,info, name, titleStyle, titleClass } = item
        //     return {
        //         badge, disabled, dot, info,title, name, titleStyle, titleClass
        //     }
        // })
    }
    currentChange(currentTarget: any, index: number) {
        const target = currentTarget.currentTarget
        const { offsetLeft, offsetWidth } = target
        this.lineLeft = offsetLeft + offsetWidth / 2;
        console.log(this.allTabs)
    }
}
