
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class MainUI extends View {
		public bg:Laya.Image;
		public far:Laya.Sprite;
		public ground:Laya.Sprite;
		public building:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":640,"top":0,"right":0,"left":0,"height":1136,"bottom":0},"child":[{"type":"Image","props":{"var":"bg","top":0,"skin":"scene1/tian1.png","right":0,"left":0,"bottom":0}},{"type":"Sprite","props":{"y":4,"x":0,"width":640,"var":"far","height":1136},"child":[{"type":"Image","props":{"y":717,"x":0,"skin":"scene1/yuanshan1.png","scaleY":0.5,"scaleX":0.5}},{"type":"Image","props":{"y":785,"skin":"scene1/yuanshan1.png","scaleY":0.5,"scaleX":0.5,"right":0,"left":0,"height":237}},{"type":"Image","props":{"y":718,"x":399,"skin":"scene1/yuanshan1.png","scaleY":0.5,"scaleX":0.5}},{"type":"Image","props":{"y":855,"x":0,"skin":"scene1/qianjing1.png"}},{"type":"Image","props":{"y":855,"x":398,"skin":"scene1/qianjing1.png"}}]},{"type":"Sprite","props":{"y":965,"x":0,"width":640,"var":"ground","height":178},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"scene1/dimian1.png"}},{"type":"Image","props":{"y":0,"x":198,"skin":"scene1/dimian1.png"}},{"type":"Image","props":{"y":0,"x":396,"skin":"scene1/dimian1.png"}},{"type":"Image","props":{"y":0,"x":594,"skin":"scene1/dimian1.png"}}]},{"type":"Sprite","props":{"y":340,"x":0,"var":"building"},"child":[{"type":"Image","props":{"y":489,"x":167,"skin":"scene1/fangzhi1-1.png"}},{"type":"Image","props":{"y":512,"skin":"scene1/fangzhi1-2.png"}},{"type":"Image","props":{"x":180,"skin":"scene1/yun1-1.png"}},{"type":"Image","props":{"y":162,"x":68,"skin":"scene1/yun1-2.png"}},{"type":"Image","props":{"y":155,"x":242,"skin":"scene1/yun1-3.png"}},{"type":"Image","props":{"y":339,"x":318,"skin":"scene1/yun1-1.png"}},{"type":"Image","props":{"y":403,"x":333,"skin":"scene1/chengbao1.png"}},{"type":"Image","props":{"y":588,"x":446,"skin":"scene1/men1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MainUI.uiView);

        }

    }
}
