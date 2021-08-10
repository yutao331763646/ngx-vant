import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
    cards = [{
        title: '引入',
        code: `  import NavBarModule from 'VantModule'; `
    }]
    cards2 = [{
        title: '基础用法',
        code: `  import { Component } from '@angular/core';

  @Component({
    selector: 'app-nav-bar',
    template: \`
      <van-nav-bar 
        title="标题" 
        leftText='返回'  
        [leftArrow]='true'
        rightText='按钮'  
        (clickLeft)="clickLeft()"
        (clickRight)="clickRight()"
      ></van-nav-bar>
    \`,
  })
  export class NavBarComponent {
    clickLeft() {
        alert('返回')
    }
    clickRight() {
        alert('按钮')
    }
  }             `
    }]
    constructor() { }

    ngOnInit() {
    }

}
