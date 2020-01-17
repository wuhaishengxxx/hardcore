module  hardcore {
    /**
     *  测试主界面
     */
    export  class MainPanel  extends  ui.MainUI {
        constructor(){
            super();
            // 适配高度
            this.height = Laya.stage.height;
        }
    }
}