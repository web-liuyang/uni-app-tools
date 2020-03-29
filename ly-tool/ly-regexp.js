/**
 * @file 这是一个基于JS正则表达式封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */

/**
 * 
 * @param {Number} phone 手机号判断
 * @param {String} password 密码正则判断
 * @param {Number} number 6位数字判断
 * @param {String} prc 中文判断
 * @param {Number} price 金额合法判断
 * @param {Array}  carNumPrefix 车牌号前缀大全,下标0是省份，下标1是城市
 */
let regexpList = {
    phone: new RegExp("^1[3456789]\\d{9}$"),
    password: new RegExp("\\w{6,12}"),
    number: new RegExp("\\d{6}"),
    prc: new RegExp("[\u2E80-\u2EFF\u2F00-\u2FDF\u3000-\u303F\u31C0-\u31EF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FBF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]", "g"),
    price = new RegExp("((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$"),
    carNumPrefix =[["京", "沪", "津", "渝", "冀", "豫", "云", "辽", "黑", "湘", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "蒙", "陕", "吉", "闽", "贵", "粤", "川", "青", "藏", "琼", "宁"], ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]]
}
/**
 * @class 初始化正则表达式列表
 * 
 */
class Reg {
    /**
     * @constructor
     * @description 这是一个构造函数
     */
    constructor() {
        this.regexpList = regexpList
    }
    /**
     * 判断该数字是否为11位正确手机号码
     * @example
     * let isTel = this.ly.reg.phone(12345678910)
     * @param {Number} tel 需要判断的手机号
     * @returns {Boolean} 返回布尔值
     */
    phone(tel) {
        return this.regexpList.phone.test(tel)
    }
}

export const ly = new Reg;