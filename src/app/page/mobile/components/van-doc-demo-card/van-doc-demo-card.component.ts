import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'van-van-doc-demo-card',
  templateUrl: './van-doc-demo-card.component.html',
  styleUrls: ['./van-doc-demo-card.component.less']
})
export class VanDocDemoCardComponent implements OnInit {
    @Input() title = ''
  constructor() { }

  ngOnInit() {
  }

}
