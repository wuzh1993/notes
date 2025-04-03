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

```js
let string = 'javascript'
console.log(string[0]) //j
console.log(string.length) //10
console.log(string.toUpperCase()) //JAVASCRIPT
console.log(string.toLowerCase()) //javascript
console.log(string.substr(1, 4)) //从索引1开始取4位  avas
console.log(string.substring(2, 4)) //从索引2开始取到索引4，注意左闭右开  va
console.log(string.split('')) //['j','a','v','a','s','c','r','i','p','t']
console.log(string.trim()) //去掉首尾空格
console.log(string.includes('java')) //true
console.log(string.charAt(1)) //a
console.log(string.charCodeAt(1)) //97
console.log(string.replace('java', '')) //script
console.log(string.indexOf('java')) //0
console.log(string.lastIndexOf('a')) //3
console.log(string.concat('test')) //javascripttest
console.log(string.startsWith('jav')) //true
console.log(string.endsWith('pt')) //true
console.log(string.search('pt')) //8
console.log(string.search(/cri/gi)) //5
console.log(string.match(/a/gi)) //['a','a']
console.log(string.repeat(3)) //javascriptjavascriptjavascript
console.log(string.slice(1, 3)) //av
console.log(string.slice(-3, -1)) //ip

//字符串转数字

let str = '98.8'
console.log(parseInt(str)) // 98
console.log(parseFloat(str)) // 98.8
console.log(Number(str)) // 98.8
console.log(+str) // 98.8

let str2 = '98.8a'
console.log(parseInt(str2)) // 98
console.log(parseFloat(str2)) // 98.8
console.log(Number(str2)) // NaN
console.log(+str2) // NaN
```

## 布尔值

`true`或者`false`
其他类型转布尔值可以使用`Boolean`或者`！！`

- 除了 0 之外所有数字转布尔值都是 true
- 除了字符串''之外所有的字符串转布尔值都是 true
- 不明确的值如 undefined 转布尔值是 false， null 转布尔值也是 false

```js
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean('')) //false
console.log(Boolean(0)) //false
console.log(Boolean('123')) //true
console.log(Boolean(10)) //true
console.log(Boolean(-10)) //true
```

## 运算符

```md
- 加法(+) a+b
- 减法(-) a-b
- 乘法(*) a*b
- 除法(/) a/b
- 取模(%) a%b
- 幂运算(**) a**b
- 值等(==) a==b
- 全等(===) a===b
- 大于 (>) a>b
- 小于(<) a<b
- 大于等于(>=) a>=b
- 小于等于(<=) a>=b
```

## 逻辑运算符

```md
- 与(&&) a&&b a 如果为 false b 不会执行
- 或(||) a||b a 如果为 true b 不会执行
- 取反(!) b = !a
```

## 增量运算符和减量运算符

`预增预减`和`后增后减`

其中预增是先计算再赋值，而后增是先赋值再运算，预减同理

```js
let a = 1,
  b = 1
console.log(a++) // 1
console.log(++b) //2
```

## 三目运算符

```md
a?b:c //a 为 true 则执行 b 反之执行 c
```

## 窗口方法

- `alert` 显示一个带有指定消息和 ok 按钮警告框
- `prompt` 窗口提示方法
- `confirm` 窗口确认方法

## Date 对象

```js
const date = new Date()
console.log(date.getFullYear()) // 获取年份
console.log(date.getMonth()) // 获取月份 从0开始
console.log(date.getDate()) // 获取日
console.log(date.getHours()) // 获取时
console.log(date.getMinutes()) // 获取分
console.log(date.getSeconds()) // 获取秒
console.log(date.getMilliseconds()) // 获取毫秒
console.log(date.getTime()) // 获取时间戳 自1970年1月1日开始的毫秒数 也可以通过Date.now()来获取
console.log(date.getDay()) // 获取周几 从0开始 0-6
```

## 条件语句

```js
if (a) {
  console.log('a')
} else if (b) {
  console.log('b')
} else {
  console.log('c')
}

switch (flag) {
  case a:
    console.log('a')
    break
  case b:
    console.log('b')
    break
  default:
    break
}
```

## 数组

### 创建数组

```js
let arr = new Array()
let arr2 = []
let arr3 = [1, 2, 3]
let arr4 = new Array(2).fill(1) //[1,1]
console.log(arr4[0]) //1
```

### 修改数组元素

```js
const nums = [1, 2, 3, 4, 5]
num2[0] = 'abc'
console.log(nums) //['abc',2,3,4,5]
```

### 数组方法

- `concat` 连接两个数组

```js
const a = [1, 2]
const b = [3, 4]
console.log(a.concat(b))[(1, 2, 3, 4)]
```

- `length` 数组的长度
- `indexOf` 返回数组中元素的索引

```js
const a = ['a', 'b', 'c']
console.log(a.indexOf('b')) // 1
console.log(a.indexOf('c')) // 2
console.log(a.indexOf('e')) // -1
```

- `includes` 检查数组是否包含某个元素 返回值为布尔值

```js
const a = [1, 2, 3]
console.log(a.includes(1)) // true
console.log(a.includes(4)) // false
```

- `Array.isArray()` 检查某个类型是否是数组

```js
const a = [1]
const b = 1
console.log(Array.isArray(a)) //true
console.log(Array.isArray(b)) //false
```

- `toString` 将数组转化为字符串

```js
const a = [1, 2, 3]
console.log(a.toString())
console.log(a.join(','))
```

- `slice` 切割（左闭右开）

```js
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a.slice(2, 5)) //[3,4,5]
```

- `splice` 切割并插入

```js
let a = [1, 2, 3, 4, 5, 6]
let b = a.splice(2, 3, 0, 0, 0)
console.log(a) // [1,2,0,0,0,6]
console.log(b) // [3,4,5]
```

- `push` 结尾追加

```js
let a = [1, 2]
a.push(3)
console.log(a) //[1,2,3]
```

- `pop` 结尾删除

```js
let a = [1, 2, 3]
let b = a.pop()
console.log(a) //[1,2]
console.log(b) //3
```

- `shift` 开头删除
- `unshift` 开头插入
- `reverse` 反转
- `sort` 排序

## 循环

- `for 循环`

```js

for(let i=0,i<9;i++){
  console.log(i)
  continue;//跳过此次循环
  break;//中断循环
}

```

- `while`

```js
let num = 0
while (num < 9) {
  console.log(num)
  num++
}

do {
  console.log(num)
  num++
} while (num < 9)
```

- `for of` 直接拿到数组元素 不拿索引

```js
let a = [1, 2, 3, 4]
for (let value of a) {
  console.log(a)
}
```

- `for in` 循环时拿到数组的下标

## 函数

```js
//普通函数
function method(params, params2) {
  const data = 123
  return data
}
//箭头函数
const method = (...args) => {}
//匿名函数|表达式函数
const method = function () {}
//自调用函数
;(function (n) {
  console.log(n ** 2)
})(3)
//参数默认值
function method(type = 1) {}
```

## object

```js
const obj = {
  name: 'jack',
  age: 18,
  getName() {
    return this.name
  },
}
console.log(obj.name)
console.log(obj['age'])
```

### 常用方法

- Object.assign

```js
const obj = { name: 'jack', age: 18 }
const obj2 = Object.assign({ sex: '男' }, obj) // { name: 'jack', age: 18, sex:'男' }
```

- Object.keys 获取对象的 key 并组成一个数组
- Object.values 获取对象的 value 并组成一个数组
- Object.entries() 获取对象 key 和值
- Object.hasOwnProperty() 检查是否有某个属性

```js
const obj = { name: 'jack', age: 18 }
console.log(Object.keys(obj)) //['name','age']
console.log(Object.values(obj)) //['jack',18]
console.log(Object.entries(obj)) //[['name','jack'],['age',18]]
```
