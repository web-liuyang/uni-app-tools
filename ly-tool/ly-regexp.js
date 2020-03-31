/**
 * @file 这是一个基于JS正则表达式封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */
/**
 * @description 正则表达式列表
 * @var {object}
 * @property {number} phone 手机号判断
 * @property {number} password 密码正则判断
 * @property {number} number 6位数字判断
 * @property {number} prc 汉字判断
 * @property {number} price 金额合法判断
 * @property {number} carNumPrefix 车牌号前缀
 * @example
 * this.ly.reg["需要使用的正则判断"]("需要判断的字符串")
 */
let regexpList = {
    phone: new RegExp("^1[3456789]\\d{9}$"),
    password: new RegExp("\\w{6,12}"),
    number: new RegExp("\\d{6}"),
    prc: new RegExp("^[\u4e00-\u9fa5]$"),
    price: new RegExp("((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$"),
    carNumPrefix: [["京", "沪", "津", "渝", "冀", "豫", "云", "辽", "黑", "湘", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "蒙", "陕", "吉", "闽", "贵", "粤", "川", "青", "藏", "琼", "宁"], ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]]
}
/**
 * @class
 */
class Reg {
    constructor() {
        this.regexpList = regexpList
    }
    /**
     * @description 正则判断11位正确手机号码
     * @param {number} tel 需要判断的手机号码（必填） 
     * @returns {boolean} 返回[true|false]
     * @example
     * this.ly.reg.phone(18284335838) //true
     * this.ly.reg.phone(1234567890) //false
     */
    phone(tel) {
        return this.regexpList.phone.test(tel);
    }
    /**
    * @description 正则判断6-12位密码
    * @param {number | str} pwd 需要判断的密码（必填） 
    * @returns {boolean} 返回[true|false]
    * @example
    * this.ly.reg.password(123456) //true
    * this.ly.reg.password(12345) //false
    */
    password(pwd) {
        return this.regexpList.password.test(pwd);
    }
    /**
     * @description 正则判断6为数字 （多用于6位支付密码）
     * @param {number} num 需要判断数字（必填） 
     * @returns {boolean} 返回[true|false]
     * @example
     * this.ly.reg.password(123456) //true
     * this.ly.reg.password(1234567890) //false
     */
    number(num) {
        return this.regexpList.number.test(num);
    }
    /**
     * @description 正则判断是否为汉字
     * @param {string} cn 需要判断的字符串（必填） 
     * @returns {boolean} 返回[true|false]
     * @example
     * this.ly.reg.prc("刘洋") //true
     * this.ly.reg.prc("LiuYang") //false
     */
    prc(cn) {
        return this.regexpList.prc.test(cn);
    }
    /**
     * @description 正则判断是否为合法金额
     * @param {number} price 需要判断金额
     * @returns {boolean} 返回[true|false]
     * @example
     * this.ly.reg.price(4.5) //true
     * this.ly.reg.price(0.001) //false
     * this.ly.reg.price(0.0.) //false
     * this.ly.reg.price(.0) //false
     * this.ly.reg.price(..) //false
     */
    price(price) {
        return this.regexpList.phone.test(price);
    }

}
export const ly = new Reg();