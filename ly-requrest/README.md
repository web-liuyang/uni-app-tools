## ajax 使用方式

### return: [Promise](https://www.runoob.com/w3cnote/javascript-promise-object.html)



### 使用指南

##### 全局使用（推荐）

```js
//main.js
import {req} from "common/ly-requrest/ly-requrest.js"; //文件路径请换成本地路径
req.defaultData.baseUrl = "127.0.0.1"; //公共请求基础地址
req.defaultData.dataPublic.token = "0000-1111-2222-3333" //设置token值
//全局请求前置拦截
req.defaultData.beforeAjax = (bf)=>{
    console.log(bf)
}
//全局请求后置拦截
req.defaultData.afterAjax = (af)=>{
    console.log(af)
    return af;
}
Vue.prototype.$ly = {req}; //挂载在原形上
```

##### 局部使用

```js
import {req} from "common/ly-requrest/ly-requrest.js"; //文件路径请换成本地路径
const data = await req.ajax({
    path:"127.0.0.1/getName"
})
console.log(data);
```



### 代码演示

##### 	1.简单使用

```js
const data = this.$ly.req.ajax({
    path:"/getName"
})
console.log(data);
```

##### 	2.带请求提示

```js
const data = this.$ly.req.ajax({
    title:"加载中...",
    path:"/getName"
})
console.log(data);
```

##### 	3.带参数

```js
const data = this.$ly.req.ajax({
    path:"/getName",
    data:{
        //token:"0000-1111-2222-3333" 设置了公共参数，默认都会带上
    	name:"LiuYang"
    }
})
console.log(data);
```

##### 4.带请求前置拦截

```js
const data = this.$ly.req.ajax({
    path:"/getName",
    data:{
        //token:"0000-1111-2222-3333" 设置了公共参数，默认都会带上
    	name:"LiuYang"
    },
    beforeAjax:(bf)=>{
        console.log(bf)  //bf = {requestInfo,requestTask} 
        //requestInfo -> 请求的信息
        //requestTask -> 请求返回值
        //requestTask.abort() 结束请求
    }
    
})
console.log(data);
```

##### 5.带请求后置拦截

```js
const data = this.$ly.req.ajax({
    path:"/getName",
    data:{
        //token:"0000-1111-2222-3333" 设置了公共参数，默认都会带上
    	name:"LiuYang"
    },
    afterAjax:(af)=>{
        console.log(af) //后端返回的信息
        //可以在这里处理后端返回的信息
        //处理完成以后必须要返回，不然data为空
		return af;
    }
})
console.log(data);
```

> 在函数内的请求拦截的优先级要大于全局请求拦截
>
> 请求前置拦截的返回值有两个属性{requestInfo,requestTask} 
>
> 请求后置拦截只有一个返回值，那就是请求成功后返回的数据



### 注意事项

- 非H5端，不能使用浏览器自带对象，比如document、window、localstorage、cookie等，更不能使用jquery等依赖这些浏览器对象的框架。因为各家小程序快应用都不支持这些对象。不支持自动保持 cookie，服务器应避免验证 cookie。[(查看详情)](https://uniapp.dcloud.io/matter?id=%e5%8c%ba%e5%88%ab%e4%ba%8e%e4%bc%a0%e7%bb%9f-web-%e5%bc%80%e5%8f%91%e7%9a%84%e6%b3%a8%e6%84%8f)

- 根据 W3C 规范，H5 端无法获取 response header 中 Set-Cookie、Set-Cookie2 这2个字段，对于跨域请求，允许获取的 response header 字段只限于“simple response header”和“Access-Control-Expose-Headers”。（[详情](https://www.w3.org/TR/cors/#access-control-allow-credentials-response-header)）

  

### 全局配置表 defaultData


| 属性名 |      类型      |          描述          |          默认值          |
| :----: | :--------------: | :--------------------: | :--------------------: |
| baseUrl | string | 基础地址（一般为服务器地址） |  |
|    data    | object | 传递的参数 |  |
| method | string | 请求方式 | GET |
| header | string | 请求头 | 'content-type': "application/x-www-form-urlencoded" |
| dataType | string | 后端返回的数据格式 | json |
| dataPublic | object | 请求时默认带上的参数(常用于token) |  |
| beforeAjax | function | 请求前置拦截，可拦截参数与结束请求操作，常用于验证某些数据 | |
| afterAjax | function | 请求后置拦截，常用于为后端返回的数据做处理 | |




### ajax参数

|   属性名   |   类型   |                             描述                             | 兼容 |
| :--------: | :------: | :----------------------------------------------------------: | :--: |
|   title    |  string  |       是否显示请求提示，推荐8字以内，默认为false不显示       |      |
|    path    |  string  |         请求路径，默认加上基础地址；可以请求外部地址         |      |
|   method   |  string  |                     请求的方式，默认GET                      |      |
|   header   |  object  | 请求头，默认为'content-type': "application/x-www-form-urlencoded" |      |
|  dataType  |  string  | 后端返回的数据类型，默认为json，会对返回的数据做一次JSON.parse |      |
|    data    |  object  |        请求的参数，设置了dataPublic会默认带上公共参数        |      |
| beforeAjax | function |  请求前置拦截，可拦截参数与结束请求操作，常用于验证某些数据  |      |
| afterAjax  | function |          请求后置拦截，常用于为后端返回的数据做处理          |      |







欢迎补充  984584014@qq.com 、 [github](https://github.com/web-liuyang/uni-app)

------

<p style="text-align:right;font-size:14px;color:#999999;">文档更新时间：2020-04-03</p>

