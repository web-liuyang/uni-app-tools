/**
 * @file 这是一个基于uniapp中的常用API进行的封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */

/**
 * @description 把字符串分割成数组
 * @param {Array} str 需要分割的字符串
 * @param {String} split 以什么方式分割，默认英文逗号','
 * @returns {Array} 分割后的数组
 */
const stringSplitArray = (str, split = ',') => {
	return str.split(split);
};

/**
 * @description 把数组拼接为字符串
 * @param {Array} arr 需要拼接的数组
 * @returns { string } 拼接后的字符串
 */
const arrJoinString = (arr) => {
	return arr.join(',');
};

/**
 * @description 获取节点信息
 * @param { string } select 选择器
 * @param { object } _this 当前页面实例
 * @returns {Promise} 返回节点信息
 */
const node = (select, _this) => {
	return new Promise((resolv) => {
		const query = uni.createSelectorQuery().in(_this);
		query
			.select(select)
			.boundingClientRect((data) => {
				resolv(data);
			})
			.exec();
	});
};

/**
 * @description 直线距离计算
 * @param { number | string } lat 纬度
 * @param { number | string } lon 经度
 * @returns {Promise} 返回两端之间的距离,单位米
 */
const straightDistance = (lat, lon) => {
	return new Promise((resolv) => {
		uni.getLocation({
			type: 'gcj02',
			success: (res) => {
				var EARTH_RADIUS = 6378137.0;
				var PI = Math.PI;

				function getRad(d) {
					return (d * PI) / 180.0;
				}
				var radLat1 = getRad(res.latitude);
				var radLat2 = getRad(lat);
				var a = radLat1 - radLat2;
				var b = getRad(res.longitude) - getRad(lon);
				var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(
					Math.sin(b / 2), 2)));
				s = s * EARTH_RADIUS;
				s = Math.round(s * 10000) / 10000.0;
				resolv(Math.floor(s)); // m
			},
		});
	});
};

/**
 * @description 页面实例获取
 * @param { Number | String } [num=1] 默认获取上一页面实例，数字几就返回前几页的实例
 * @return {Object} 返回页面实例
 */
const getPageInstance = (num = 1) => {
	const pages = getCurrentPages();
	return pages[pages.length - 1 - num].$vm;
};

/**
 * @description 深拷贝引用类型数据
 * @template T 
 * @param { T } obj 需要深拷贝的数据
 * @@returns { T } 返回全新的数据
 */
const deepCopy = (obj) => {
	let objClone = Array.isArray(obj) ? [] : {};
	if (obj && typeof obj === 'object') {
		for (let key in obj) {
			if (obj[key] && typeof obj[key] === 'object') {
				objClone[key] = deepCopy(obj[key]);
			} else {
				objClone[key] = obj[key];
			}
		}
	}
	return objClone;
};

/**
 * @description 金额运算
 * @param { '+' | '-' | '*' | '/' } method 计算方法
 * @param { string | number} args 需要参与计算的数值或字符串
 * @return { number } 计算后的值
 */
const operation = (method, ...args) => {
	const arr = args.map((item) => parseInt((item *= 100)));
	let num = 0;
	switch (method) {
		case '+':
			num = arr.reduce((total, item) => total + item) / 100;
			break;
		case '-':
			num = arr.reduce((total, item) => total - item) / 100;
			break;
		case '*':
			num = arr.reduce((total, item) => (total * item) / 100, 1);
			break;
		case '/':
			num = arr.reduce((total, item) => (total * 100) / item) / 100;
			break;
	}
	return num;
};

/**
 * @description 防抖
 * @param { function } handler - 触发的函数
 * @param { number } delay - 时间默认500毫秒
 */
const debounce = function(handler, delay = 500) {
	let timer;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(()=> {
			const arrArgs = Array.from(arguments);
			handler.apply(this, arrArgs);
		}, delay);
	};
};

/**
 * @description 判断对象与数组是否为空
 * @param { object | array } obj - 对象
 * @returns { boolean } - 空true 非空false
 */
const empty = (obj) => {
	for (const key in obj) {
		return false;
	}
	return true;
};

export {
	node, // 节点信息
	straightDistance, // 直线距离计算
	getPageInstance, // 页面实例获取
	deepCopy, // 深拷贝
	stringSplitArray, // 把字符串分割为数组
	arrJoinString, // 把数组拼接为字符串
	operation, // 金额运算
	debounce, // 防抖
	empty, // 判断对象与数组是否为空
};
