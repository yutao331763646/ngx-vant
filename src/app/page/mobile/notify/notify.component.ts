import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'projects/ngx-vant/notify/notify.service';
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.less']
})
export class NotifyComponent implements OnInit {

  constructor(private notifyService:NotifyService) { }

  ngOnInit() {
      console.log(this.notifyService)
      this.notifyService.create()
  }

}
