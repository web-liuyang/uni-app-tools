/**
 * @file 这是一个基于uniapp中的异步请求封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */
const defaultData = {
    baseUrl: '', // 基础地址
    data: {}, //  传递的参数
    method: "GET", //默认请求方式
    header: {
        'content-type': "application/x-www-form-urlencoded" //默认请求头
    },
    dataType: "json", //默认返回数据为JSON格式  
    dataPublic: {} // 默认请求时带的公共参数 常用于设置token
}

class Request {
    // 构造函数
    constructor() {
        this.defaultData = defaultData;
    }
    /**
    * @param {string} title 是否需要显示loading加载提示框 title值就是loading的值
    * @param {string}  path 请求的地址 
    * @param {object} data 请求带过去的参数 默认为空对象
    * @param {string} method 请求的方式 GET
    * @param {json} header 请求头信息 content-type':"application/x-www-form-urlencoded
    * @param {string} dataType 默认json 返回的信息默认为json会尝试进行一次json解析
    * @returns {Promise}  返回一个Promise对象
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
            //合并公共参数
            Object.assign(data, this.defaultData.dataPublic);
            //拿到请求的信息
            const requestInfo = {
                // 外部请求就不拼接基础地址
                url:/^http/.test(path) ? path : this.defaultData.baseUrl + path,//拼接请求地址
                data, //需要传递的参数
                method, //请求方法
                header, //请求头
                dataType //返回的数据格式
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
export const req = new Request();
