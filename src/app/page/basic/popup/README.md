# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

```js
import PopupModule from 'VantModule';
```

## 代码演示

### 基础用法

通过 `visible` 控制弹出层是否展示。

```html
<van-cell
    title="展示弹出层"
    [isLink]="true"
    (click)="show=true"
></van-cell>
<van-popup
    [(visible)]="show"
    position='center'
>
    <div style="padding: 30px 50px;">内容</div>
</van-popup>
```



### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```html
  <van-cell
    title="顶部弹出"
    [isLink]="true"
    (click)="show=true"
></van-cell>/>
<van-popup
    [(visible)]="show"
    position='top'
    [customStyle]="{height:'30%',width:'100%'}"
></van-popup>
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `close-icon` 属性自定义图标，使用 `position` 属性可以自定义图标位置。

```html
<van-popup
    [(visible)]="show"
    [closeable]="true"
    position='bottom'
    [round]="true"
    [customStyle]="{height:'30%',width:'100%'}"
>
</van-popup>
<van-popup
    [(visible)]="show"
    [closeable]="true"
    position='bottom'
    closeIcon='close'
    [round]="true"
    [customStyle]="{height:'30%',width:'100%'}"
>
</van-popup>
<van-popup
    [(visible)]="show"
    [closeable]="true"
    position='bottom'
    [round]="true"
    closeIconPosition='top-left'
    [customStyle]="{height:'30%',width:'100%'}"
>
</van-popup>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<van-popup
    [(visible)]="show"
    position='bottom'
    [round]="true"
    [customStyle]="{height:'30%',width:'100%'}"
>
</van-popup>
```



## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹出层 | _boolean_ | `false` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| onativeClass | 自定义遮罩层类名 | _string_ | - |
| customStyle | 自定义遮罩层样式 | _object_ | - |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| round | 是否显示圆角 | _boolean_ | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| close-icon | 关闭图标名称或图片链接 | _string_ | `cross` |
| close-icon-position | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | _boolean_ | `false` |


### Events

| 事件名                     | 说明                       | 回调参数       |
| -------------------------- | -------------------------- | -------------- |
| click                      | 点击弹出层时触发           | _event: Event_ |
| click-overlay              | 点击遮罩层时触发           | -              |
| open                       | 打开弹出层时触发           | -              |
| close                      | 关闭弹出层时触发           | -              |
| opened                     | 打开弹出层且动画结束后触发 | -              |
| closed                     | 关闭弹出层且动画结束后触发 | -              |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/basic/theme)。

| 名称                           | 默认值                               | 描述 |
| ------------------------------ | ------------------------------------ | ---- |
| @popup-background-color        | `@white`                             | -    |
| @popup-transition              | `transform @animation-duration-base` | -    |
| @popup-round-border-radius     | `16px`                               | -    |
| @popup-close-icon-size         | `22px`                               | -    |
| @popup-close-icon-color        | `@gray-5`                            | -    |
| @popup-close-icon-active-color | `@gray-6`                            | -    |
| @popup-close-icon-margin       | `16px`                               | -    |
| @popup-close-icon-z-index      | `1`                                  | -    |
