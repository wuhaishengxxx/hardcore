window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 OPPO MiniGame NetType/WIFI Language/zh_CN';

require('./libs/laya.core.js');
require('./libs/laya.ani.js');
require('./libs/laya.html.js');
require('./libs/laya.webgl.js');
require('./libs/laya.filter.js'); //filter 要放在webgl 后
require('./libs/laya.ui.js');
require('./libs/laya.quickgamemini.js');

require('./js/config.js');
require('./js/audio.js');
require('./js/hardcore.js');

let GameMain = window.hardcore.GameMain;
let main = new GameMain();
main.init("QGMiniAdapter");
