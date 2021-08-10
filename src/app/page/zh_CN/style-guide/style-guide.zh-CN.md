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



### 符号名与文件名
- 坚持为所有东西使用一致的命名约定，以它们所代表的东西命名。
- 坚持使用大写驼峰命名法来命名类。
- 坚持匹配符号名与它所在的文件名。
- 坚持在符号名后面追加约定的类型后缀（例如 `Component`、`Directive`、`Module`、`Pipe`、`Service`）。
- 坚持在文件名后面追加约定的类型后缀（例如 `.component.ts`、`.directive.ts`、`.module.ts`、`.pipe.ts`、`.service.ts`）。




