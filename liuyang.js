
// 工具类
/**http请求
 * 
 * @param {obj}  接受的参数
 * @param {method} 请求方式-默认GET
 * @param {url} 请求地址
 * @param {data} 发送的数据
 * @param {dataType} 返回的数据格式-默认JSON
 * @param {success} 成功回调
 * @param {fail} 失败回调
 * 
 */
export const request = {

}
export const ly = {
    // 优化类
    /** 防抖
     * 
     * @param {fn} 需要执行的函数
     * @param {time} 防抖时间
     * 
     **/
    antiShake(fn, time) {
        let antiShakefn = null;
        return function () {
            if (antiShakefn) clearTimeout(antiShakefn);
            antiShakefn = setTimeout(fn, time);
        }
    },
    request: {
        get(url, callback) {
            fetch(url).then(res => res.json()).then(data => {
                callback && callback(data)
            })
        },
        post(url, data, callback) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => {
                callback && callback(data)
            })
        }
    }
}

