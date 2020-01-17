var hardcore;
(function (hardcore) {
    var GameMain = /** @class */ (function () {
        function GameMain() {
        }
        GameMain.prototype.init = function (adapter, useRetinalCanvas) {
            if (useRetinalCanvas === void 0) { useRetinalCanvas = null; }
            Laya[adapter] && Laya[adapter].init();
            // 刘海屏适配
            var yOffset = window["adapter"] && window["adapter"].top || 0;
            Laya.init(hardcore.GameConfig.SCREEN_WIDTH, hardcore.GameConfig.SCREEN_HEIGHT + yOffset, Laya.WebGL);
            var stage = Laya.stage;
            stage.screenMode = "none";
            stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            stage.alignH = Laya.Stage.ALIGN_CENTER;
            var isFitHeight = Laya.Browser.clientWidth / Laya.Browser.clientHeight
                > hardcore.GameConfig.SCREEN_WIDTH / (hardcore.GameConfig.SCREEN_HEIGHT + yOffset);
            var scaleMode = isFitHeight ? Laya.Stage.SCALE_FIXED_HEIGHT : Laya.Stage.SCALE_FIXED_WIDTH;
            stage.scaleMode = scaleMode;
            //华为适配 
            useRetinalCanvas && (Config['useRetinalCanvas'] = useRetinalCanvas); // 华为适配需要启用这个
            // 魅族低版本适配
            if (window["mz"] && window["mz"].getAndroidVersion() <= 23) {
                stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
            Laya.loader.load('res/atlas/scene1.atlas', Laya.Handler.create(this, this.openUI));
        };
        GameMain.prototype.openUI = function () {
            var main = new hardcore.MainPanel();
            Laya.stage.addChild(main);
        };
        return GameMain;
    }());
    hardcore.GameMain = GameMain;
})(hardcore || (hardcore = {}));
window['hardcore'] = hardcore;

var hardcore;
(function (hardcore) {
    var GameConfig = /** @class */ (function () {
        function GameConfig() {
        }
        GameConfig.SCREEN_WIDTH = 640;
        GameConfig.SCREEN_HEIGHT = 1136;
        return GameConfig;
    }());
    hardcore.GameConfig = GameConfig;
})(hardcore || (hardcore = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var MainUI = /** @class */ (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            return _super.call(this) || this;
        }
        MainUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MainUI.uiView);
        };
        MainUI.uiView = { "type": "View", "props": { "width": 640, "top": 0, "right": 0, "left": 0, "height": 1136, "bottom": 0 }, "child": [{ "type": "Image", "props": { "var": "bg", "top": 0, "skin": "scene1/tian1.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Sprite", "props": { "y": 4, "x": 0, "width": 640, "var": "far", "height": 1136 }, "child": [{ "type": "Image", "props": { "y": 717, "x": 0, "skin": "scene1/yuanshan1.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Image", "props": { "y": 785, "skin": "scene1/yuanshan1.png", "scaleY": 0.5, "scaleX": 0.5, "right": 0, "left": 0, "height": 237 } }, { "type": "Image", "props": { "y": 718, "x": 399, "skin": "scene1/yuanshan1.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Image", "props": { "y": 855, "x": 0, "skin": "scene1/qianjing1.png" } }, { "type": "Image", "props": { "y": 855, "x": 398, "skin": "scene1/qianjing1.png" } }] }, { "type": "Sprite", "props": { "y": 965, "x": 0, "width": 640, "var": "ground", "height": 178 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "scene1/dimian1.png" } }, { "type": "Image", "props": { "y": 0, "x": 198, "skin": "scene1/dimian1.png" } }, { "type": "Image", "props": { "y": 0, "x": 396, "skin": "scene1/dimian1.png" } }, { "type": "Image", "props": { "y": 0, "x": 594, "skin": "scene1/dimian1.png" } }] }, { "type": "Sprite", "props": { "y": 340, "x": 0, "var": "building" }, "child": [{ "type": "Image", "props": { "y": 489, "x": 167, "skin": "scene1/fangzhi1-1.png" } }, { "type": "Image", "props": { "y": 512, "skin": "scene1/fangzhi1-2.png" } }, { "type": "Image", "props": { "x": 180, "skin": "scene1/yun1-1.png" } }, { "type": "Image", "props": { "y": 162, "x": 68, "skin": "scene1/yun1-2.png" } }, { "type": "Image", "props": { "y": 155, "x": 242, "skin": "scene1/yun1-3.png" } }, { "type": "Image", "props": { "y": 339, "x": 318, "skin": "scene1/yun1-1.png" } }, { "type": "Image", "props": { "y": 403, "x": 333, "skin": "scene1/chengbao1.png" } }, { "type": "Image", "props": { "y": 588, "x": 446, "skin": "scene1/men1.png" } }] }] };
        return MainUI;
    }(View));
    ui.MainUI = MainUI;
})(ui || (ui = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hardcore;
(function (hardcore) {
    var MainPanel = /** @class */ (function (_super) {
        __extends(MainPanel, _super);
        function MainPanel() {
            var _this = _super.call(this) || this;
            _this.height = Laya.stage.height;
            return _this;
        }
        return MainPanel;
    }(ui.MainUI));
    hardcore.MainPanel = MainPanel;
})(hardcore || (hardcore = {}));
