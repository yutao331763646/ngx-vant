import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    templateUrl: './picker.component.html',
    styleUrls: ['./picker.component.less']
})
export class PickerComponent implements OnInit {
    columns = [
        // 第一列
        {
            values: ['周一', '周二', '周三', '周四', '周五'],
            defaultIndex: 2,
        },
        // 第二列
        {
            values: ['上午', '下午', '晚上'],
            defaultIndex: 1,
        },
    ]
    constructor() { }

    ngOnInit() {
    }

}
