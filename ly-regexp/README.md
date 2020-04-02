## 使用方式

### return: [Boolean](https://www.w3school.com.cn/jsref/jsref_obj_boolean.asp)



### 使用指南

##### 全局使用（推荐）

```js
//main.js
import {reg} from "common/ly-regexp/ly-regexp.js"; //文件路径请换成本地路径
Vue.prototype.$ly = {reg}; //挂载在原形上
```

##### 局部使用

```js
import {reg} from "/ly-regexp/ly-regexp.js"; //文件路径请换成本地路径
reg.phone(18284335838) //true
reg.phone(12345678910) //false
```



### 代码演示

```js
//全局使用
this.$ly.reg.phone(18284335838) //true
this.$ly.reg.phone(12345678910) //false
```



### 正则方法表


| 方法名 |      值类型      |          描述          |          应用场景          |
| :----: | :--------------: | :--------------------: | ------ |
| phone  | number \| string | 判断是否为11位电话号码 | 电话判断 |
|    password    | number \| string | 判断是否为6-12位英文\|数字 | 用户密码 |
| number | number | 判断是否为6位数字 | 支付密码 |
| prc | string | 判断是否为中文汉字 | 姓名填写 |
| price | number | 判断是否为合法金额 | 输入金额 |
| carNumPrefix | array | 此方法不是正则仅用于展示 | 车牌前缀 |







欢迎补充  984584014@qq.com

------

<p style="text-align:right;font-size:14px;color:#999999;">文档更新时间：2020-04-02</p>