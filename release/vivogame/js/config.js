// 配置 
// 资源路径
window.REVIEW_GAME_RES_PATH = '';
// 是否是硬核
window.isHardCore = true;
// 顶部适配高度 没有设置就是不进行适配
// window.applyTop = 80;
window.adapter = {
    top: 80,  // 顶部适配 y + 
    bottom: 160,  // 底部适配 y -
    resetTop:true, // 是否重新调整顶部
}

window.localStorage = {
    getItem: function (key) {
        return qg.getStorageSync({ key: key, default: '' });
    },
    setItem: function (key, value) {
        qg.deleteStorageSync({ key: key });
        qg.setStorageSync({ key: key, value: value });
    },
    removeItem: function (key) {
        qg.deleteStorageSync({ key: key })
    }
}

var fun = function (data) {
    console.info(`error message is ${data.message}`)
}

qg.onError(fun)

 
