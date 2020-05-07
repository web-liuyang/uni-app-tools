/**
 * @file 这是一个基于HTML5+ API 原生扩展进行的封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */
console.log("native");
let main = plus.android.runtimeMainActivity(); // 获取应用主Activity实例对象
let Context = plus.android.importClass("android.content.Context") //有关应用程序环境的全局信息
let Settings = plus.android.importClass("android.provider.Settings"); //导入设置操作Java类
let intent = plus.android.newObject("android.content.Intent"); //直接创建Intent类的实例对象
class Native {
    constructor() {

    }
    /**
     * @description 判断WiFi是否开启
     * @return {Boolean} true开启
     */
    isWifiEnabled(isSettings = false) {
        plus.android.importClass("android.net.wifi.WifiManager"); //导入wifi管理Java类
        let wifiManager = main.getSystemService(Context.WIFI_SERVICE); //获取WiFi的上下文
        let isWiFiEnabled = wifiManager.isWifiEnabled(); //wifi是否开启
        // 是否打开WIFI设置页面
        if(!isWiFiEnabled && isSettings){
            plus.android.invoke(intent, "setAction", Settings.ACTION_WIFI_SETTINGS) //设置要执行的操作 -> 系统设置WIFI服务页面 
            main.startActivity(intent); //执行 -> 打开系统设置WIFI服务页面 
        }
        return isWiFiEnabled
    }
    /**
     * @description 判断GPS是否开启
     * @param {Boolean} isSettings 如果没有开启GPS是否弹出GPS设置页面
     * @return {Boolean} isGPSEnabled true开启
     */
    isProviderEnabled(isSettings = false) {
        plus.android.importClass("android.location.LocationManager"); //导入位置管理Java类
        let locationManager = main.getSystemService(Context.LOCATION_SERVICE); //获取位置的上下文
        let isGPSEnabled = locationManager.isProviderEnabled(locationManager.GPS_PROVIDER); //是否打开gps
        // 是否打开GPS设置页面
        if (!isGPSEnabled && isSettings) {
            plus.android.invoke(intent, "setAction", Settings.ACTION_LOCATION_SOURCE_SETTINGS) //设置要执行的操作 -> 系统设置GPS服务页面 
            main.startActivity(intent); //执行 -> 打开系统设置GPS服务页面 
        }
        return isGPSEnabled;
    }
}
export default new Native(); //导出Native实例
let native = new Native();
// console.log(native.isWifiEnabled(true));
// console.log(native.isProviderEnabled(true));

