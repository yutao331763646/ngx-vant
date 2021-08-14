# 定制主题

### 介绍

Ngx-Vant 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制。



### 样式变量

Ngx-Vant 使用了 [Less](http://lesscss.org/) 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是所有的基础样式变量，组件的颜色变量请参考各个组件的文档或[配置文件](https://github.com/yutao331763646/ngx-vant/blob/main/library/ngx-vant/style/var.less)。

```less
// Color Palette
@black: #000;
@white: #fff;
@gray-1: #f7f8fa;
@gray-2: #f2f3f5;
@gray-3: #ebedf0;
@gray-4: #dcdee0;
@gray-5: #c8c9cc;
@gray-6: #969799;
@gray-7: #646566;
@gray-8: #323233;
@red: #ee0a24;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;

// Gradient Colors
@gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
@gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
@text-color: @gray-8;
@active-color: @gray-2;
@active-opacity: 0.7;
@disabled-opacity: 0.5;
@background-color: @gray-1;
@background-color-light: #fafafa;
@text-link-color: #576b95;

// Padding
@padding-base: 4px;
@padding-xs: @padding-base * 2;
@padding-sm: @padding-base * 3;
@padding-md: @padding-base * 4;
@padding-lg: @padding-base * 6;
@padding-xl: @padding-base * 8;

// Font
@font-size-xs: 10px;
@font-size-sm: 12px;
@font-size-md: 14px;
@font-size-lg: 16px;
@font-weight-bold: 500;
@line-height-xs: 14px;
@line-height-sm: 18px;
@line-height-md: 20px;
@line-height-lg: 22px;
@base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
  'Microsoft Yahei', sans-serif;
@price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
  sans-serif;

// Animation
@animation-duration-base: 0.3s;
@animation-duration-fast: 0.2s;
@animation-timing-function-enter: ease-out;
@animation-timing-function-leave: ease-in;

// Border
@border-color: @gray-3;
@border-width-base: 1px;
@border-radius-sm: 2px;
@border-radius-md: 4px;
@border-radius-lg: 8px;
@border-radius-max: 999px;
```

## 定制方法

### 步骤一 引入样式源文件

在 `src/styles.less` 里引入预定义主题文件 


```less
/* You can add global styles to this file, and also import other style files */
@import  '../node_modules/ngx-vant/ngx-vant.less';
```

### 步骤二 修改样式变量

使用 Less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 即可对变量进行修改。

```less
/* You can add global styles to this file, and also import other style files */
@import  '../node_modules/ngx-vant/ngx-vant.less';

@button-primary-background-color: red;
@button-primary-border-color: red;
```
