import { Component, OnInit } from '@angular/core';
import { VantI18nService } from 'ngx-vant/i18n';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  constructor(
    private vantI18n: VantI18nService,
  ) { }

  ngOnInit() {
      this.vantI18n.localeChange.subscribe(res=>{
          console.log(res)
      })
  }

}
