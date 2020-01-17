// 适配文件
// 声音播放器
let gameAudioPlayer = {

    _soundMuted: false,  // true为静音
    _musicMuted: false,
    _bgMusicUrl: null,
    _bgMuiscPlayer: null,
    _soundMap: [], // 当前音效
    // 播放音乐  url  路径  loop  0 循环播放 1 一次性播放 callBack Laya.Handler
    playMusic: function (url, loop, callBack) {

        const self = this;
        if (self._musicMuted) return;
        self._bgMusicUrl = url;
        if (self._bgMuiscPlayer == null) {
            self._bgMuiscPlayer = qg.createInnerAudioContext();
            self._bgMuiscPlayer.autoplay = true;
        }

        self._bgMuiscPlayer.src = url;
        self._bgMuiscPlayer.loop = loop == 0;
        self._bgMuiscPlayer.play();
        callBack && callBack.run && callBack.run();
    },

    playSound: function (url, loop, callBack) {

        const self = this;
        if (self._soundMuted) return null;

        let audio = qg.createInnerAudioContext();
        audio.src = url;

        audio.loop = loop == 0;

        let endedSound = function () {
            audio && audio.offEnded(endedSound);
            audio && audio.stop();
            audio && audio.destroy && audio.destroy();
            callBack && callBack.run && callBack.run();
        }
        audio.play();
        audio.onEnded(endedSound);
        if (self._soundMap.length > 10) {
            let temp = self._soundMap.shift();
            temp && temp.destroy();
        }
        self._soundMap.push(audio);
        return audio;
    },

    // get set 设置音乐静音 true 静音 停止播放
    set musicMuted(value) {
        this._musicMuted = value;
        if (this._bgMuiscPlayer) {
            if (!value) {
                this._bgMusicUrl && this._bgMuiscPlayer.play();
            } else {
                this._bgMuiscPlayer.stop();
            }
        }
    },

    get musicMuted() {
        return this._musicMuted;
    },

    // 设置音效静音 true  设置静音
    set soundMuted(value) {
        this._soundMuted = value;
        if (value) {
            const map = this._soundMap;
            for (let i = 0; i < map.length; i++) {
                let temp = map[i];
                if (temp) {
                    temp.stop();
                    temp.destroy();
                }
            }
            this._soundMap.length = 0;
        }
    },
    get soundMuted() {
        return this._soundMuted;
    },
}

window.gameAudioPlayer = gameAudioPlayer;