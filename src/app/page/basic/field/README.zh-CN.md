# Field 输入框

### 介绍

表单中的输入框组件。

### 引入

```js
import FieldModule from 'ngx-vant';
```

## 代码演示

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```html
<!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
<van-cell-group>
  <van-field [(ngModel)]="value" label="文本" placeholder="请输入用户名"></van-field>
</van-cell-group>
```


### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```html
<!-- 输入任意文本 -->
<van-field [(ngModel)]="text" label="文本" ></van-field>
<!-- 输入手机号，调起手机号键盘 -->
<van-field [(ngModel)]="tel" type="tel" label="手机号"></van-field>
<!-- 允许输入正整数，调起纯数字键盘 -->
<van-field [(ngModel)]="digit" type="digit" label="整数" ></van-field>
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<van-field [(ngModel)]="number" type="number" label="数字"></van-field>
<!-- 输入密码 -->
<van-field [(ngModel)]="password" type="password" label="密码" ></van-field>
```




### 禁用输入框

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```html
<van-cell-group>
    <van-field label="文本" value="输入框只读" [readonly]="true" ></van-field>
    <van-field label="文本" value="输入框已禁用"  [disabled]="true" ></van-field>
</van-cell-group>`
```

### 显示图标

通过 `leftIcon` 和 `rightIcon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```html
<van-cell-group>
    <van-field
        [(ngModel)]="value1"
        label="文本"
        leftIcon="smile-o"
        rightIcon="warning-o"
        placeholder="显示图标"
    ></van-field>
    <van-field
        [(ngModel)]="value2"
        [clearable]="true"
        label="文本"
        leftIcon="music-o"
        placeholder="显示清除图标"
    ></van-field>
</van-cell-group>
```



### 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `errorMessage` 属性显示对应的错误提示。

```html
<van-cell-group>
    <van-field
        [(ngModel)]="username"
        [error]="true"
        [required]="true"
        label="用户名"
        placeholder="请输入用户名"
    ></van-field>
    <van-field
        [(ngModel)]="phone"
        [required]="true"
        label="手机号"
        placeholder="请输入手机号"
        errorMessage="手机号格式错误"
    ></van-field>
</van-cell-group>
```

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮。

```html
<van-field
    [(ngModel)]="sms"
    [center]="true"
    [clearable]="true"
    [button]="button"
    label="短信验证码"
    placeholder="请输入短信验证码"
>
    <ng-template #button>
        <van-button size="small" type="primary">发送验证码</van-button>
    </ng-template>
</van-field>
```




### 显示字数统计

设置 `maxlength` 和 `showWordLimit` 属性后会在底部显示字数统计。

```html
<van-field
    [(ngModel)]="message"
    rows="2"
    label="留言"
    type="textarea"
    maxlength="50"
    placeholder="请输入留言"
    [showWordLimit]="true"
></van-field>
```

### 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式，可选值为 `center`、`right`。

```html
<van-field
    [(ngModel)]="value"
    label="文本"
    placeholder="输入框内容右对齐"
    inputAlign="right"
></van-field>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| [(ngModel)] | 当前输入的值 | _number \| string_ | - |
| label | 输入框左侧文本 | _string_ | - |
| name  | 名称，提交表单的标识符 | _string_ | - |
| type | 输入框类型, 可选值为 `tel` `digit`<br>`number` `textarea` `password` 等 | _string_ | `text` |
| size | 大小，可选值为 `large` | _string_ | - |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否只读 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| clearTrigger  | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| showWordLimit | 是否显示字数统计，需要设置`maxlength`属性 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | - |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| labelClass | 左侧文本额外类名 | _any_ | - |
| labelWidth | 左侧文本宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| leftIcon | 左侧图标名称或图片链接 | _string_ | - |
| rightIcon | 右侧图标名称或图片链接 | _string_ | - |
| iconPrefix  | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/basic/icon) | _string_ | `van-icon` |

### Events

除下列事件外，Field 默认支持 Input 标签所有的原生事件

| 事件                 | 说明                 | 回调参数                       |
| -------------------- | -------------------- | ------------------------------ |
| input                | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| focus                | 输入框获得焦点时触发 | _event: Event_                 |
| blur                 | 输入框失去焦点时触发 | _event: Event_                 |
| clear                | 点击清除按钮时触发   | _event: Event_                 |
| click                | 点击 Field 时触发    | _event: Event_                 |
| click-input `v2.8.1` | 点击输入区域时触发   | _event: Event_                 |
| click-left-icon      | 点击左侧图标时触发   | _event: Event_                 |
| click-right-icon     | 点击右侧图标时触发   | _event: Event_                 |

### 方法

通过 ref 可以获取到 Field 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| focus  | 获取输入框焦点 | -    | -      |
| blur   | 取消输入框焦点 | -    | -      |


### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/basic/theme)。

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| @field-label-width               | `6.2em`         | -    |
| @field-label-color               | `@gray-7`       | -    |
| @field-label-margin-right        | `@padding-sm`   | -    |
| @field-input-text-color          | `@text-color`   | -    |
| @field-input-error-text-color    | `@red`          | -    |
| @field-input-disabled-text-color | `@gray-5`       | -    |
| @field-placeholder-text-color    | `@gray-5`       | -    |
| @field-icon-size                 | `16px`          | -    |
| @field-clear-icon-size           | `16px`          | -    |
| @field-clear-icon-color          | `@gray-5`       | -    |
| @field-right-icon-color          | `@gray-6`       | -    |
| @field-error-message-color       | `@red`          | -    |
| @field-error-message-text-color  | `12px`          | -    |
| @field-text-area-min-height      | `60px`          | -    |
| @field-word-limit-color          | `@gray-7`       | -    |
| @field-word-limit-font-size      | `@font-size-sm` | -    |
| @field-word-limit-line-height    | `16px`          | -    |
| @field-disabled-text-color       | `@gray-5`       | -    |

## 常见问题

### 设置 type 为 number 后，为什么 input 标签的类型仍为 text?

HTML 原生的 `type="number"` 属性在 iOS 和 Android 系统上都存在一定问题，比如 maxlength 属性不生效、无法获取到完整的输入内容等。因此设置 type 为 `number` 时，Field 不会使用原生的 `type="number"` 属性，而是用现代浏览器支持的 [inputmode 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode)来控制输入键盘的类型。

### 在桌面端点击清除按钮无效？

清除按钮监听是的移动端 Touch 事件，参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
