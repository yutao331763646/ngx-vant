import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less']
})
export class OverlayComponent implements OnInit {
    show:boolean=false
    show2:boolean=false
  constructor() { }

  ngOnInit() {
  }

}
