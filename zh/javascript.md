---
outline: deep
---

# Javascript

JavaScript 是一种广泛使用的编程语言，最初设计用于在浏览器中为网页添加交互功能。然而，随着技术的发展，JavaScript 的应用范围已经远远超出了浏览器，成为一种全栈开发语言。

它有如下的特征

- 动态类型
  它是一种动态类型的语言，这意味着变量的类型是在运行中确定的，而不是在编译时

```js
let x = 10
x = '123' //不同于其他强类型语言，js的类型可以随意更改
```

- 弱类型
  这意味着它存在隐式转换

```js
let x = 5 + '5' //'55'
let y = '10' * 2 //20
```

- 单线程
  js 是单线程的语言，但可以通过事件循环（Event Loop）来支持异步操作（setInterval，Promise，async/await）

## 数据类型

- `String` 数字
  整数（正负）浮点数

```js
1, 2, 3, 0.3, -1, -5
```

- `Number` 字符串
  两个单引号或者双引号之间的一个或者多个字符的集合

```js
'myname'
'myage'
```

- `Boolean` 布尔值

true 或者 false

- `Null` 空

空值（如果一个值你不知道要赋值成什么，初始化时可以赋值为 null）

- `Undefined` 未定义

当初始化一个变量，并且不指定初始值的时候这个值就是 undefined

- `Symbol` 唯一值

它是一个函数，调用它会返回一个新的，独一无二的值。

```js
let x = Symbol('a')
let y = Symbol('a')

x == y //false
```

- `Object` 对象

函数 ，数组，普通对象都是对象

## 注释

```js
// 我是单行注释

/**
 * 这是一段多行注释
 * 这是一段多行注释
 */
```

## 判断数据类型

- typeof

```js
console.log(typeof '123') // string
console.log(typeof 123) // number
console.log(typeof false) // boolean
console.log(typeof null) // object
console.log(typeof new Function()) //function
console.log(typeof [1, 2, 3]) // object
console.log(typeof undefined) //undefined
```

- Object.prototype.toString.call

```js
console.log(Object.prototype.toString.call('123')) // [object String]
console.log(Object.prototype.toString.call(123)) // [object Number]
console.log(Object.prototype.toString.call(false)) // [object Boolean]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(new Function())) //[object Function]
console.log(Object.prototype.toString.call([1, 2, 3])) // [object Array]
console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
```

## 变量

```js
let x = 1 //变量具有块级作用域
const y = 2 //变量具有块级作用域且不可更改，通用用来声明常量
var z = 3 //变量不具有块级作用域
a = 123 //此种方式生命变量默认为全局变量并挂载到window上
```

其中 `let` 和 `const`均不可以重复声明,且存在`暂时性死区`(在变量声明前访问报错)
而`var`则会提升变量到作用域顶部，并且可以重复声明，后声明的覆盖先声明的

```js
{
  var a = 123
  let d = 456
}

console.log(a) // 123 不存在块级作用域
console.log(d) // 报错 Uncaught ReferenceError: d is not defined

console.log(c) //报错 Uncaught ReferenceError: Cannot access 'c' before initialization
console.log(b) // 不会报错，值会被初始化为undefined

var b = 1
let c = 2
```

## Math

```
Math.PI // 圆周率
Math.ceil()//向上取整
Math.floor()//向下取整
Math.round()//四舍五入
Math.abs()//取绝对值
Math.sqrt()//取平方根
Math.min(x,y,z)//取最小值
Math.max(x,y,z)//取最大值
Math.random()//0-1随机数
Math.pow(a,b)//a的b次幂
Math.sin()//正弦
Math.cos()//余弦
```

## 字符串
