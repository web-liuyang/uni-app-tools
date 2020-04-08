/**
 * @file 这是一个基于uniapp中的常用API进行的封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */
// 节点信息
/**
 * @description 获取节点信息
 * @param {IDString} select 选择器
 * @param {object} _this 当前页面实例
 * @returns {Promise} 返回节点信息
 */
export function node(select, _this) {
    return new Promise(resolv => {
        const query = uni.createSelectorQuery().in(_this);
        query.select(select).boundingClientRect(data => {
            resolv(data)
        }).exec();
    })
}

// 距离计算
/**
 * @description 直线距离计算
 * @param {number|string} lat2 纬度
 * @param {number|string} lng2 经度
 * @returns {Promise} 返回两端之间的距离,单位米
 */
export const straightDistance = function(lat2, lng2) {
    return new Promise((resolv) => {
        uni.getLocation({
            type: "gcj02",
            success: (res) => {
                var EARTH_RADIUS = 6378137.0;
                var PI = Math.PI;
                function getRad(d) {
                    return d * PI / 180.0;
                }
                var radLat1 = getRad(res.latitude);
                var radLat2 = getRad(lat2);
                var a = radLat1 - radLat2;
                var b = getRad(res.longitude) - getRad(lng2);
                var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) *
                    Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
                s = s * EARTH_RADIUS;
                s = Math.round(s * 10000) / 10000.0;
                resolv(Math.floor(s)) // m
            }
        })
    })
}