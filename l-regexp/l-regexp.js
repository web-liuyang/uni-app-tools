/**
 * @description 正则对象表
 * @property { Object } reglist 正则对象
 * @property { RegExp } reglist.phone 手机号码判断11位数
 * @property { RegExp } reglist.password 密码判断6-12位英文与数字
 * @property { RegExp } reglist.number 6位数字判断
 * @property { RegExp } reglist.prc 汉字判断
 * @property { RegExp } reglist.price 金额合法判断
 * @property { RegExp } reglist.email 邮箱判断
 * @property { Array } reglist.carNumPrefix 车牌号前缀
 */
let reglist = {
	phone: /^1[3456789]\d{9}$/,
	password: /\w{6,12}/,
	number: /\d{6}/,
	prc: /^[\u4e00-\u9fa5]$/,
	price: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/,
	email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
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
	reglist, // 正则对象
}
