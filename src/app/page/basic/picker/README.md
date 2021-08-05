# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](#/basic/popup)组件配合使用。

### 引入

```js
import PickerModule from 'ngx-vant';
```

## 代码演示

### 基础用法

#### 选项配置

Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。

#### 顶部栏

设置 `showToolbar` 属性后会展示顶部操作栏，顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。



```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    template: `
        <van-picker
            title='标题'
            [showToolbar]='true'
            [columns]='columns'
            (cancel)="onCancel($event)"
            (confirm)="onConfirm($event)"
        ></van-picker>
    `
})
export class PickerComponent implements OnInit {

    columns :string[] = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']

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

### 默认选中项

单列选择时，可以通过 `defaultIndex` 属性设置初始选中项的索引。

```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    template: `
        <van-picker
            title='标题'
            [defaultIndex]="2"
            [showToolbar]='true'
            [columns]='columns'
            (cancel)="onCancel($event)"
            (confirm)="onConfirm($event)"
        ></van-picker>
    `
})
export class PickerComponent implements OnInit {

    columns :string[] = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']

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

### 多列选择

`columns` 属性可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等，详细格式见。

```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    template: `
        <van-picker
            title='标题'
            [showToolbar]='true'
            [columns]='columns'
            (cancel)="onCancel($event)"
            (confirm)="onConfirm($event)"
        ></van-picker>
    `
})
export class PickerComponent implements OnInit {

    columns :string[] = [
        // 第一列
        {
            values: ['周一', '周二', '周三', '周四', '周五'],
            defaultIndex: 2,
        },
        // 第二列
        {
            values: ['上午', '下午', '晚上'],
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 对象数组，配置每一列显示的数据 | _Column[]_ | `[]` |
| title | 顶部栏标题 | _string_ | - |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| valueKey | 选项对象中，选项文字对应的键名 | _string_ | `text` |
| toolbarPosition | 顶部栏位置，可选值为`bottom` | _string_ | `top` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly  | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `false` |
| allowHtml | 是否允许选项内容中渲染 HTML | _boolean_ | `true` |
| defaultIndex | 单列选择时，默认选中项的索引 | _number \| string_ | `0` |
| itemHeight  | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

当选择器有多列时，事件回调参数会返回数组

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |

                       |

### Column 数据结构

当传入多列数据时，`columns` 为一个对象数组，数组中的每一个对象配置每一列，每一列有以下 `key`:

| 键名              | 说明                       | 类型       |
| ----------------- | -------------------------- | ---------- |
| values            | 列中对应的备选值           | _string[]_ |
| defaultIndex      | 初始选中项的索引，默认为 0 | _number_   |
| className         | 为对应列添加额外的类名     | _any_      |
| children | 级联选项                   | _Column_   |

<!-- ### 方法

通过 ref 可以获取到 Picker 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getValues | 获取所有列选中的值 | - | values |
| setValues | 设置所有列选中的值 | values | - |
| getIndexes | 获取所有列选中值对应的索引 | - | indexes |
| setIndexes | 设置所有列选中值对应的索引 | indexes | - |
| getColumnValue | 获取对应列选中的值 | columnIndex | value |
| setColumnValue | 设置对应列选中的值 | columnIndex, value | - |
| getColumnIndex | 获取对应列选中项的索引 | columnIndex | optionIndex |
| setColumnIndex | 设置对应列选中项的索引 | columnIndex, optionIndex | - |
| getColumnValues | 获取对应列中所有选项 | columnIndex | values |
| setColumnValues | 设置对应列中所有选项 | columnIndex, values | - |
| confirm `v2.4.0` | 停止惯性滚动并触发 confirm 事件 | - | - | -->

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/basic/theme)。

| 名称                            | 默认值                     | 描述 |
| ------------------------------- | -------------------------- | ---- |
| @picker-background-color        | `@white`                   | -    |
| @picker-toolbar-height          | `44px`                     | -    |
| @picker-title-font-size         | `@font-size-lg`            | -    |
| @picker-title-line-height       | `@line-height-md`          | -    |
| @picker-action-padding          | `0 @padding-md`            | -    |
| @picker-action-font-size        | `@font-size-md`            | -    |
| @picker-confirm-action-color    | `@text-link-color`         | -    |
| @picker-cancel-action-color     | `@gray-6`                  | -    |
| @picker-option-font-size        | `@font-size-lg`            | -    |
| @picker-option-text-color       | `@black`                   | -    |
| @picker-option-disabled-opacity | `0.3`                      | -    |
| @picker-loading-icon-color      | `@blue`                    | -    |
| @picker-loading-mask-color      | `rgba(255, 255, 255, 0.9)` | -    |

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
