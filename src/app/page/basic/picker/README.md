# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](#/zh-CN/popup)组件配合使用。

### 引入

```js
import PickerModule from 'VantModule';
```

## 代码演示

### 基础用法

#### 选项配置

Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。

#### 顶部栏

设置 `show-toolbar` 属性后会展示顶部操作栏，顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。



```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picker',
    template: `
        <van-picker
            [showToolbar]='true'
            [columns]='columns'
            title='ddd'
        ></van-picker>
    `
})
export class PickerComponent implements OnInit {
    columns = [
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

    ngOnInit() {
    }

}

```

### 默认选中项

单列选择时，可以通过 `default-index` 属性设置初始选中项的索引。

```html
<van-picker show-toolbar title="标题" :columns="columns" :default-index="2" />
```

### 多列选择

`columns` 属性可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等，详细格式见[下方表格](#/zh-CN/picker#column-shu-ju-jie-gou)。

```html
<van-picker show-toolbar title="标题" :columns="columns" />
```

```js
export default {
  data() {
    return {
      columns: [
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
      ],
    };
  },
};
```

### 级联选择

使用 `columns` 的 `children` 字段可以实现选项级联的效果（从 2.4.5 版本开始支持）。

```html
<van-picker show-toolbar title="标题" :columns="columns" />
```

```js
export default {
  data() {
    return {
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }],
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            },
          ],
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }],
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }],
            },
          ],
        },
      ],
    };
  },
};
```

> 级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位

### 禁用选项

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

```html
<van-picker show-toolbar :columns="columns" />
```

```js
export default {
  data() {
    return {
      columns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' },
      ],
    };
  },
};
```

### 动态设置选项

通过 Picker 上的实例方法可以更灵活地控制选择器，比如使用 `setColumnValues` 方法实现多列联动。

```html
<van-picker show-toolbar :columns="columns" @change="onChange" />
```

```js
const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

export default {
  data() {
    return {
      columns: [{ values: Object.keys(cities) }, { values: cities['浙江'] }],
    };
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, cities[values[0]]);
    },
  },
};
```

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

```html
<van-picker show-toolbar :columns="columns" :loading="loading" />
```

```js
export default {
  data() {
    return {
      columns: [],
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      this.columns = ['选项'];
    }, 1000);
  },
};
```

### 搭配弹出层使用

在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果。

```html
<van-field
  readonly
  clickable
  label="城市"
  :value="value"
  placeholder="选择城市"
  @click="showPicker = true"
/>
<van-popup v-model="showPicker" round position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 对象数组，配置每一列显示的数据 | _Column[]_ | `[]` |
| title | 顶部栏标题 | _string_ | - |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字 | _string_ | `取消` |
| value-key | 选项对象中，选项文字对应的键名 | _string_ | `text` |
| toolbar-position | 顶部栏位置，可选值为`bottom` | _string_ | `top` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly `v2.10.5` | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| show-toolbar | 是否显示顶部栏 | _boolean_ | `false` |
| allow-html | 是否允许选项内容中渲染 HTML | _boolean_ | `true` |
| default-index | 单列选择时，默认选中项的索引 | _number \| string_ | `0` |
| item-height `v2.8.6` | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visible-item-count | 可见的选项个数 | _number \| string_ | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

当选择器有多列时，事件回调参数会返回数组

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| change | 选项改变时触发 | 单列：Picker 实例，选中值，选中值对应的索引<br>多列：Picker 实例，所有列选中值，当前列对应的索引 |

### Slots

| 名称               | 说明                   | 参数                       |
| ------------------ | ---------------------- | -------------------------- |
| default            | 自定义整个顶部栏的内容 | -                          |
| title              | 自定义标题内容         | -                          |
| confirm `v2.10.11` | 自定义确认按钮内容     | -                          |
| cancel `v2.10.11`  | 自定义取消按钮内容     | -                          |
| option `v2.10.11`  | 自定义选项内容         | _option: string \| object_ |
| columns-top        | 自定义选项上方内容     | -                          |
| columns-bottom     | 自定义选项下方内容     | -                          |

### Column 数据结构

当传入多列数据时，`columns` 为一个对象数组，数组中的每一个对象配置每一列，每一列有以下 `key`:

| 键名              | 说明                       | 类型       |
| ----------------- | -------------------------- | ---------- |
| values            | 列中对应的备选值           | _string[]_ |
| defaultIndex      | 初始选中项的索引，默认为 0 | _number_   |
| className         | 为对应列添加额外的类名     | _any_      |
| children `v2.4.5` | 级联选项                   | _Column_   |

### 方法

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
| confirm `v2.4.0` | 停止惯性滚动并触发 confirm 事件 | - | - |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

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
