# 风格指南

### 介绍

在参与 ngx-vant 开发时，请遵守约定的单文件组件风格指南，指南内容节选自 [Angular coding style guide
](https://angular.io/guide/styleguide)。

### 单一职责



对所有的组件、服务等等应用[单一职责原则(SRP)](https://wikipedia.org/wiki/Single_responsibility_principle)。这样可以让应用更干净、更易读、更易维护、更易测试。


### 小函数

坚持定义简单函数
- 考虑限制在 75 行之内。


### 总体命名原则
- 坚持所有符号使用一致的命名规则。
- 坚持遵循同一个模式来描述符号的特性和类型。推荐的模式为 `feature.type.ts`。




### 使用点和横杠来分隔文件名
- 坚持 在描述性名字中，用横杠来分隔单词。
- 坚持使用点来分隔描述性名字和类型。
- 坚持遵循先描述组件特性，再描述它的类型的模式，对所有组件使用一致的类型命名规则。推荐的模式为 `feature.type.ts`。
- 坚持使用惯用的后缀来描述类型，包括 `*.service`、`*.component`、`*.pipe`、`.module`、`.directive`。 必要时可以创建更多类型名，但必须注意，不要创建太多
在单文件组件中没有内容的组件应该是自闭合的。



### Prop 名大小写

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

```js
// bad
export default {
  props: {
    'greeting-text': String,
  },
};

// good
export default {
  props: {
    greetingText: String,
  },
};
```

```html
<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />
```

### 指令缩写

指令缩写，用 `:` 表示 `v-bind:` ，用 `@` 表示 `v-on:`

```html
<!-- bad -->
<input v-bind:value="value" v-on:input="onInput" />

<!-- good -->
<input :value="value" @input="onInput" />
```

### Props 顺序

标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

### 组件选项的顺序

组件选项应该有统一的顺序。

```js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {},
};
```

### 组件选项中的空行

组件选项较多时，建议在属性之间添加空行。

```js
export default {
  computed: {
    formattedValue() {
      // ...
    },

    styles() {
      // ...
    },
  },

  methods: {
    onInput() {
      // ...
    },

    onChange() {
      // ...
    },
  },
};
```

### 单文件组件顶级标签的顺序

单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。

```html
<template>
  ...
</template>

<script>
  /* ... */
</script>

<style>
  /* ... */
</style>
```
