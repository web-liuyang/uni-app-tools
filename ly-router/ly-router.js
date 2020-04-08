/**
 * @file 这是一个基于uniapp中的页面跳转API进行的封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */
let defaultData = {
    encode: false, //默认不启用encodeURIComponent方式
}

class Router {
    constructor() {
        this.defaultData = defaultData
    }
    /**
     * @description 相当于uni.navigateTo()。
     * 保留当前页面，跳转到应用内的某个页面，使用router.back(1)可以返回到原页面。
     */
    push(router, encode = this.defaultData.encode,...arg) {
        let url = ""; //初始化URL
        if (typeof router == "object") { //判断是否是对象格式
            url = router.path; //跳转路径赋值
            if (router.query) { //是否带了参数
                // 结构参数
                let [key, value] = [Object.keys(router.query), Object.values(router.query)];
                if (encode) { //是否选择encodeURIComponent方式传参
                    url += `?${key}=${encodeURIComponent(JSON.stringify(value))}`;
                } else {
                    key.forEach((item, index, arr) => {
                        index == 0 ? url += `?${item}=${value[index]}` : url += `&${item}=${value[index]}`
                    });
                }
            }
        } else {
            //为string格式直接赋值
            url = router;
        }
        // 跳转
        uni.navigateTo({
            url,
        });
    }
    /**
     * @description 相当于uni.redirectTo()。
     * 关闭当前页面，跳转到应用内的某个页面。
     */
    replace(router, encode = this.defaultData.encode,...arg) {
        let url = ""; //初始化URL
        if (typeof router == "object") { //判断是否是对象格式
            url = router.path; //跳转路径赋值
            if (router.query) { //是否带了参数
                // 结构参数
                let [key, value] = [Object.keys(router.query), Object.values(router.query)];
                if (encode) { //是否选择encodeURIComponent方式传参
                    url += `?${key}=${encodeURIComponent(JSON.stringify(value))}`;
                } else {
                    key.forEach((item, index, arr) => {
                        index == 0 ? url += `?${item}=${value[index]}` : url += `&${item}=${value[index]}`
                    });
                }
            }
        } else {
            //为string格式直接赋值
            url = router;
        }
        // 跳转
        uni.redirectTo({
            url,
        });
    }
    /**
     * @description 相当于uni.reLaunch()。
     * 关闭所有页面，打开到应用内的某个页面。
     */
    replaceAll(router, encode = this.defaultData.encode,...arg) {
        let url = ""; //初始化URL
        if (typeof router == "object") { //判断是否是对象格式
            url = router.path; //跳转路径赋值
            if (router.query) { //是否带了参数
                // 结构参数
                let [key, value] = [Object.keys(router.query), Object.values(router.query)];
                if (encode) { //是否选择encodeURIComponent方式传参
                    url += `?${key}=${encodeURIComponent(JSON.stringify(value))}`;
                } else {
                    key.forEach((item, index, arr) => {
                        index == 0 ? url += `?${item}=${value[index]}` : url += `&${item}=${value[index]}`
                    });
                }
            }
        } else {
            //为string格式直接赋值
            url = router;
        }
        // 跳转
        uni.reLaunch({
            url,
        });
    }
    /**
     * @description 相当于uni.switchTab()。
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
     */
    pushTab(router, ...arg) {
        let url = ""; //初始化URL
        if (typeof router == "object") { //判断是否是对象格式
            url = router.path; //跳转路径赋值
        } else {
            //为string格式直接赋值
            url = router;
        }
        // 跳转
        uni.switchTab({
            url,
        });
    }
    /**
     * @description 相当于uni.navigateBack()。
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
     */
    back(number=1, ...arg) {
        // 跳转
        uni.navigateBack({
            delta: number
        });
    }
    /**
     * @description 解析encodeURIComponent
     * @param {Object} encodeURIComponent 需要解析的参数
     * @return {Object} 返回解析后的对象
     */
    decode(encodeURIComponent){
        return JSON.parse(decodeURIComponent(encodeURIComponent));
    }
    /**
     * @description 获取页面栈实例
     * @param {Number} number 获取哪一页的数据
     * @param {Boolean} isAll 是否返回全部页面栈实例
     * @return {Object} 返回获取的实例 
     */
    vm(number = 0,isAll = false){
        let page = getCurrentPages();
        number =+number // 转换number为数字
        if(!number){
            return isAll ? {vm:page[page.length - 1],all:page} : {vm:page[page.length - 1]}; //当前页面栈实例
        }else{
            return isAll ? {vm:page[page.length - (number + 1)],all:page} : {vm:page[page.length - (number + 1)]}; //返回选择的页面栈
        }
    }
}
export const router = new Router(); //导出实例化对象
