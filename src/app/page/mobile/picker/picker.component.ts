import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.less']
})
export class PickerComponent implements OnInit {
    columns= ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
  constructor() { }

  ngOnInit() {
  }

}
