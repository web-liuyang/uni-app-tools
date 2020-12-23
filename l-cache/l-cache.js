/**
 * @description 返回数据时提示的消息
 * @param {String} msg 返回的消息
 * @param {Object} data 返回的数据
 * @returns { { msg,data } }
 */
function msg(msg = '请传递消息', data = null) {
	return { msg, data };
}
let map = new Map(),
	storage = uni.getStorageInfoSync(); //所有数据缓存
console.log('cache.js');
/**
 * @description 缓存类
 * @class 缓存类class
 */
class Cache {
	/**
	 * @constructor
	 * @param {Number} [timeout=86400] 缓存时间默认86400秒等于一天，传0为永久存储
	 */
	constructor(timeout = 86400) {
		// 把本地缓存数据存入map中
		storage.keys.forEach((key) => map.set(key, uni.getStorageSync(key)));
		this.map = map; //map数据
		this.timeout = timeout;
	}
	/**
	 * @description 设置缓存数据
	 * @param {String} key 存储的key
	 * @param {Object} data 存储的data数据
	 * @param {String} [timeout] 缓存时间，传0为永久存储
	 * @returns { {msg,data} } 
	 */
	set(key, data, timeout = this.timeout) {
		//data = 数据value值，超时时间，加入缓存时间
		Object.assign(data, { createTime: Date.now(), timeout });
		uni.setStorageSync(key, data); //保存到本地缓存
		this.map.set(key, data); //保存到map
		return msg('保存成功', data);
	}
	/**
	 * @description 获取缓存数据
	 * @param {String} key 存储的key
     * @returns { {msg,data | data:null} } 
	 */
	get(key) {
		let value = this.map.get(key); //取值
		if (!value) return msg('没有key值'); //如果没有值，那就就返回空
		// 数据，超时时间，加入缓存时间           现在时间                 时间差(秒)
		let { timeout, createTime, ...data } = value,
			presentTime = Date.now(),
			tdoa = (presentTime - createTime) / 1000;
		// 超出缓存时间，那么就清除缓存返回空
		if (timeout != 0 && tdoa > timeout) {
			uni.removeStorageSync(key);
			this.map.delete(key); //删除map中对应的key值
			return msg('数据过期');
		} else {
			return msg('ok', data);
		}
	}
	/**
	 * @description 清除某个缓存数据
	 * @param {String} key 存储的key
     * @returns { {msg,data:null} } 
	 */
	remove(key) {
		uni.removeStorageSync(key); //删除缓存的数据
		this.map.delete(key); //删除map中对应的key值
		return msg('删除成功');
	}
	/**
	 * @description 清除整个缓存数据
     * @returns { {msg,data:null} } 
	 */
	clear() {
		uni.clearStorageSync(); //清空缓存的数据
		this.map.clear(); //清空map
		return msg('清空成功');
	}
	/**
	 * @description 获取缓存数据大小
     * @param { function } cb - 缓存大小
	 */
	getSize(cb) {
		plus.cache.calculate((size) => {
			let sizeCache = parseInt(size);
			let cacheSize;
			if (sizeCache == 0) {
				cacheSize = '0B';
			} else if (sizeCache < 1024) {
				cacheSize = sizeCache + 'B';
			} else if (sizeCache < 1048576) {
				cacheSize = (sizeCache / 1024).toFixed(2) + 'KB';
			} else if (sizeCache < 1073741824) {
				cacheSize = (sizeCache / 1048576).toFixed(2) + 'MB';
			} else {
				cacheSize = (sizeCache / 1073741824).toFixed(2) + 'GB';
			}
			cb(cacheSize);
		});
	}
}
export default new Cache();
