### cache使用方式

#### return: [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)



### 使用指南

##### 全局使用（推荐）

```js
//main.js
import {cache} from "common/ly-tools/ly-cache/ly-cache.js"; //文件路径请换成本地路径
cache.timeout = 86400;//设置超时时间（秒），默认为86400（一天）
Vue.prototype.$ly = {cache}; //挂载在原形上
```

##### 局部使用

```js
import {cache} from "common/ly-tools/ly-cache/ly-cache.js"; //文件路径请换成本地路径
cache.set("user",{name:"LiuYang"});
cache.get("user"); // {name:"LiuYang"}
```



### 代码演示

##### 1.设置缓存

```js
const data = this.$ly.cache.set("user",{name:"LiuYang"});
console.log(data); // {msg:"保存成功",data:{name:"LiuYang"}}
```

##### 2.获取缓存

```js
const data = this.$ly.cache.get("user");
console.log(data); // {msg:"ok",data:{name:"LiuYang"}};
//如果数据过期了会返回 {msg:"数据过期",data:null}
```

##### 3.删除缓存

```js
const data =  this.$ly.cache.remove("user");
console.log(data); //{msg:"删除成功",data:null}
```

##### 4.清空缓存

```js
const data = this.$ly.cache.clear();
console.log(data); //{msg:"清空成功",data:null}
```



### 参数说明

#### cache.set(key,value,timeout)

| 参数名  |  类型  | 必填 |                             说明                             |
| :-----: | :----: | :--: | :----------------------------------------------------------: |
|   key   | String |  是  |                    本地缓存中的指定的 key                    |
|  value  | Object |  是  | 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象 |
| timeout | Number |  否  |                设置数据过期时间，0为永久存储                 |

#### cache.get(key);

| 参数名 |  类型  | 必填 |          说明          |
| :----: | :----: | :--: | :--------------------: |
|  key   | String |  是  | 本地缓存中的指定的 key |

#### cache.remove(key)

```js
this.$ly.cache.set(key)
```

| 参数名 |  类型  | 必填 |          说明          |
| :----: | :----: | :--: | :--------------------: |
|  key   | String |  是  | 本地缓存中的指定的 key |

#### cache.clear()

清理本地数据缓存







欢迎补充  984584014@qq.com 

更多插件请前往 [github](https://github.com/web-liuyang/uni-app-tools)

------

<p style="text-align:right;font-size:14px;color:#999999;">文档更新时间：2020-05-06</p>