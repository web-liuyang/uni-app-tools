/**
 * @file 这是一个基于JS正则表达式封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */
let regexpList = {
    phone: new RegExp("^1[3456789]\\d{9}$"), //手机号判断
    password: new RegExp("\\w{6,12}"), //密码判断
    number: new RegExp("\\d{6}"), //6位数字判断
    prc: new RegExp("^[\u4e00-\u9fa5]$"), //汉字判断
    price: new RegExp("((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$"), //金额合法判断
    //车牌号前缀
    carNumPrefix: [["京", "沪", "津", "渝", "冀", "豫", "云", "辽", "黑", "湘", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "蒙", "陕", "吉", "闽", "贵", "粤", "川", "青", "藏", "琼", "宁"], ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]]
}
/**
 * @class
 */
class Reg {
    constructor() {
        this.regexpList = regexpList
    }
    phone(tel) {
        return this.regexpList.phone.test(tel);
    }
    password(pwd) {
        return this.regexpList.password.test(pwd);
    }
    number(num) {
        return this.regexpList.number.test(num);
    }
    prc(cn) {
        return this.regexpList.prc.test(cn);
    }
    price(price) {
        return this.regexpList.phone.test(price);
    }

}
export const reg = new Reg();