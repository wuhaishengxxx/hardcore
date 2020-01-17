// 配置 
 
// 审核的资源路径
window.REVIEW_GAME_RES_PATH = "";
// 是否是硬核
window.isHardCore = true;
// 顶部适配高度 没有设置就是不进行适配
window.adapter = {
    top: 80,  // 顶部适配 y + 
    bottom: 160,  // 底部适配 y -
    resetTop: false, // 是否重新调整顶部
}

qg.onError((res) => {
    console.info('Error: ', res.location, res.message, res.stack);
})
 
