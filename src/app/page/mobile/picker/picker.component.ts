import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    templateUrl: './picker.component.html',
    styleUrls: ['./picker.component.less']
})
export class PickerComponent implements OnInit {
    columns = [
        '杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'
        // // 第一列
        // {
        //     values: ['周一', '周二', '周三', '周四', '周五'],
        //     defaultIndex: 2,
        // },
        // // 第二列
        // {
        //     values: ['上午', '下午', '晚上'],
        //     defaultIndex: 1,
        // },
    ]
    constructor() { }

    ngOnInit() {
    }
    onCancel(e: MouseEvent): void {
       console.log(e)
    }
    onConfirm(e: MouseEvent): void {
        console.log(e)
    }
}
