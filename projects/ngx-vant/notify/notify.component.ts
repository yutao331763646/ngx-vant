import {
    Component,
    ElementRef,
    OnInit,
} from '@angular/core';
import { removeNgTag } from 'ngx-vant/utils';
@Component({
    selector: 'vant-notify',
    templateUrl: './notify.component.html',
})
export class NotifyComponent implements OnInit {
    show = false
    type = 'danger';
    message = '通知';
    duration = 3000;
    color = 'white';
    background = ''
    constructor(private elementRef: ElementRef) { }
    ngOnInit() {
        removeNgTag(this.elementRef.nativeElement)
    }

}



