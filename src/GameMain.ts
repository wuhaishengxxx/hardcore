

module hardcore {

    /**
     * 测试用的主页面 
     * 实际项目中 该工程可以当做首页工程或者选服工程
     * 通过该工程去加载游戏主程序，提高首屏速度
     */
    export class GameMain {

        constructor() { }

        /**
         * 
         * @param adapter  Laya提供的适配接口  
         * @param useRetinalCanvas  目前针对华为使用
         */
        public init(adapter: string,useRetinalCanvas :boolean  = null): void {
            // laya小游戏适配库初始化
            Laya[adapter] && Laya[adapter].init();
            // 刘海屏适配 顶部向下偏移 具体适配还需要按照真实项目来，这里不做具体实现
            const yOffset = window["adapter"] && window["adapter"].top || 0;

            Laya.init(GameConfig.SCREEN_WIDTH, GameConfig.SCREEN_HEIGHT + yOffset, Laya.WebGL);

            const stage = Laya.stage;
            stage.screenMode = Laya.Stage.SCREEN_NONE;

            stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            stage.alignH = Laya.Stage.ALIGN_CENTER;
            // 根据宽高比填充
            const isFitHeight: boolean = Laya.Browser.clientWidth / Laya.Browser.clientHeight
                > GameConfig.SCREEN_WIDTH / (GameConfig.SCREEN_HEIGHT + yOffset);

            const scaleMode = isFitHeight ? Laya.Stage.SCALE_FIXED_HEIGHT : Laya.Stage.SCALE_FIXED_WIDTH;
            stage.scaleMode = scaleMode;

            //华为适配 华为适配需要启用这个
            useRetinalCanvas && (Config['useRetinalCanvas'] = useRetinalCanvas);  

            // 魅族低版本适配
            if (window["mz"] && window["mz"].getAndroidVersion() <= 23) {
                stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
            //  测试页面
            Laya.loader.load('res/atlas/scene1.atlas', Laya.Handler.create(this, this.openUI));
        }



        public openUI(): void {
            const main: MainPanel = new MainPanel();
            Laya.stage.addChild(main);
        }
    }
}
// 不采用module.exports 通过window['hardcore'] 去访问hardcore
window['hardcore'] = hardcore;

 
