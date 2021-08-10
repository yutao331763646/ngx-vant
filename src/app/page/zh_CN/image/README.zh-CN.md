# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

```js
import ImageModule from 'ngx-vant/image';
```

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

```html
<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" ></van-image>
```

### 填充模式

通过 `fit` 属性可以设置图片填充模式，可选值见下方表格。

```html
<van-image
    width="10rem"
    height="10rem"
    fit="contain"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
</van-image>
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```html
<van-image
    [round]="true"
    width="10rem"
    height="10rem"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
</van-image>
```


### 加载中提示

`Image` 组件提供了默认的加载中提示。

```html
<van-image
    width="10rem"
    height="10rem"
    [showLoading]="true"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
</van-image>
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示。

```html
<van-image
    width="10rem"
    height="10rem"
    [showError]="true"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    >
</van-image>`
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fit | 图片填充模式 | _string_ | `fill` |
| alt | 替代文本 | _string_ | - |
| width | 宽度，默认单位为`px` | _number \| string_ | - |
| height | 高度，默认单位为`px` | _number \| string_ | - |
| radius | 圆角大小，默认单位为`px` | _number \| string_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| showError | 是否展示图片加载失败提示 | _boolean_ | `true` |
| showLoading | 是否展示图片加载中提示 | _boolean_ | `true` |
| errorIcon  | 失败时提示的图标名称或图片链接 | _string_ | `photo-fail` |
| loadingIcon  | 加载时提示的图标名称或图片链接 | _string_ | `photo` |


### 图片填充模式 

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取`none`或`contain`中较小的一个                        |

### Events

| 事件名 | 说明               | 回调参数       |
| ------ | ------------------ | -------------- |
| click  | 点击图片时触发     | _event: MouseEvent_ |
| load   | 图片加载完毕时触发 | _event: Event_       |
| error  | 图片加载失败时触发 | _event: Event_       |


### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/basic/theme)。

| 名称                                | 默认值              | 描述 |
| ----------------------------------- | ------------------- | ---- |
| @image-placeholder-text-color       | `@gray-6`           | -    |
| @image-placeholder-font-size        | `@font-size-md`     | -    |
| @image-placeholder-background-color | `@background-color` | -    |
| @image-loading-icon-size            | `32px`              | -    |
| @image-loading-icon-color           | `@gray-4`           | -    |
| @image-error-icon-size              | `32px`              | -    |
| @image-error-icon-color             | `@gray-4`           | -    |

## 常见问题


