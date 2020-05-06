### ajax 使用方式

#### return: [Promise](https://www.runoob.com/w3cnote/javascript-promise-object.html)



**QQ群 [993987980](https://jq.qq.com/?_wv=1027&k=56A4Xhr)**



### 更新说明

**版本号1.1.0**

1. 增加了错误拦截与错误处理

2. 废弃了一些不必要的回调参数

   ```js
   //请求前置拦截回调参数 1.0.0
   beforeAjax:(bf)=>{
       console.log(bf)  
       //bf = {requestInfo,requestTask} 
       //requestInfo -> 请求的信息
       //requestTask -> 请求返回值
       //requestTask.abort() 结束请求
   }
   //请求前置拦截回调参数 1.1.0
   beforeAjax:(data,task)=>{
       console.log(data);  //请求前的数据
       console.log(task);	//requestTask对象
       //task.abort() 结束请求
   }
   ```

   

### 使用指南

##### 全局使用（推荐）

```js
//main.js
import {req} from "common/ly-tools/ly-requrest/ly-requrest.js"; //文件路径请换成本地路径
req.defaultData.baseUrl = "http://127.0.0.1:8081"; //公共请求基础地址
req.defaultData.dataPublic.token = "0000-1111-2222-3333" //设置token值
//全局请求前置拦截
req.defaultData.beforeAjax = (data,task)=>{
    console.log(data); //请求的信息
    task.abort(); //结束请求
}
//全局请求后置拦截
//后置拦截必须要设置,不然没有返回值
req.defaultData.afterAjax = (data)=>{
    console.log(data)
    return data;
}
//全局错误拦截
req.defaultData.err = (err,reject)=>{
    console.log(err); //错误信息
    //调用reject函数则Promise请求结束,并且程序报错，请看错误信息酌情使用
    reject(); //报错  
}
Vue.prototype.$ly = {req}; //挂载在原形上
```

##### 局部使用

```js
import {req} from "@/common/ly-tools/ly-requrest/ly-requrest.js"; //文件路径请换成本地路径
const data = await req.ajax({
    path:"http://127.0.0.1:8081/getName"
})
console.log(data);
```



### 代码演示

##### 	1.简单使用

```js
const data = await this.$ly.req.ajax({
    path:"/getName"
})
console.log(data);
```

##### 	2.带请求提示

```js
const data = await this.$ly.req.ajax({
    title:"加载中...",
    path:"/getName"
})
console.log(data);
```

##### 	3.带参数

```js
const data = await this.$ly.req.ajax({
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
const data = await this.$ly.req.ajax({
    path:"/getName",
    data:{
        //token:"0000-1111-2222-3333" 设置了公共参数，默认都会带上
    	name:"LiuYang"
    },
    beforeAjax:(data,task)=>{
        console.log(data);  //请求前的数据
        console.log(task);	//requestTask对象
        //task.abort() 结束请求
    }
})
console.log(data);
```

##### 5.带请求后置拦截

```js
const data = await this.$ly.req.ajax({
    path:"/getName",
    data:{
        //token:"0000-1111-2222-3333" 设置了公共参数，默认都会带上
    	name:"LiuYang"
    },
    afterAjax:(af)=>{
        console.log(af) //后端返回的信息
        //可以在这里处理后端返回的信息
        //处理完成以后必须要返回，不然data数据为空
		return af;
    }
})
console.log(data);
```

##### 6.错误信息监听

```js
const data = await this.$ly.req.ajax({
    path:"/getName123456789",
    data:{
        //token:"0000-1111-2222-3333" 设置了公共参数，默认都会带上
    	name:"LiuYang"
    },
    error:(err,reject)=>{
        console.log(err); //错误信息
        //调用reject函数则Promise请求结束,并且程序报错，请看错误信息酌情使用
        reject(); //报错 
    }
})
console.log(data);
```

##### 7.异步调用

```js
this.$ly.req.ajax({
    path:"/getName123456789",
    data:{
        //token:"0000-1111-2222-3333" 设置了公共参数，默认都会带上
    	name:"LiuYang"
    },
    afterAjax:(af)=>{
        console.log(af) //后端返回的信息
        //可以在这里异步处理后端返回的信息
        //处理完成以后可以不用返回
    },
    error:(err,reject)=>{
        console.log(err); //错误信息
        //调用reject函数则Promise请求结束,并且程序报错，请看错误信息酌情使用
        reject(); //报错 
    }
})
```




> 单个请求拦截的优先级要大于全局请求拦截
>
> 请求前置拦截有两个返回值data,task
>
> 请求后置拦截只有一个返回值af，那就是请求成功后返回的数据
>
> 错误拦截处理有两个返回值err,reject



##### 注意事项

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
| dataPublic | object | 请求时默认带上的公共参数(常用于token) |  |
| beforeAjax | function | 请求前置拦截，可拦截参数与结束请求操作，常用于验证某些数据 | |
| afterAjax | function | 请求后置拦截，常用于为后端返回的数据做处理 | |
| error | function | 错误信息拦截处理 | |




### ajax参数

|   属性名   |   类型   |                             描述                             | 兼容 |
| :--------: | :------: | :----------------------------------------------------------: | :--: |
|   title    |  string  |       是否显示请求提示，推荐8字以内，默认为false不显示       |      |
|    path    |  string  |                  请求路径；可以请求外部地址                  |      |
|   method   |  string  |                          请求的方式                          |      |
|   header   |  object  |                            请求头                            |      |
|  dataType  |  string  | 后端返回的数据类型，默认为json，会对返回的数据做一次JSON.parse |      |
|    data    |  object  |        请求的参数，设置了dataPublic会默认带上公共参数        |      |
| beforeAjax | function |  请求前置拦截，可拦截参数与结束请求操作，常用于验证某些数据  |      |
| afterAjax  | function |          请求后置拦截，常用于为后端返回的数据做处理          |      |
|   error    | function |                       错误信息拦截处理                       |      |



### 错误信息表

| 状态码statusCode | 描述msg    |
| ---------------- | ---------- |
| 201              | 拦截成功   |
| 202              | 网络错误   |
| 204              | 地址错误   |
| 205              | 服务器错误 |
| 0                | 未知错误   |

> 错误信息只是归纳了一些常报的错误，具体的信息要自己检查，不能完全依靠此信息







### 欢迎补充  984584014@qq.com 



![入坑群993987980](data:image/png;base64,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)

### 更多插件请前往 [github](https://github.com/web-liuyang/uni-app-tools)

------

<p style="text-align:right;font-size:14px;color:#999999;">文档更新时间：2020-04-17</p>

