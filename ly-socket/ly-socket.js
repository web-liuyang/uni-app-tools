/**
 * @file 这是一个基于uniapp中的WebSocket封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */

let defaultData = {
    url:'' //WebSocket接口地址
}
/**
 * @class
 */
class Websocket {
    constructor(){
        this.defaultData = defaultData;
    }
    /**
     * @description 创建websocket
     */
    connect(){
        this.socketTask = uni.connectSocket({
            url:this.defaultData.url,
            complete:(rtnInfo)=>{
                console.log(rtnInfo)
            }
        })
    }
}


 

