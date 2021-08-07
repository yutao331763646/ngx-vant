# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

```js
import StickyModule from 'VantModule/tabs';

```

## 代码演示

### 基础用法

将内容包裹在 `Sticky` 组件内即可。

```html
<van-sticky>
  <van-button type="primary">基础用法</van-button>
</van-sticky>
```

### 吸顶距离

通过 `offsetTop` 属性可以设置组件在吸顶时与顶部的距离。

```html
<van-sticky [offsetTop]="50">
  <van-button type="info">吸顶距离</van-button>
</van-sticky>
```



## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetTop  | 吸顶时与顶部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |

### Events

| 事件名 | 说明       | 回调参数                                       |
| ------ | ---------- | ---------------------------------------------- |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称            | 默认值 | 描述 |
| --------------- | ------ | ---- |
| @sticky-z-index | `99`   | -    |
