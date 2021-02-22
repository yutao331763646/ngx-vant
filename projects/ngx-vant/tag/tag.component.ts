import { Component, Input, OnInit } from '@angular/core';
export type TagType = 'default' | 'primary' | 'success' | 'danger' | 'warning';
export type TagSize = 'large' | 'medium' | '';
@Component({
    selector: 'van-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
    @Input() type: TagType = 'default'
    @Input() size: TagSize = ''
    @Input() plain: boolean = false
    @Input() round: boolean = false
    @Input() color: string = ''
    @Input() mark: boolean = false
    @Input() textColor: string = ''
    @Input() closeable: boolean = false
    constructor() { }

    ngOnInit() {
    }

}
