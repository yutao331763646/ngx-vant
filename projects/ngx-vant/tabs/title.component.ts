import { Component, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';

@Component({
    selector: '[van-tab-title]',
    styleUrls: ['./title.component.less'],
    template: `<span class="van-tab__text van-tab__text--ellipsis">{{title}}</span> `,
    host: {
        role: 'tab',
        class: 'van-tab van-tab--active',
        '(click)': 'handleClick($event)'
    }
})
export class TitleComponent implements OnInit {
    @Input() title: string = '';
    @Output() readonly onClick = new EventEmitter<MouseEvent>();

    constructor() {
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    handleClick(event: MouseEvent): void {
        this.onClick.emit(event)
    }

}
