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

### 高阶函数

将函数作为参数或者将函数作为返回值的函数叫做高阶函数

```js
const callback = n => {
  return n * 2
}

function cube(callback, n) {
  return callback(n)
}
```

### 函数式编程

- `forEach`

```js
const arr = [1, 2, 3]

arr.forEach((item, index, arr) => {
  console.log(item, index, arr)
})
```

- `map`

```js
const arr = [1, 2, 3]
const arr2 = arr.map(item => item * 2) //[2,4,6]
```

- `filter`

```js
const arr = [1, 2, 3, 4, 5]
const arr2 = arr.filter(item => item > 2) //[3,4,5]
```

- `reduce`

```js
const arr = [1, 2, 3, 4, 5]
arr.reduce((prev, cur) => prev + cur, 0) //15
```

- `every`

```js
const arr = [1, 2, 3, 4, 5]
const isFlag = arr.every(item => typeof item === 'number') //true
```

- `some`

```js
const arr = [1, '2', 3, 4, 5]
const isFlag = arr.some(item => typeof item === 'string') //true
```

- `find`

```js
const arr = [1, '2', 3, 4, 5]
const target = arr.find(item => typeof item === 'string') //'2'
```

- `findIndex`

```js
const arr = [1, '2', 3, 4, 5]
const target = arr.findIndex(item => typeof item === 'string') //2
```

- `sort` 排序

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

- `Object.assign`

```js
const obj = { name: 'jack', age: 18 }
const obj2 = Object.assign({ sex: '男' }, obj) // { name: 'jack', age: 18, sex:'男' }
```

- ` Object.keys` 获取对象的 key 并组成一个数组
- `Object.values` 获取对象的 value 并组成一个数组
- `Object.entries()` 获取对象 key 和值
- `Object.hasOwnProperty()` 检查是否有某个属性

```js
const obj = { name: 'jack', age: 18 }
console.log(Object.keys(obj)) //['name','age']
console.log(Object.values(obj)) //['jack',18]
console.log(Object.entries(obj)) //[['name','jack'],['age',18]]
```

## set

一组元素的集合，且只能包含唯一元素

```js
const com = new Set()

const com2 = new Set([1, 2, 3, 4, 5])

for (let item of com2) {
  console.log(item)
}

com2.add[6] //[1, 2, 3, 4, 5, 6]
com2.delete(6) //[1,2,3,4,5]
console.log(com2.size) //5
console.log(com2.has(1)) //true
console.log(com2.has(6)) //false
com2.clear() //清空

const mt = new Map()
const mt2 = new Map([
  ['name', 'test'],
  ['age', '18'],
])

mt2.set('sex', 'male')
console.log(mt2.has('sex')) // true
console.log(mt2.has('sname')) // false

for (let ele of mt2) {
  console.log(ele)
}
```

## 解构

```js
//解构数组
let [a, b, c] = [1, 2, 3]
console.log(a, b, c) //1 2 3
let [d, e, f, m] = [4, 5, 6]
console.log(d, e, f, m) //4 5 6 undefined
let [d, e, f, m = 10] = [4, 5, 6]
console.log(d, e, f, m) //4 5 6 10
let [a, b, c, ...rest] = [1, 2, 3, 4, 5, 6]
console.log(reset) //[4,5,6]

//解构对象
const man = {
  name: 'test',
  age: 18,
  sex: 'male',
}

let { name, age, sex } = man
console.log(name, age, sex) //test 18 male

let { name: n, age: a, sex: s } = man //解构中重命名
console.log(n, a, s) //test 18 male

//接收无限参数的箭头函数

const sum = (...args) => {
  console.log(args)
}

sum(1, 2) //[1,2]
```

## 正则表达式 RegExp

正则表达式需要两个参数，一个是必需的搜索模式，另一个是可选的标志

可选标志

- `i` 不区分大小写
- `g` 全局搜索
- `m` 多行搜索

```js
let pattern = 'test'
let regEx = new RegExp(pattern, 'gi')
let refEx2 = /test/gi
```

### RegExp 相关对象方法

- `test`

```js
let str = 'I love Javascript;'
let pattern = new RegExp('love', 'gi')

console.log(str.test(pattern))
```

- `match` 匹配到了返回数组 否则返回 null

```js
let str = 'I love Javascript'
let pattern = new RegExp('a', 'gi')
console.log(str.match(pattern))
```

- `search` 返回索引值 若没有搜到则返回-1

```js
let str = 'I love Javascript'
let pattern = new RegExp('a', 'gi')
console.log(str.search(pattern))
```

- `replace` 匹配并替换

```js
let str = 'I love Javascript'
let pattern = new RegExp('a', 'gi')
console.log(str.replace(pattern, 'X'))
```

### 语法

- `[]` 一组字符
  [ac] 表示 a,c
  [az] 表示 a,z
  [AZ] 表示 A,Z
  [0-3] 表示 0 到 3
  [0-9]表示 0 到 9
  [A-Z]表示 A 到 Z
  [a-z]表示 a 到 z
  [a-zA-z0-9] 任意字母（大小写）和数字
- `\` 表示转义
  abc 表示精确匹配'abc'
  [abc] 表示 abc 任意一个
  [^abc] 表示非 abc
  \d 表示 匹配数字（0-9）等价于[0-9]
  \D 表示 匹配非数字
  \w 表示匹配单词字符（字母数字下划线）
  \W 表示匹配非单词字符
  \s 表示匹配空格
  \S 匹配非空白字符
  . 表示除了换行符（\n）以外的任意字符
  ^ 表示以指定字符串开头
  $ 表示以指定字符结尾
  - 0 次或者多次
  - \* 一次或者多次
  - ? 零次或者一次
  - {3} 3 个字符
  - {3,4} 3-4 个字符

## console

- console.log() 在控制台显示输出
- console.warn() 警告
- console.error() 错误
- console.table() 以表格形式展示
- console.time() 输出时间

## 错误处理

```js
try {
  ... do something
} catch (err) {
  console.log(err)
} finally {
}
```

## 类

```js
//定义类
class Person {
  constructor() {
    this.time = '123'
  }
  name = 'test'
  age = 18
  get getName() {
    return this.name
  }
  set setName(val) {
    this.name = val
  }
  static sex = 'male'
}

const p = new Person()
console.log(p.getName) // test
p.setName = 'jack'
console.log(p.getName) //jack
//继承
class Son extends Person {}
```

## JSON

```js
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```

可以看到 JSON 格式和对象的语法类似，但是 JSON 的 key 必须用双引号包裹

### 常用方法

- `JSON.parse` 将 JSON 解析为对象
- `JSON.stringify` 将对象转为 JSON

## 存储

键和值始终为字符串

- sessionStorage 当前窗口关闭就清除了
- localStorage 无过期时间

### 常用方法

- `setItem(key value)` 存储
- `getItem(key)` 获取
- `removeItem(key)` 清除指定的
- `clear()` 清除全部
- `key(index)` 显示存储在指定索引的数据

## Promise

Promise 是 js 中处理异步操作的一种方式。

```js
//使用Promise构造函数来创建一个Promise

const p = new Promise((resolve, reject) => {
  resolve()
})

p.then(() => {}).catch(() => {})
```

### async await

可以优雅的来处理 Promise

```js
const p = new Promise((resolve, reject) => {
  resolve()
})

async function getData() {
  try {
    await p()
  } catch (err) {
    console.log(err)
  }
}
```

## 闭包

js 中，函数内部访问函数外部的变量（非全局变量），称为闭包
闭包使得外部函数的变量在内部函数执行时仍然保持活跃（不会被垃圾回收）。

```js
//闭包示例
function sum() {
  let m = 1
  return function () {
    var n = 2
    return n + m
  }
}
sum()()
```

## js 编码风格指南

1.对变量和函数名采用驼峰方式命名（camelCase）

2.所有变量以字母开头

3.使用 canst 来定义常量，数组，对象，函数

4.使用单引号代替双引号

5.不需要分号

6.运算符和逗号后跟空格

7.箭头函数代替函数声明

可参考 [airbnb]https://github.com/airbnb/javascript

## Dom

获取元素

- document.getElementsByTagName 通过元素标签名来获取元素合集 返回的是 HTMLCollection 类数组
- document.getElementsByClassName 通过 class 来获取元素合集
- document.getElementById 通过 id 来获取元素
- document.querySelector 通过标签，或者类名来选择元素
- document.querySelectorAll 通过标签，或者类名来选择元素 返回 NodeList 的类数组

```js
const h1s = document.getElementsByTagName('h1')
for (let i = 0; i < h1s.length; i++) {
  console.log(h1s[i])
}
const h2s = document.getElementsByClassName('.tag')
const h = document.getElementById('id')
const a = document.queryselector('.name')
const b = document.queryselector('#age')
const c = document.queryselector('span')
```

添加属性

```js
const d = document.querySelector('.name')
d.classList.add('myName') //向class的列表中追加
d.classList.remove('myName') //向class的列表中删除
d.className = 'myName' //整个替换整体的className
d.id = 'myOnlyName'
d.setAttribute('class', 'myName')
d.style.color = 'red'
```

向 HTML 元素添加文本

- `textContent` 添加文本

```js
const titles = document.querySelectorAll('.name')
titles[0].textContent = '123'
```

- `innerHTML` 整个 html 替换

创建元素

- document.createElement('div') 使用标签名称创立元素
- document.body.appendChild(dom) 向 body 中追加子元素 dom
- document.body.removeChild(dom) 从 body 中移除子元素 dom

## 事件监听器

常见的 HTML 事件

- onclick
- onchange
- onmouseover
- onmouseout
- onkeyup
- onkeydown
- onload
- blur

我们使用 addEventListener 来为 dom 绑定事件

```js
dom.addEventListener('click', () => {})
```
