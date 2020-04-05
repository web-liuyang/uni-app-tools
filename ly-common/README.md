### 介绍

本章节是基于uniapp常用API进行的封装，再次开发者们可以找到自己想用的封装进行使用



### 使用指南

##### 全局使用（量多推荐）

```js
//main.js
import tool from "common/ly-common/ly-common"; //文件路径请换成本地路径
Vue.prototype.$ly = {tool}; //挂载在原形上
//全局加载，更方便使用SDK内所有封装
```

##### 按需加载（量少推荐）

```js
import {node} from "common/ly-common/ly-common";//文件路径请换成本地路径
Vue.prototype.$ly = {
    tool:{
        node
    }
}; //挂载在原形上
//按需加载，减少代码量更轻巧
```
##### 局部使用

```js
import {node} from "common/ly-common/ly-common";//文件路径请换成本地路径
//局部使用，只在当前页面或组件中使用部分封装
```


##### 代码演示

```js
//例1：全局加载|按需加载
//获取节点信息
const data = await this.$ly.tool.node("#box",this); //传入选择器与this
console.log(data) //获取到的节点信息

//例2：局部使用
//获取节点信息
const data = await node("#box",this); //传入选择器与this
console.log(data) //获取到的节点信息
```



### 节点信息


```js
const data = await this.$ly.tool.node(select,this);
console.log(data);	//返回节点信息
```

| 参数   | 描述   | 说明                   |
| ------ | ------ | ---------------------- |
| select | 选择器 | 请在DOM加载完后调用    |
| this   | 实例   | 获取当前页面的实例对象 |



### 距离计算

#### 当前坐标到目标坐标的直线距离

```js
const data = await this.$ly.tool.straightDistance(lat,lng);
console.log(data);	//当前坐标到目标坐标的直线距离，单位米
```

| 参数 | 描述     | 说明          |
| ---- | -------- | ------------- |
| lat  | 目标纬度 | 统一使用gcj02 |
| lng  | 目标经度 | 统一使用gcj02 |

