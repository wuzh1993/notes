# Typescript

typscript 是微软公司开发的开源编程语言，是 JavaScript 的超集，typescript 包含 javascript，同时为 javascript 添加了静态类型检查和基于类的面向对象编程特性，这可以帮助大型项目的开发管理和维护。

## typescript 开发环境配置

vscode 使用 typescript 来开发的，所以对 typescript 有着非常全面的支持，包括类型检查，补全等功能。下面是在 vscode 中常用的 typescript 插件

- **TypeScript Importer** 自动收集项目内类型定义，在你键入 **:** 时提供这些类型来进行补全
- **Move Ts** 通过编辑文件的路径直接修改项目的目录结构，并更新其他文件中对此文件的导入路径
- **ErrorLens** 能够直接将错误显示在代码后面，方便你快速定位错误

vscode 本身也内置了对 TypeScript 的支持，ctrl+shift+p 打开命令面板，找到**打开工作区设置**这一项，输入 typescript 可筛选出所有 TypeScript 相关的配置。

- **Function Like Return Types** 显示推导得到的函数返回值类型
- **Parameter Names** 显示函数入参的名称
- **Parameter Types** 显示函数入参的类型
- **Variable Types** 显示变量的类型

## typescript 文件的执行

```js
$ npm i ts-node typescript -g
```

其中 ts-node 是用来在 node 环境中运行 typescript 代码的，而 typescript 是 typescript 编译器。

然后我们初始化 typescript 项目

```js
// 未全局安装typepescript时可执行这个命令来初始化
$ npx typescript --init
或者
$ tsc --int
```

新建一个 typescript 文件然后执行 ts-node index.ts 即可执行该 ts 文件(仅仅在 vscode 中调试可装一个 vscode 插件**Run Code**来运行 ts 代码)

如果你想自动监听文件的变更并自动重新执行代码，则可以安装**ts-node-dev**来运行 ts 文件，他是一个基于 node-dev 和 ts-node 的插件

```js
$ npm i ts-node-dev -g
$ ts-node-dev --respawn --transpile-only app.ts
```

其中，respawn 启用了监听重启的能力，transpile-only 启用了 ts-node 的编译模式，提供了更快的编译速度，

## 类型标注

类型标注是确保变量，函数参数，返回值等具有特定类型的强大工具。通过类型标注，可以在编写代码时就捕获潜在的类型错误，从而提高代码的健壮性和可维护性

### 原始类型

在 TypeScript 中，原始类型指的是 JavaScript 中的基本数据类型，包括 boolean、number、string、null、undefined、symbol 和 bigint。这些类型可以直接在代码中使用，无需额外的导入。

```js
const name: string = 'John'
const age: number = 30
const male: boolean = true
const undefinedVar: undefined = undefined
const nullVar: null = null
const symbolVar: symbol = Symbol('unique')
const bigIntVar: bigint = 9007199254740991n
const obj: object = {}
```

#### 其中的**null**和**undefined**是比较特殊的

在 JavaScript 中 null 表示有值，但是是空值，而 undefined 表示没有值，是未定义的。但是在 TypeScript 中，null 和 undefined 是具有具体意义的类型。他们在没有开启 **strictNullChecks** 的情况下，会被认为是其他类型的子类型。

```js
const a: string = null
const b: string = undefined
```

#### void

在 js 中，void 操作符会执行跟着的表达式并返回一个 undefined

```js
<a href="javascript:void(0)">清除缓存</a>
```

但是再 ts 中，void 是一个类型，它用来描述一个内部没有 return 语句或者没有显示 return 一个值的函数的返回值。如

```js
function func1() {}
function func2() {
  return
}
function func3() {
  return undefined
}
```

以上例子，前两个函数都会被推导为返回 void 类型，第三个函数会被推导为返回 undefined 类型。即便如此，在 ts 中，如果关闭了 strictNullChecks，void 类型依然会被认为是其他类型的子类型，包括 null 和 undefined。

### 数组

```js
const arr: number[] = [1, 2, 3]
//或者
const arr2: Array<number> = [1, 2, 3]
```

通常在开发中，如果我们能够确定数组的长度和类型，则更推荐使用元组 tuple，因为数组的可以超长访问，而元组则是固定的长度

```js
const arr: [string, number] = ['1', 2]
```

tuple 类型内部元素也可标记为可选成员

```js
const arr: [string, number?, boolean?] = ['1', 2]
```

元组一旦有可选成员，他的长度将是一个联合类型，列举该元组所有可能的长度

### 对象

在 ts 中，需要使用特殊的类型标注来描述对象类型，如**interface**，它代表了这个对象对外提供的接口结构

```js
interface obj{
  name:string
  age:number
  sex?:'男'|'女'
}

const obj:obj = {
  name:'张三',
  readonly age:18,
  sex:'男'
}
```

同样，使用 **?** 来标记可选属性,使用 readonly 来标记只读属性，设置 readonly 只读以后，除了初始化赋值外就不能对该属性进行修改了

### type 和 interface

在 ts 中，type 和 interface 都是用来定义类型的，但是它们在定义类型上有所区别。

- interface 定义的是对象或者类的结构，是可继承的
- type 可以定义所有类型，但是不可继承

日常使用中，推荐使用 interface 来定义对象，使用 type 来定义其他的类型别名

### object Object 与{}

在 js 中 Object 是原型链的顶端，所有的原始类型和对象类型最终都指向 Object，在 ts 中 Object 就表现为包含了所有的类型

```js
const p1: Object = {}
const p1: Object = 0
const p1: Object = '1'
const p1: Object = true
const p1: Object = () => {}
```

以上的代码在 ts 中都成立，同时，与其类似的还有基础类型对应的包装类型，如 Boolean，它同时会包含一些超预期的类型,如 undefined,null,void。（在 strictNullChecks:false 的情况下）

object 的引入就是为了解决 Object 类型不确切的问题，object 则代表所有非原始类型的类型，如数组，对象和函数

::: danger

- 在任何情况下你都不应该使用基础类型的装箱类型和 Object 作为类型来使用

- 如果不确定某个变量的具体类型，但是确定他不是原始类型，则可以使用 object，但是推荐使用更加具体的 Record<string,undefined>或者 unknown[]，any[]来表示数组

- {}在任何情况下不推荐使用，因为它代表所有非 null/undefined/void 的类型

:::

### 字面量类型

```js
const a: 123 = 123
const b: '123' = '123'
```

字面量类型代表着更加具体的值

当我们声明一个变量不标注具体类型时，系统就会推断该变量为一个具体的字面量类型

```js
const a = 123 //a的类型并不是预期的number，而是123这个具体的字面量类型
```

### 联合类型

联合类型代表一组类型的集合

```js
type Temp = number | string | (() => {}) | boolean
type Code = 1001 | 10000 | 10002
type Status = 'success' | 'fail' | 'error'
```

联合类型中的函数需要用()来包裹

### 对象字面量类型

```js
interface Obj {
  name: 'wu';
  age: 18;
}
const temp: Obj = {
  name: 'wu',
  age: 18,
}
```

和字面量类型相似，对象的属性和属性的值必须和声明类型一致

### 枚举

```js
enum Gender {
  male,
  female,
  other
}
```

枚举的常量会被声明在一个命名空间下，如果不指定值那么就默认使用数字枚举，从 0 开始

如果为某一成员制定了枚举值，则之前的枚举值会从 0 开始，之后的会从当前枚举值开始递增

```js
enum Gender {
  n1,//0
  n2 = 2,//2
  n3//3
}
```

枚举可以进行双向映射，可以通过 key 取值，同时也可以通过值去取 key（仅限数字的枚举成员）

```js
enum Gender {
  n1
}

console.log(Gender[0])//n1
console.log(Gender.n1)//0
```

### 常量枚举

```js
const enmu Gender{}
```

常量枚举只能通过枚举成员访问枚举值，同时编译时不会产生额外的对象

### 函数

函数类型描述了函数的入参类型和返回值类型

```js
//声明式
function func(a: number, b: number): number {}
//函数表达式
const func = (a: number, b: number): number => {}

const foo: (a: number, b: number) => number = (a, b) => a + b

//也可以给类型使用别名来代替
type FuncType = (a: number, b: number) => number
const foo2: FuncType = (a, b) => a + b

//同样使用?来表示非必传参数 可选参数必须位于必选参数的后面
function func3(a: number, b?: number): number {}

//使用=赋值的方法来赋默认值
function func4(a: number, b: number = 1): number {}
```

#### rest 参数

```js
function func(...args: number[]) {}
// 或者我们可以使用元组
function func(...args: [number, string]) {}
```

#### 函数重载

```js
function func(name: string, flag: boolean): string
function func(name: string, flag?: boolean): number
function func(name: string, flag?: boolean): string | number {
  if (flag) {
    return 'hello'
  } else {
    return 1
  }
}

```

#### class

class 类的属性类型标注类似于变量，构造函数，方法等的类型标注就类似于函数了

```js
class Foo {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHello(para: string): string {
    return 'hello'
  }
}
```

需要注意的是，setter 方法不允许进行返回值的类型标注，它只关注过程

#### 修饰符

- public 该成员在类，类的实例，子类中都可以访问
- private 该成员只能在类的内部访问
- protected 该成员只能在类和子类中访问
- static 静态成员，只能通过类名访问，无法通过实例访问

#### 继承，实现，抽象类

- 继承通过 extends 来继承

```js
class Foo {}
class Foo2 extends Foo {}
```

- 实现通过 implements 来实现

```js
class Foo {}
class Foo2 implements Foo {}
```

- 抽象类通过 abstract 来声明，抽象类不能被实例化，只能被继承

```js
类的抽象
abstract class Foo {
  name:string
  sayHello(name:string):string{
    return name
  }
}
抽象类的实现
class Foo2 implements Foo {
  name:string
  sayHello(name:string):string{
    return name
  }
  sayOther(){
    console.log('123')
  }
}
```

::: info

- 抽象类通常在需要确保一个类具有特定的属性和方法时使用，它不能被实例化
- 使用 implements 来实现一个类的时候，必须实现抽象类的所有属性和方法，同时也可以在此基础上进行扩展。
- 而 extends 是继承一个类，它会继承基类的所有的属性和方法 并可以复写这些方法并扩展
  :::

### any unknown never

any 表示任何类型，它允许我们给一个变量赋任何类型，但是不建议使用，因为这会绕过类型检查，导致代码运行时出现不可预知的错误

unknown 表示未知类型，它表示一个类型安全的 any，unknown 类型的变量可以再次赋值为其他任意类型，但之后只能赋值给 any 与 unknown 类型，否则会报错,一般使用 unknown 类型进行标注时搭配类型断言来进行

never 代表一个不会出现的值，它不携带任何的类型信息，在联合类型中会被直接移除，它是整个类型系统层级中最底层的类型，和 null undefined 一样 他是所有类型的子类型
通常我们在多个判断时会使用 never 来表示一个不会出现的情况，例如：

```js
if (typeof strOrNumOrBool === 'string') {
  // 一定是字符串！
  strOrNumOrBool.charAt(1)
} else if (typeof strOrNumOrBool === 'number') {
  strOrNumOrBool.toFixed()
} else if (typeof strOrNumOrBool === 'boolean') {
  strOrNumOrBool === true
} else {
  const _exhaustiveCheck: never = strOrNumOrBool
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`)
}
```

利用 never 类型只能赋值给 never 类型的特性，这样就能巧妙地捕获到未知的类型错误

### 类型断言

类型断言用来显式的告知类型检查程序当前这个变量的类型，避免出现报错

```js
const foo = {}

(foo as {a:string}).a
或者
(<{a:string}>foo).a

```

有时我们想基于一个结构实现一个对象，在不想实现这个对象中的所有属性的同时需要有类型提示，我们可以这么做

```js
interface Obj{
  name:string
  sayHello:()=>string
}
const obj = <Obj>{
  name:'123'
}
```

### 双重断言

原类型与断言类型之间差异过大时，需要先断言到 unknown，再断言到目标类型

```js
const str:string="123"
(str as unknown as {handler:()=>{}}).handler()
```

### 非空断言

非空断言其实是类型断言的简化，它使用 ! 语法，即 obj!.func()!.prop 的形式标记前面的一个声明一定是非空的（实际上就是剔除了 null 和 undefined 类型）

### 类型层级

::: info

- 最顶级的类型 any 和 unknown
- 特殊的 Object
- 包装类型
- 原始类型和对象类型
- 字面量类型（null 和 undefined 不是字面量类型的子类型）
- never
  :::

## 类型工具

### 类型别名

```js
type A = string
type Code = 10000 | 10001 | 10002
type Obj = {
  name: string,
}

//声明一个工具类型
type MyType<T> = T | string
```

通过 type 声明一个类型别名 A，它的类型等价于 string 类型

### 联合类型和交叉类型

联合类型使用的是|符号，交叉类型则使用的是&符号，比如**A&B** 这样一来我们必须要满足 A 和 B 两个类型才可以
而联合类型则表示符合其中一个类型即可

```js
type Obj1 = {
  name: string,
}
type Obj2 = {
  age: number,
}

//对象的属性将会合并
type Obj3 = Obj1 & Obj2
```

### 索引类型

- 索引签名类型
  索引签名指的是在接口或者类型别名中，快速声明一个键值类型一致的数据结构

```js
interface Obj {
  [key: string]: string;
}
```

在 js 中，对对象属性的访问会将数字索引转换为字符串索引
所以 obj[123]和 obj['123']效果其实是一样的

- 索引类型查询
  索引类型查询使用**keyof**操作符，他会将对象中的所有键转换为对应的字面量类型，再组合成联合类型，（这时候不会将数字类型的键名转换成字符串类型）

```js
interface Obj {
  name: string
  age: number
  123: string
}

type Keys = keyof Obj // type Keys = "name" | "age" | 123
```

- 索引类型访问

```js
interface Obj {
  [key: string]: number;
}

type PropType = Obj[string] // type PropType = number
```

### 映射类型

```js
type Stringify<T> = {
  [k in keyof T]:string
}

我们拿到了键，那么键值我们也可以拿到了

type Stringify<T> = {
  [k in keyof T]:T[k]
}

```

### 类型查询操作符

```js
const str = '123'
const str2: string = '123'
const obj = { name: '123' }
const nullVar: null = null
const undefinedVar: undefined = undefined
const func = (str: string) => {
  return str
}

type A = typeof func // (str: string) => string
type B = typeof str // "123"
type C = typeof str2 // string
```

### 类型守卫

ts 中提供了强大的类型推导能力，它会随着你的代码逻辑不断尝试收窄类型，这一能力称之为 **类型的控制流分析**

```js

function isString(input: unknown): input is string {
  return typeof input === "string";
}

function foo(input: string | number) {
  if (isString(input)) {
    // 正确了
    (input).replace("linbudu", "linbudu599")
  }
  if (typeof input === 'number') { }
  // ...
}

```

使用 is 关键字来显式的提供类型信息，isString 函数就被称为类型守卫

#### 基于 in 和 instanceof 的类型保护

在 js 中，我们通常通过 key in obj 来判断某个对象或者其原型上是否存在该属性，在 ts 中，in 依旧可以使用

```js
interface Foo {
  name: '123';
}

if ('name' in Foo) {
  Foo.name
}
```

同样 instanceof 也可以用来检查某个类是否是其他类的实例，所以也可以用来进行类型保护

#### 类型断言守卫

## 泛型

### 类型别名中的泛型

```js
type Factory<T> = T | number | string
//如果我们使用伪代码来表示的话上述的泛型相当于
function Factory(T) {
  return [T, number, string]
}
```

这个类型别名本质上是一个函数，T 就是它的变量，返回值则是一个包含 T 的联合类型，
类型别名中的泛型大多数用来进行工具类型的封装

```js
type Stringify<T>= {
  [k in keyof T ]:T[k]
}
```

条件类型

```js
//用来判断传进来的参数是否是string类型 如果是就返回类型true否则返回false
type IsString<T> = T extends string ? true : false
```

### 泛型约束和默认值

```js
//赋默认值
type Factory<T = boolean> = T | number | string
//这样在调用的时候就不用再传参数了
const A: Factory = true
```

除了声明默认值外，泛型还能做到一样函数参数做不到的事，就是**泛型约束**。也就是说，你可以要求传入这个工具类型的泛型必须符合某些条件，否则你就拒绝执行后面的逻辑

我们使用**extends**关键字来约束传入的泛型参数 A extends B ，A 必须是 B 的子类型

```js
type ResStatus<ResCode extends number> = ResCode extends 200|201|202?'success':'fail'
```

### 多泛型关联

```js
type Factory<Type, Type1, Type2> = [Type, Type1, Type2]
```
