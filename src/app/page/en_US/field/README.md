# Field

### Install

```js
import FieldModule from 'ngx-vant/field';
```

## Usage

### Basic Usage

The value of field is bound with ngModel.

```html
<van-cell-group>
  <van-field [(ngModel)]="value" label="Label" placeholder="Text"></van-field>
</van-cell-group>
```

### Custom Type

Use `type` prop to custom different type fields.

```html
<van-field [(ngModel)]="text" label="Text" />
<van-field [(ngModel)]="tel" type="tel" label="Phone" />
<van-field [(ngModel)]="digit" type="digit" label="Digit" />
<van-field [(ngModel)]="number" type="number" label="Number" />
<van-field [(ngModel)]="password" type="password" label="Password" />
```



### Disabled

```html
<van-cell-group>
  <van-field label="Text" value="Input Readonly" [readonly]="true"  />
  <van-field label="Text" value="Input Disabled" [disabled]="true" />
</van-cell-group>
```

### Show Icon

```html
<van-cell-group>
  <van-field
   [(ngModel)]="value1"
    label="Text"
    leftIcon="smile-o"
    rightIcon="warning-o"
    placeholder="Show Icon"
  />
  <van-field
    [(ngModel)]="value2"
    [clearable]="true"
    label="Text"
    leftIcon="music-o"
    placeholder="Show Clear Icon"
  />
</van-cell-group>
```



### Error Info

Use `error` or `errorMessage` to show error info.

```html
<van-cell-group>
  <van-field
    [(ngModel)]="username"
    [error]="true"
    [required]="true"
    label="Username"
    placeholder="Username"
  />
  <van-field
    [(ngModel)]="phone"
    [required]="true"
    label="Phone"
    placeholder="Phone"
    error-message="Invalid phone"
  />
</van-cell-group>
```

### Insert Button

Use button slot to insert button.

```html
<van-field
    [(ngModel)]="sms"
    [center]="true"
    [clearable]="true"
    [button]="button"
    label="SMS"
    placeholder="SMS"
>
    <ng-template #button>
        <van-button size="small" type="primary">Send SMS</van-button>
    </ng-template>
</van-field>
```



### Show Word Limit

```html
<van-field
    [(ngModel)]="message"
    rows="2"
    label="Message"
    type="textarea"
    maxlength="50"
    placeholder="Message"
    [showWordLimit]="true"
></van-field>
```

### Input Align

Use `inputAlign` prop to align the input value.

```html
<van-field
    [(ngModel)]="value"
    label="Text"
    placeholder="Input Align Right"
    inputAlign="right"
></van-field>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model (value) | Field value | _number \| string_ | - |
| label | Field label | _string_ | - |
| name `v2.5.0` | Name | _string_ | - |
| type | Input type, can be set to `tel` `digit`<br>`number` `textarea` `password` | _string_ | `text` |
| size | Size，can be set to `large` | _string_ | - |
| maxlength | Max length of value | _number \| string_ | - |
| placeholder | Input placeholder | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| colon `v2.7.2` | Whether to display colon after label | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| center | Whether to center content vertically | _boolean_ | `true` |
| clearable | Whether to be clearable | _boolean_ | `false` |
| clear-trigger `v2.9.1` | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _string_ | `focus` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| autofocus | Whether to auto focus, unsupported in iOS | _boolean_ | `false` |
| show-word-limit | Whether to show word limit, need to set the `maxlength` prop | _boolean_ | `false` |
| error | Whether to show error info | _boolean_ | `false` |
| error-message | Error message | _string_ | - |
| formatter `v2.4.2` | Input value formatter | _Function_ | - |
| format-trigger `v2.8.7` | When to format value，can be set to `onBlur` | _string_ | `onChange` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| label-class | Label className | _any_ | - |
| label-width | Label width | _number \| string_ | `6.2em` |
| label-align | Label align, can be set to `center` `right` | _string_ | `left` |
| input-align | Input align, can be set to `center` `right` | _string_ | `left` |
| error-message-align | Error message align, can be set to `center` `right` | _string_ | `left` |
| autosize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | _boolean \| object_ | `false` |
| left-icon | Left side icon name | _string_ | - |
| right-icon | Right side icon name | _string_ | - |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `van-icon` |
| rules `v2.5.0` | Form validation rules | _Rule[]_ | - |

### Events

Field support all native events of input tag

| Event | Description | Parameters |
| --- | --- | --- |
| input | Emitted when input value changed | _value: string_ |
| focus | Emitted when input is focused | _event: Event_ |
| blur | Emitted when input is blured | _event: Event_ |
| clear | Emitted when the clear icon is clicked | _event: Event_ |
| click | Emitted when component is clicked | _event: Event_ |
| click-input `v2.8.1` | Emitted when the input is clicked | _event: Event_ |
| click-left-icon | Emitted when the left icon is clicked | _event: Event_ |
| click-right-icon | Emitted when the right icon is clicked | _event: Event_ |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Field instance and call instance methods.

| Name  | Description         | Attribute | Return value |
| ----- | ------------------- | --------- | ------------ |
| focus | Trigger input focus | -         | -            |
| blur  | Trigger input blur  | -         | -            |

### Slots

| Name           | Description                 |
| -------------- | --------------------------- |
| label          | Custom label                |
| input          | Custom input                |
| left-icon      | Custom left icon            |
| right-icon     | Custom right icon           |
| button         | Insert button               |
| extra `v2.8.2` | Custom content on the right |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value   | Description |
| -------------------------------- | --------------- | ----------- |
| @field-label-width               | `6.2em`         | -           |
| @field-label-color               | `@gray-7`       | -           |
| @field-label-margin-right        | `@padding-sm`   | -           |
| @field-input-text-color          | `@text-color`   | -           |
| @field-input-error-text-color    | `@red`          | -           |
| @field-input-disabled-text-color | `@gray-5`       | -           |
| @field-placeholder-text-color    | `@gray-5`       | -           |
| @field-icon-size                 | `16px`          | -           |
| @field-clear-icon-size           | `16px`          | -           |
| @field-clear-icon-color          | `@gray-5`       | -           |
| @field-right-icon-color          | `@gray-6`       | -           |
| @field-error-message-color       | `@red`          | -           |
| @field-error-message-text-color  | `12px`          | -           |
| @field-text-area-min-height      | `60px`          | -           |
| @field-word-limit-color          | `@gray-7`       | -           |
| @field-word-limit-font-size      | `@font-size-sm` | -           |
| @field-word-limit-line-height    | `16px`          | -           |
| @field-disabled-text-color       | `@gray-5`       | -           |
