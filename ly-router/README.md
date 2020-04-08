### 写在前面

介绍：**router**

- 基于uniapp中路由与页面跳转API封装的插件。
- 封装的类型如Vue中的router，对习惯使用Vue.router的朋友比较友好。
- 本插件不含路由拦截，只是单纯的页面跳转与参数的传递。



### 使用指南

##### 全局使用（推荐）

```js
//main.js
import {router} from "common/ly-tools/ly-router/ly-router.js"; //文件路径请换成本地路径
router.defaultData.encode = true; //全局开启encodeURIComponent编码
//默认是关闭的，根据实际需要酌情添加。
Vue.prototype.$ly = {router}; //挂载在原形上
```

##### 局部使用

```js
import {router} from "@/common/ly-tools/ly-router/ly-router.js"; //文件路径请换成本地路径
router.pushTab("/pages/home/home") //跳转tabBar页面
```



### 代码演示

##### 1.简单使用

```js
this.$ly.router.push("/pages/home/about");
//或者可以这样
this.$ly.router.push({path:"/pages/home/about"});
```

##### 2.带参数

```js
this.$ly.router.push("/pages/home/about?name=LiuYang");
//或者可以这样
this.$ly.router.push({path:"/pages/home/about",query:{name:"Liuyang"}});
```

##### 3.使用encode编码传输

```js
let item = {
    name:"LiuYang",
    age:20
}
this.$ly.router.push("/pages/home/about?item=" + encodeURIComponent(JSON.stringify(item)));
//或者可以这样
this.$ly.router.push({path:"/pages/home/about",query:{item}},true); //推荐这种方式
```

##### 4.decode解码

```js
onLoad(option){
    let data = this.$ly.router.decode(option.item);
    console.log(data)
}
```

##### 5.返回页面

```js
this.$ly.router.back(1);//返回上一页 || 返回1个页面 
//数字是几就返回多少个页面
```

##### 6.获取页面实例

```js
this.$ly.router.vm(1); //获取上一个页面栈实例
//数字是几就返回上几个页面栈实例
this.$ly.router.vm(); //默认返回当前实例
```



##### 注意事项

- 跳转到 tabBar 页面只能使用 router.pushTab 跳转并且不能带参数

  

### 全局配置表defaultData

| 属性名 | 类型    | 描述                           | 默认值 |
| ------ | ------- | ------------------------------ | ------ |
| encode | Boolean | 是否启用encodeURIComponent编码 | false  |



### 参数

#### 路由参数

```js
this.$ly.router.pushTab(param1); //uni.switchTab()

this.$ly.router.push(param1,param2); //uni.navigateTo()

this.$ly.router.replace(param1,param2); //uni.redirectTo()

this.$ly.router.replaceAll(param1,param2); //uni.reLaunch()

this.$ly.router.back(number); //uni.navigateBack()
```

| 参数名 | 类型             | 描述               | 默认值 |
| ------ | ---------------- | ------------------ | ------ |
| param1 | String \| Object | 跳转的页面与参数   |        |
| param2 | Boolean          | 是否启动encode编码 | false  |
| number | Number           | 需要返回几层页面   |        |

#### 其他参数

```js
this.$ly.router.decode(encode); //解析encode

this.$ly.router.vm(number) //获取页面栈实例
```
| 参数名 |        类型        |         描述         | 默认值 |
| :----: | :----------------: | :------------------: | :----: |
| encode | encodeURIComponent |   需要解析的encode   |        |
| number |       Number       | 获取上几个页面栈实例 |   0    |







欢迎补充  984584014@qq.com 

更多插件请前往 [github](https://github.com/web-liuyang/uni-app-tools)

------

<p style="text-align:right;font-size:14px;color:#999999;">文档更新时间：2020-04-08</p>