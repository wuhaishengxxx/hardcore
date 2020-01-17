
require('./js/config.js');
require('./js/audio.js');
// 华为库
require('./libs/huawei-adapter.js');
// laya库
require('./libs/laya.core.js');
require('./libs/laya.ani.js');
require('./libs/laya.html.js');
require('./libs/laya.webgl.js');
require('./libs/laya.filter.js');  
require('./libs/laya.ui.js');
require('./js/hardcore.js');

let GameMain = window.hardcore.GameMain;
let main = new GameMain();
main.init('MiniAdpter',true);