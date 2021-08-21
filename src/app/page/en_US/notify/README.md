# Notify

### Install

```js
import NotifyModule from 'ngx-vant/notify';
```

## Usage

### Basic Usage

```js
import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'VantModule/notify/notify.service';
@Component({
    selector: 'app-notify',
    template:`
        <van-cell
            title="Basic Usage"
            [isLink]="true"
            (click)="baseClick()"
        ></van-cell>
    `
})
export class NotifyComponent implements OnInit {
    constructor(private notifyService: NotifyService) { }
    ngOnInit() {}
    baseClick() {
        this.notifyService.create({
            type: 'danger',
            message: 'Notify Message ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
}
```


### Notify Type



```js
import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'VantModule/notify/notify.service';
@Component({
    selector: 'app-notify',
    template:`
        <van-cell
            title="primary"
            [isLink]="true"
            (click)="primaryClick()"
        ></van-cell>
        <van-cell
            title="success"
            [isLink]="true"
            (click)="successClick()"
        ></van-cell>
        <van-cell
            title="danger"
            [isLink]="true"
            (click)="dangerClick()"
        ></van-cell>
        <van-cell
            title="warning"
            [isLink]="true"
            (click)="warningClick()"
        ></van-cell>
    `
})
export class NotifyComponent implements OnInit {
    constructor(private notifyService: NotifyService) { }
    ngOnInit() { }
    this.notifyService.primary({
        message: 'primary ',
        duration: 3000,
        color: 'white',
        background: ''
    })
    successClick() {
        this.notifyService.success({
            message: 'success ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
    dangerClick() {
        this.notifyService.danger({
            message: 'danger ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
    warningClick() {
        this.notifyService.warning({
            message: 'warning ',
            duration: 3000,
            color: 'white',
            background: ''
        })
    }
}
```


### Custom Notify

```js
import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'VantModule/notify/notify.service';
@Component({
    selector: 'app-notify',
    template:`
       <van-cell
            title="Custom Color"
            [isLink]="true"
            (click)="customStyleClick()"
        ></van-cell>
        <van-cell
            title="Custom Duration"
            [isLink]="true"
            (click)="customDurationClick()"
        ></van-cell>
    `
})
export class NotifyComponent implements OnInit {
    constructor(private notifyService: NotifyService) { }
    ngOnInit() {}
    customStyleClick() {
        this.notifyService.create({
            type: 'danger',
            message: 'Custom Color ', duration: 3000,
            color: '#ad0000',
            background: '#ffe1e1'
        })
    }
    customDurationClick() {
        this.notifyService.create({
            type: 'danger',
            message: 'Custom Duration ',
            duration: 1000,
            color: 'white',
            background: ''
        })
    }
}

```



## API

### Methods

| Methods | Attribute | Return value | Description |
| --- | --- | --- | --- |
| NotifyService | `options | message` | notify instance | Show notify |
| NotifyService.close | - | `void` | Close notify |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `success` `warning` | _string_ | `danger` |
| message | Message | _string_ | - |
| duration | Duration(ms), won't disappear if value is 0 | _number \| string_ | `3000` |
| color | Message color | _string_ | `white` |  |
| background | Background color | _string_ | - |
| className | Custom className | _any_ | - |
| onClick | Callback function after click | _Function_ | - |
| onOpened | Callback function after opened | _Function_ | - |
| onClose | Callback function after close | _Function_ | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value             | Description |
| -------------------------------- | ------------------------- | ----------- |
| @notify-text-color               | `@white`                  | -           |
| @notify-padding                  | `@padding-xs @padding-md` | -           |
| @notify-font-size                | `@font-size-md`           | -           |
| @notify-line-height              | `@line-height-md`         | -           |
| @notify-primary-background-color | `@blue`                   | -           |
| @notify-success-background-color | `@green`                  | -           |
| @notify-danger-background-color  | `@red`                    | -           |
| @notify-warning-background-color | `@orange`                 | -           |
