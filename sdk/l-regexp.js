/**
 * @file 这是一个基于JS正则表达式封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */


/**
 * @property { RegExp } phone 手机号码判断11位数
 * @property { RegExp } password 密码判断6-12位英文与数字
 * @property { RegExp } number 6位数字判断
 * @property { RegExp } prc 汉字判断
 * @property { RegExp } price 金额合法判断
 * @property { RegExp } emall 邮箱判断
 * @property { Array } carNumPrefix 车牌号前缀
 */
let reglist = {
	phone: /^1[3456789]\d{9}$/, //手机号判断
	password: /\w{6,12}/, //密码判断
	number: /\d{6}/, //6位数字判断
	prc: /^[\u4e00-\u9fa5]$/, //汉字判断
	price: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/, //金额合法判断
	emall: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, // 邮箱判断
	//车牌号前缀
	carNumPrefix: [
		["京", "沪", "津", "渝", "冀", "豫", "云", "辽", "黑", "湘", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "蒙", "陕", "吉", "闽",
			"贵", "粤", "川", "青", "藏", "琼", "宁"
		],
		["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
			"X", "Y", "Z"
		]
	]
}

export {
	reglist, // 正则对象表
}
