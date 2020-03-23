/**
 * @file 这是一个基于uniapp中的异步请求封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */
// 默认值处理
const defaultData = {
    baseUrl: '', // 基础地址
    data: {}, //  请求的参数
    method: "GET", //默认请求方式
    header: {
        'content-type': "application/x-www-form-urlencoded" //默认请求头
    },
    dataType: "json", //默认返回数据为JSON格式  
    setToken: {
        token: '' // 默认token 值为空
    }
}
// 
class Request {
    /**
     * @constructor
     * @memberof Request
     */
    // 构造函数
    constructor() {
        this.defaultData = defaultData;
    }
    /**
    * @param {title} 是否需要显示loading加载提示框，title值就是loading的值
    * @param {path} 请求的地址
    * @param {data} 请求带过去的参数 默认为空对象
    * @param {method} 请求的方式 默认为GET大写
    * @param {header} 请求头信息 默认为 content-type':"application/x-www-form-urlencoded
    * @param {dataType} 返回的信息默认为json会尝试进行一次json解析
    * @returns {Promise} 返回一个Promise对象
    */
    // 请求
    ajax({
        title = false,
        path = '',
        data = this.defaultData.data,
        method = this.defaultData.method,
        header = this.defaultData.header,
        dataType = this.defaultData.dataType
    }) {
        return new Promise((resolve, reject) => {
            // 如果token存在，那么合并token值; 
            this.defaultData.setToken.token && Object.assign(data, this.defaultData.setToken);
            //拿到请求的信息
            const requestInfo = {
                url: this.defaultData.baseUrl + path, //拼接请求地址
                data,
                method,
                header,
                dataType
            }
            // 如果title值存在，就显示loading，标题就是显示的值
            if (title) (uni.showLoading({
                title,
                mask: true
            }));
            // 开始请求
            uni.request({
                ...requestInfo, //请求的参数
                complete: (rtnInfo) => {
                    // 如果请求错误那么直接返回，不再进行操作
                    if (rtnInfo.statusCode != 200) {
                        reject("请求错误");
                    } else {
                        // 请求成功返回
                        resolve(rtnInfo.data)
                    }
                    uni.hideLoading() //隐藏加载loading框
                }
            })
        })
    }
}
export const ly = new Request();
