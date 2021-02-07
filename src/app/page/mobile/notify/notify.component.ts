import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'projects/ngx-vant/notify/notify.service';
@Component({
    selector: 'app-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.less']
})
export class NotifyComponent implements OnInit {

    constructor(private notifyService: NotifyService) { }

    ngOnInit() {
    }
    baseClick() {
        this.notifyService.create({
            type: 'danger',
            message: '基础用法 ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
    primaryClick() {
        this.notifyService.primary({
            message: '主要通知 ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
    successClick() {
        this.notifyService.success({
            message: '成功通知 ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
    dangerClick() {
        this.notifyService.danger({
            message: '危险通知 ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
    warningClick() {
        this.notifyService.warning({
            message: '警告通知 ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
    customStyleClick() {
        this.notifyService.create({
            type: 'danger',
            message: '自定义颜色 ', duration: 3000,
            color: '#ad0000',
            background: '#ffe1e1'
        })
    }
    customDurationClick() {
        this.notifyService.create({
            type: 'danger',
            message: '自定义颜色 ',
            duration: 1000,
            color: 'white',
            background: ''
        })
    }
}
