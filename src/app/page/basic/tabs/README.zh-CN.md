# Tab 标签页

### 引入

```js
import VantTabsModule from 'VantModule';
```

## 代码演示

### 基础用法


```html
<van-tabs>
    <van-tab title='标签1'>内容1</van-tab>
    <van-tab title='标签2'>内容2</van-tab>
    <van-tab title='标签3'>内容3</van-tab>
    <van-tab title='标签4'>内容4</van-tab>
    <van-tab title='标签5'>内容5</van-tab>
    <van-tab title='标签6'>内容6</van-tab>
</van-tabs>
```





### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```html
<van-tabs>
    <van-tab title='标签1'>内容1</van-tab>
    <van-tab title='标签2'>内容2</van-tab>
    <van-tab title='标签3'>内容3</van-tab>
    <van-tab title='标签4'>内容4</van-tab>
    <van-tab title='标签5'>内容5</van-tab>
    <van-tab title='标签6'>内容6</van-tab>
    <van-tab title='标签7'>内容7</van-tab>
    <van-tab title='标签8'>内容8</van-tab>
    <van-tab title='标签9'>内容9</van-tab>
    <van-tab title='标签10'>内容10</van-tab>
    <van-tab title='标签11'>内容11</van-tab>
    <van-tab title='标签12'>内容12</van-tab>
    <van-tab title='标签13'>内容13</van-tab>
    <van-tab title='标签14'>内容14</van-tab>
</van-tabs>
```

### 禁用标签

设置 `disabled` 属性即可禁用标签，如果需要监听禁用标签的点击事件，可以在 `van-tabs` 上监听`disabled` 事件。

```html
<van-tabs>
    <van-tab title='标签1'>内容1</van-tab>
    <van-tab
        title='标签2'
        [disabled]='true'
    >
        内容2
    </van-tab>
    <van-tab title='标签3'>内容3</van-tab>
    <van-tab title='标签4'>内容4</van-tab>
    <van-tab title='标签5'>内容5</van-tab>
    <van-tab title='标签6'>内容6</van-tab>
    <van-tab title='标签7'>内容7</van-tab>
    <van-tab title='标签8'>内容8</van-tab>
</van-tabs>
```



### 样式风格

`Tab` 支持两种样式风格：`line` 和`card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```html
<van-tabs type="card">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
</van-tabs>
```




### 自定义标签

通过 `title` 插槽可以自定义标签内容。

```html
<van-tabs v-model="active">
  <van-tab v-for="index in 2" :key="index">
    <template #title> <van-icon name="more-o" />选项 </template>
    内容 {{ index }}
  </van-tab>
</van-tabs>
```








## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 样式风格类型，可选值为 `card` | _string_ | `line` |
| color | 标签主题色 | _string_ | `#ee0a24` |
| background | 标签栏背景色 | _string_ | `white` |
| duration | 动画时间，单位秒 | _number \| string_ | `0.3` |
| line-width | 底部条宽度，默认单位 `px` | _number \| string_ | `40px` |
| line-height | 底部条高度，默认单位 `px` | _number \| string_ | `3px` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否显示标签栏外边框，仅在 `type="line"` 时有效 | _boolean_ | `false` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` |
| swipeable | 是否开启手势滑动切换 | _boolean_ | `false` |
| lazy-render | 是否开启延迟渲染（首次切换到标签时才触发内容渲染） | _boolean_ | `true` |
| scrollspy `v2.3.0` | 是否开启滚动导航 | _boolean_ | `false` |
| offset-top `v2.8.7` | 粘性定位布局下与顶部的最小距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| swipe-threshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number \| string_ | `5` |
| title-active-color | 标题选中态颜色 | _string_ | - |
| title-inactive-color | 标题默认态颜色 | _string_ | - |
| before-change `v2.9.3` | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name) => boolean \| Promise_ | - |

### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| title-style | 自定义标题样式 | _any_ | - |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | name：标识符，title：标题 |
| change | 当前激活的标签改变时触发 | name：标识符，title：标题 |
| disabled | 点击被禁用的标签时触发 | name：标识符，title：标题 |
| scroll | 滚动时触发，仅在 sticky 模式下生效 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |



### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                       | 默认值                | 描述 |
| -------------------------- | --------------------- | ---- |
| @tab-text-color            | `@gray-7`             | -    |
| @tab-active-text-color     | `@text-color`         | -    |
| @tab-disabled-text-color   | `@gray-5`             | -    |
| @tab-font-size             | `@font-size-md`       | -    |
| @tab-line-height           | `@line-height-md`     | -    |
| @tabs-default-color        | `@red`                | -    |
| @tabs-line-height          | `44px`                | -    |
| @tabs-card-height          | `30px`                | -    |
| @tabs-nav-background-color | `@white`              | -    |
| @tabs-bottom-bar-width     | `40px`                | -    |
| @tabs-bottom-bar-height    | `3px`                 | -    |
| @tabs-bottom-bar-color     | `@tabs-default-color` | -    |

