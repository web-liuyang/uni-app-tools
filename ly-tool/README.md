## Classes

<dl>
<dt><a href="#Reg">Reg</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#regexpList">regexpList</a> : <code>object</code></dt>
<dd><p>正则表达式列表</p>
</dd>
</dl>

<a name="Reg"></a>

## Reg
**Kind**: global class  

* [Reg](#Reg)
    * [.phone(tel)](#Reg+phone) ⇒ <code>boolean</code>
    * [.password(pwd)](#Reg+password) ⇒ <code>boolean</code>
    * [.number(num)](#Reg+number) ⇒ <code>boolean</code>
    * [.prc(cn)](#Reg+prc) ⇒ <code>boolean</code>
    * [.price(price)](#Reg+price) ⇒ <code>boolean</code>

<a name="Reg+phone"></a>

### reg.phone(tel) ⇒ <code>boolean</code>
正则判断11位正确手机号码

**Kind**: instance method of [<code>Reg</code>](#Reg)  
**Returns**: <code>boolean</code> - 返回[true|false]  

| Param | Type | Description |
| --- | --- | --- |
| tel | <code>number</code> | 需要判断的手机号码（必填） |

**Example**  
```js
this.ly.reg.phone(18284335838) //truethis.ly.reg.phone(1234567890) //false
```
<a name="Reg+password"></a>

### reg.password(pwd) ⇒ <code>boolean</code>
正则判断6-12位密码

**Kind**: instance method of [<code>Reg</code>](#Reg)  
**Returns**: <code>boolean</code> - 返回[true|false]  

| Param | Type | Description |
| --- | --- | --- |
| pwd | <code>number</code> \| <code>str</code> | 需要判断的密码（必填） |

**Example**  
```js
this.ly.reg.password(123456) //truethis.ly.reg.password(12345) //false
```
<a name="Reg+number"></a>

### reg.number(num) ⇒ <code>boolean</code>
正则判断6为数字 （多用于6位支付密码）

**Kind**: instance method of [<code>Reg</code>](#Reg)  
**Returns**: <code>boolean</code> - 返回[true|false]  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 需要判断数字（必填） |

**Example**  
```js
this.ly.reg.password(123456) //truethis.ly.reg.password(1234567890) //false
```
<a name="Reg+prc"></a>

### reg.prc(cn) ⇒ <code>boolean</code>
正则判断是否为汉字

**Kind**: instance method of [<code>Reg</code>](#Reg)  
**Returns**: <code>boolean</code> - 返回[true|false]  

| Param | Type | Description |
| --- | --- | --- |
| cn | <code>string</code> | 需要判断的字符串（必填） |

**Example**  
```js
this.ly.reg.prc("刘洋") //truethis.ly.reg.prc("LiuYang") //false
```
<a name="Reg+price"></a>

### reg.price(price) ⇒ <code>boolean</code>
正则判断是否为合法金额

**Kind**: instance method of [<code>Reg</code>](#Reg)  
**Returns**: <code>boolean</code> - 返回[true|false]  

| Param | Type | Description |
| --- | --- | --- |
| price | <code>number</code> | 需要判断金额 |

**Example**  
```js
this.ly.reg.price(4.5) //truethis.ly.reg.price(0.001) //falsethis.ly.reg.price(0.0.) //falsethis.ly.reg.price(.0) //falsethis.ly.reg.price(..) //false
```
<a name="regexpList"></a>

## regexpList : <code>object</code>
正则表达式列表

**Kind**: global variable  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| phone | <code>number</code> | 手机号判断 |
| password | <code>number</code> | 密码正则判断 |
| number | <code>number</code> | 6位数字判断 |
| prc | <code>number</code> | 汉字判断 |
| price | <code>number</code> | 金额合法判断 |
| carNumPrefix | <code>number</code> | 车牌号前缀 |

**Example**  
```js
this.ly.reg["需要使用的正则判断"]("需要判断的字符串")
```
