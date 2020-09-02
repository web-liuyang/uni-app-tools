### ajax 使用方式

#### return: [Promise](https://www.runoob.com/w3cnote/javascript-promise-object.html)



**QQ群 [993987980](https://jq.qq.com/?_wv=1027&k=56A4Xhr)**



### 使用指南

##### 全局使用（推荐）

```js
//main.js
import {req} from "common/ly-tools/ly-requrest/ly-requrest.js"; //文件路径请换成本地路径
req.defaultData.baseUrl = "http://127.0.0.1:8081"; //公共请求基础地址
req.defaultData.dataPublic.token = "0000-1111-2222-3333" //设置token值
req.defaultData.isRemoveNull = true; //是否处理后端传入数据为null的情况
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

|   属性名   |   类型   |                             描述                             |
| :--------: | :------: | :----------------------------------------------------------: |
|   title    |  string  |       是否显示请求提示，推荐8字以内，默认为false不显示       |
|  outTitle  |  String  |       是否显示成功提示，推荐8字以内，默认为false不显示       |
|    path    |  string  |                  请求路径；可以请求外部地址                  |
|   method   |  string  |                          请求的方式                          |
|   header   |  object  |                            请求头                            |
|  dataType  |  string  | 后端返回的数据类型，默认为json，会对返回的数据做一次JSON.parse |
|    data    |  object  |        请求的参数，设置了dataPublic会默认带上公共参数        |
| beforeAjax | function |  请求前置拦截，可拦截参数与结束请求操作，常用于验证某些数据  |
| afterAjax  | function |          请求后置拦截，常用于为后端返回的数据做处理          |
|   error    | function |                       错误信息拦截处理                       |



### 错误信息表

| 状态码statusCode | 描述msg    |
| ---------------- | ---------- |
| 201              | 拦截成功   |
| 202              | 网络错误   |
| 203              | 取消选择   |
| 204              | 地址错误   |
| 205              | 服务器错误 |
| 0                | 未知错误   |



> 错误信息只是归纳了一些常报的错误，具体的信息要自己检查，不能完全依靠此信息







### 欢迎补充  984584014@qq.com 



![入坑群993987980](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/91ff8a44a677919f0ada4bb62d426dfcd4b3b9b1826dcdda99c472989902fe9a20da660ef9248458b98e1e9244a4032e?pictype=scale&from=30013&version=3.3.3.3&uin=984584014&fname=uniapp%E6%8F%92%E4%BB%B6%E7%BE%A4%E8%81%8A%E4%BA%8C%E7%BB%B4%E7%A0%81.png&size=256)

### 更多插件请前往  [GitHub](https://github.com/web-liuyang/uni-app-tools)

------

<p style="text-align:right;font-size:14px;color:#999999;">文档更新时间：2020-09-03</p>

