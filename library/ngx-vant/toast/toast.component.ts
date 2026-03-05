import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'van-toast',
  exportAs: 'vanToast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
