# Cell

### Install

```js
import CellModule from 'ngx-vant/cell';
```

## Usage

### Basic Usage

```html
<van-cell-group>
  <van-cell title="Cell title" value="Content" />
  <van-cell title="Cell title" value="Content" label="Description" />
</van-cell-group>
```

### Size

```html
<van-cell-group>
  <van-cell title="Cell title" value="Content" size="large" />
  <van-cell
    title="Cell title"
    value="Content"
    size="large"
    label="Description"
  />
</van-cell-group>
```

### Left Icon

```html
<van-cell-group>
  <van-cell title="Cell title" icon="location-o" />
</van-cell-group>
```

### Value only

```html
<van-cell-group>
  <van-cell value="Content" />
</van-cell-group>
```

### Link

```html
<van-cell-group>
  <van-cell title="Cell title" [isLink]="true" />
  <van-cell title="Cell title" [isLink]="true" value="Content" />
  <van-cell title="Cell title" [isLink]="true" arrow-direction="down" value="Content" />
</van-cell-group>
```


### Group Title

```html
<van-cell-group title="Group 1">
  <van-cell title="Cell title" value="Content" />
</van-cell-group>
<van-cell-group title="Group 2">
  <van-cell title="Cell title" value="Content" />
</van-cell-group>
```




### Vertical Center

```html
<van-cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| title     | Group title                  | _string_  | -       |
| border    | Whether to show outer border | _boolean_ | `true`  |

### Cell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| size | Size，can be set to `large` | _string_ | - |
| icon | Left Icon | _string_ | - |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| url | Link URL | _string_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| isLink | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrowDirection | Can be set to `left` `up` `down` | _string_ | `right` |
| titleStyle | Title style | _any_ | - |
| titleClass | Title className | _any_ | - |
| valueClass | Value className | _any_ | - |
| labelClass | Label className | _any_ | - |

### Cell Events

| Event | Description                  | Arguments      |
| ----- | ---------------------------- | -------------- |
| click | Emitted when cell is clicked | _event: Event_ |

### CellGroup Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
| title   | Custom title |

### Cell Slots

| Name       | Description                       |
| ---------- | --------------------------------- |
| default    | Custom value                      |
| icon       | Custom icon                       |
| title      | Custom title                      |
| label      | Custom label                      |
| right-icon | Custom right icon                 |
| extra      | Custom extra content on the right |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @cell-font-size | `@font-size-md` | - |
| @cell-line-height | `24px` | - |
| @cell-vertical-padding | `10px` | - |
| @cell-horizontal-padding | `@padding-md` | - |
| @cell-text-color | `@text-color` | - |
| @cell-background-color | `@white` | - |
| @cell-border-color | `@border-color` | - |
| @cell-active-color | `@active-color` | - |
| @cell-required-color | `@red` | - |
| @cell-label-color | `@gray-6` | - |
| @cell-label-font-size | `@font-size-sm` | - |
| @cell-label-line-height | `@line-height-sm` | - |
| @cell-label-margin-top | `@padding-base` | - |
| @cell-value-color | `@gray-6` | - |
| @cell-icon-size | `16px` | - |
| @cell-right-icon-color | `@gray-6` | - |
| @cell-large-vertical-padding | `@padding-sm` | - |
| @cell-large-title-font-size | `@font-size-lg` | - |
| @cell-large-label-font-size | `@font-size-md` | - |
| @cell-group-background-color | `@white` | - |
| @cell-group-title-color | `@gray-6` | - |
| @cell-group-title-padding | `@padding-md @padding-md @padding-xs` | - |
| @cell-group-title-font-size | `@font-size-md` | - |
| @cell-group-title-line-height | `16px` | - |
