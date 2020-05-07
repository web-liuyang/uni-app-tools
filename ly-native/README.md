### native.js API

#### 写在前面



**QQ群 [993987980](https://jq.qq.com/?_wv=1027&k=56A4Xhr)**



此SDK是基于HTML5+ API 编写的原生功能。

> 本人精力时间有限，没那么多时间来研究原生API。
>
> 涉及到的功能比较少，大部分是我自己需要的功能。
>
> 看上什么就用什么，有时间会更新。



### 使用指南

##### 全局使用（推荐）

```js
//main.js
import native from "common/ly-tools/ly-native/ly-native.js"; //文件路径请换成本地路径
Vue.prototype.$ly = {native}; //挂载在原形上
```

##### 局部使用

```js
import native from "common/ly-tools/ly-cache/ly-cache.js"; //文件路径请换成本地路径
```



### WIFI

#### 检测Wifi是否开启

```js
this.$ly.native.isWifiEnabled(isSettings); //true -> 开启
```

参数说明

|   参数名   |  类型   | 必填 | 默认值 |         说明         |
| :--------: | :-----: | :--: | :----: | :------------------: |
| isSettings | Boolean |  否  | false  | 是否弹出wifi设置页面 |



### GPS

#### 检测GPS是否开启

```js
this.$ly.native.isGPSEnabled(isSettings); //true -> 开启
```

参数说明

|   参数名   |  类型   | 必填 | 默认值 |        说明         |
| :--------: | :-----: | :--: | :----: | :-----------------: |
| isSettings | Boolean |  否  | false  | 是否弹出GPS设置页面 |











### 欢迎补充  984584014@qq.com 



![入坑群993987980](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/91ff8a44a677919f0ada4bb62d426dfcd4b3b9b1826dcdda99c472989902fe9a20da660ef9248458b98e1e9244a4032e?pictype=scale&from=30013&version=3.3.3.3&uin=984584014&fname=uniapp%E6%8F%92%E4%BB%B6%E7%BE%A4%E8%81%8A%E4%BA%8C%E7%BB%B4%E7%A0%81.png&size=256)



### 更多插件请前往 [github](https://github.com/web-liuyang/uni-app-tools)

------

<p style="text-align:right;font-size:14px;color:#999999;">文档更新时间：2020-05-06</p>

