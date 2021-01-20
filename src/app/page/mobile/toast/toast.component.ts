import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../../projects/ngx-vant/toast/toast.service'
@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

    constructor(private toastService: ToastService) {
     }

    ngOnInit() {
        console.log(this.toastService)
        this.toastService.success('ssss')
    }

}
