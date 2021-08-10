# Tag 标签

### 引入

```js
import TagModule from 'VantModule/tag';

```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```html
<van-cell
    title="primary 类型"
    [value]="primaryTel"
></van-cell>
<van-cell
    title="success 类型"
    [value]="successTel"
></van-cell>
<van-cell
    title="danger 类型"
    [value]="dangerTel"
></van-cell>
<van-cell
    title="warning 类型"
    [value]="warningTel"
></van-cell>
<ng-template #primaryTel>
    <van-tag type="primary">标签</van-tag>
</ng-template>
<ng-template #successTel>
    <van-tag type="success">标签</van-tag>
</ng-template>
<ng-template #dangerTel>
    <van-tag type="danger">标签</van-tag>
</ng-template>
<ng-template #warningTel>
    <van-tag type="warning">标签</van-tag>
</ng-template>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```html
<van-cell
    title="空心样式"
    [value]="primaryPlainTel"
></van-cell>
<ng-template #primaryPlainTel>
    <van-tag
        [plain]="true"
        type="primary"
    >
        标签
    </van-tag>
</ng-template>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```html
<van-cell
    title="圆角样式"
    [value]="primaryRoundTel"
></van-cell>
<ng-template #primaryRoundTel>
    <van-tag
        [round]="true"
        type="primary"
    >
        标签
    </van-tag>
</ng-template>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```html
<van-cell
    title="标记样式"
    [value]="primaryMarkTel"
></van-cell>
<ng-template #primaryMarkTel>
    <van-tag
        [mark]="true"
        type="primary"
    >
        标签
    </van-tag>
</ng-template>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```html
<van-cell
    title="可关闭标签"
    [value]="primaryCloseableTel"
></van-cell>
<ng-template #primaryCloseableTel>
    <van-tag
        [closeable]="true"
        type="primary"
    >
        标签
    </van-tag>
</ng-template>
```



### 标签大小

通过 `size` 属性调整标签大小。

```html
<van-cell
    title="小号标签"
    [value]="primarySmallTel"
></van-cell>
<van-cell
    title="中号标签 "
    [value]="primaryMediumTel"
></van-cell>
<van-cell
    title="大号标签"
    [value]="primaryLargeTel"
></van-cell>

<ng-template #primarySmallTel>
    <van-tag type="primary">标签</van-tag>
</ng-template>
<ng-template #primaryMediumTel>
    <van-tag
        size="medium"
        type="primary"
    >
        标签
    </van-tag>
</ng-template>
<ng-template #primaryLargeTel>
    <van-tag
        size="large"
        type="primary"
    >
        标签
    </van-tag>
</ng-template>
```

### 自定义颜色

通过 `color` 和 `text-color` 属性设置标签颜色。

```html
<van-cell
    title="背景颜色        "
    [value]="primaryColorTel"
></van-cell>
<van-cell
    title="文字颜色"
    [value]="primaryTextColorTel"
></van-cell>
<van-cell
    title="空心颜色"
    [value]="primaryPlainColorTel"
></van-cell>

<ng-template #primaryColorTel>
    <van-tag color="#7232dd">标签</van-tag>
</ng-template>
<ng-template #primaryTextColorTel>
    <van-tag
        color='#ffe1e1'
        textColor='#ad0000'
        type="primary"
    >
        标签
    </van-tag>
</ng-template>
<ng-template #primaryPlainColorTel>
    <van-tag
        [plain]="true"
        color="#7232dd"
    >
        标签
    </van-tag>
</ng-template>

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为`primary` `success` `danger` `warning` | _string_ | `default` |
| size | 大小, 可选值为`large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| text-color | 文本颜色，优先级高于`color`属性 | _string_ | `white` |
| closeable | 是否为可关闭标签 | _boolean_ | `false` |



### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击时触发     | _event: Event_ |
| close  | 关闭标签时触发 | -              |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/basic/theme)。

| 名称                        | 默认值                      | 描述 |
| --------------------------- | --------------------------- | ---- |
| @tag-padding                | `0 @padding-base`           | -    |
| @tag-text-color             | `@white`                    | -    |
| @tag-font-size              | `@font-size-sm`             | -    |
| @tag-border-radius          | `2px`                       | -    |
| @tag-line-height            | `16px`                      | -    |
| @tag-medium-padding         | `2px 6px`                   | -    |
| @tag-large-padding          | `@padding-base @padding-xs` | -    |
| @tag-large-border-radius    | `@border-radius-md`         | -    |
| @tag-large-font-size        | `@font-size-md`             | -    |
| @tag-round-border-radius    | `@border-radius-max`        | -    |
| @tag-danger-color           | `@red`                      | -    |
| @tag-primary-color          | `@blue`                     | -    |
| @tag-success-color          | `@green`                    | -    |
| @tag-warning-color          | `@orange`                   | -    |
| @tag-default-color          | `@gray-6`                   | -    |
| @tag-plain-background-color | `@white`                    | -    |
