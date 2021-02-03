import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { removeNgTag } from '../utils';

@Component({
    selector: 'van-tab-title',
    styleUrls: ['./title.component.less'],
    template: ` 
        <div
            *ngFor="let child of allTabs;let i=index"
            role="tab" 
            class="van-tab van-tab--active"
            (click)="clickTab($event)"
        >
            <span class="van-tab__text van-tab__text--ellipsis">{{child.title}}</span>
        </div>`
})
export class TitleComponent implements OnInit {
    @Input() allTabs: QueryList<TabComponent> = new QueryList<TabComponent>();
    @Output() readonly click = new EventEmitter<any>();
    currentIndex: number = 0
    constructor(private el: ElementRef) {
    }
    ngOnInit() {
        removeNgTag(this.el.nativeElement)
    }
    ngAfterViewInit(){
    }
    clickTab(e:any) {
        this.click.emit(e.currentTarget)
        // this.currentIndex = i
    }

}
