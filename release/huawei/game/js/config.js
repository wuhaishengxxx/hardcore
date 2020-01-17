// 配置 
window.gameVersion = 'v1.2.5';
// 游戏的版本
window.gameVersionCode = 4;
//资源路径
window.REVIEW_GAME_RES_PATH = "";
// 是否是硬核
window.isHardCore = true;
// 屏幕适配
window.adapter = {
    top: 80,  // 顶部适配 y + 
    bottom: 160,  // 底部适配 y -
    resetTop: true, // 是否重新调整顶部
}
 
const onError = function (res) {
    console.info("onError message = " + res.message + ", stack = " + res.stack);
}
hbs.onError(onError);

 

