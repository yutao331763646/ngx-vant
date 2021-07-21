import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import * as hljs from 'highlight.js/lib/core';

@Component({
    selector: 'vant-pc-doc',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.less']
})
export class DocComponent implements OnChanges {
    @Input() readMe: HTMLElement | string = '';
    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.readMe.currentValue) {
            this.refreshView();
        }
    }
    refreshView() {
        setTimeout(() => {
            Array.from<HTMLElement>(document.querySelectorAll('pre code')).forEach((block) => {
                hljs.highlightBlock(block);
            });
        })
    }
}
