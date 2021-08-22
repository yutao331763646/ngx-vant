# Picker

### Intro

The Picker component is usually used with [Popup](#/en-US/popup) Component.

### Install

```js
import PickerModule from 'ngx-vant/picker';
```

## Usage

### Basic Usage

```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    template: `
        <van-picker
            title='Title'
            [showToolbar]='true'
            [columns]='columns'
            (cancel)="onCancel($event)"
            (confirm)="onConfirm($event)"
        ></van-picker>
    `
})
export class PickerComponent implements OnInit {

    columns :string[] = ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']

    constructor() { }

    ngOnInit() { }

    onCancel(e: MouseEvent): void {
       console.log(e)
    }
    onConfirm(e: MouseEvent): void {
        console.log(e)
    }

}

```



### Default Index

```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    template: `
        <van-picker
            title='Title'
            [defaultIndex]="2"
            [showToolbar]='true'
            [columns]='columns'
            (cancel)="onCancel($event)"
            (confirm)="onConfirm($event)"
        ></van-picker>
    `
})
export class PickerComponent implements OnInit {

    columns :string[] = ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']

    constructor() { }

    ngOnInit() { }

    onCancel(e: MouseEvent): void {
       console.log(e)
    }
    onConfirm(e: MouseEvent): void {
        console.log(e)
    }

}

```


### Multiple Columns


```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    template: `
        <van-picker
            title='Title'
            [showToolbar]='true'
            [columns]='columns'
            (cancel)="onCancel($event)"
            (confirm)="onConfirm($event)"
        ></van-picker>
    `
})
export class PickerComponent implements OnInit {

    columns :string[] = [
        {
            values: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday'],
            defaultIndex: 2,
        },
        {
            values: ['Morging', 'Afternoon', 'Evening'],
            defaultIndex: 1,
        },
    ]

    constructor() { }

    ngOnInit() { }

    onCancel(e: MouseEvent): void {
       console.log(e)
    }
    onConfirm(e: MouseEvent): void {
        console.log(e)
    }

}
```



## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Columns data | _Column[]_ | `[]` |
| title | Toolbar title | _string_ | - |
| confirmButtonText | Text of confirm button | _string_ | `Confirm` |
| cancelButtonText | Text of cancel button | _string_ | `Cancel` |
| valueKey | Key of option text | _string_ | `text` |
| toolbarPosition | Toolbar position, cat be set to `bottom` | _string_ | `top` |
| loading | Whether to show loading prompt | _boolean_ | `false` |
| readonly  | Whether to be readonly | _boolean_ | `false` |
| show-toolbar | Whether to show toolbar | _boolean_ | `false` |
| allow-html | Whether to allow HTML in option text | _boolean_ | `true` |
| default-index | Default value index of single column picker | _number \| string_ | `0` |
| item-height  | Option height, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `44` |
| visible-item-count | Count of visible columns | _number \| string_ | `6` |
| swipe-duration | Duration of the momentum animation，unit `ms` | _number \| string_ | `1000` |

### Events

Picker events will pass different parameters according to the columns are single or multiple

| Event | Description | Arguments |
| --- | --- | --- |
| confirm | Emitted when click confirm button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| cancel | Emitted when click cancel button | Single column：current value，current index<br>Multiple columns：current values，current indexes |



### Data Structure of Column

| Key               | Description               | Type       |
| ----------------- | ------------------------- | ---------- |
| values            | Value of column           | _string[]_ |
| defaultIndex      | Default value index       | _number_   |
| className         | ClassName for this column | _any_      |
| children `v2.4.5` | Cascade children          | _Column_   |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Picker instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| getValues | Get current values of all columns | - | values |
| setValues | Set current values of all columns | values | - |
| getIndexes | Get current indexes of all columns | - | indexes |
| setIndexes | Set current indexes of all columns | indexes | - |
| getColumnValue | Get current value of the column | columnIndex | value |
| setColumnValue | Set current value of the column | columnIndex, value | - |
| getColumnIndex | Get current index of the column | columnIndex | optionIndex |
| setColumnIndex | Set current index of the column | columnIndex, optionIndex | - |
| getColumnValues | Get columns data of the column | columnIndex | values |
| setColumnValues | Set columns data of the column | columnIndex, values | - |
| confirm `v2.4.0` | Stop scrolling and emit confirm event | - | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                            | Default Value              | Description |
| ------------------------------- | -------------------------- | ----------- |
| @picker-background-color        | `@white`                   | -           |
| @picker-toolbar-height          | `44px`                     | -           |
| @picker-title-font-size         | `@font-size-lg`            | -           |
| @picker-title-line-height       | `@line-height-md`          | -           |
| @picker-action-padding          | `0 @padding-md`            | -           |
| @picker-action-font-size        | `@font-size-md`            | -           |
| @picker-confirm-action-color    | `@text-link-color`         | -           |
| @picker-cancel-action-color     | `@gray-6`                  | -           |
| @picker-option-font-size        | `@font-size-lg`            | -           |
| @picker-option-text-color       | `@black`                   | -           |
| @picker-option-disabled-opacity | `0.3`                      | -           |
| @picker-loading-icon-color      | `@blue`                    | -           |
| @picker-loading-mask-color      | `rgba(255, 255, 255, 0.9)` | -           |
