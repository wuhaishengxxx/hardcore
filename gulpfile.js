
// npm install  gulp   typescript gulp-concat   gulp-typescript gulp-typescript-filesort
//  gulp-filelist gulp gulp-shell glob silly-datetime   minimist tsify rollup  rollup-plugin-typescript2

const gulp = require("gulp");
const ts = require("gulp-typescript");
const sorter = require("gulp-typescript-sort");
const concat = require('gulp-concat');
const tsProject = ts.createProject("tsconfig.json");
const zip = require('gulp-zip');
var exec = require('child_process').exec;
const rollup = require("rollup");
const typescript = require('rollup-plugin-typescript2');



// 输出到的目录
// const outDir = "../trunk/wxgame/js/";
let outDir = "bin/js/"; // 魅族
// let outDir = 'release/quickgame/js/'  // oppo

function compileTSFile(fileName = 'hardcore.js') {
    return gulp.src([
        "libs/*.ts",
        "src/**/*.ts"
    ])
        .pipe(sorter(false))
        .pipe(tsProject())
        .pipe(concat(fileName))
        .pipe(gulp.dest(outDir));
}


// function roComple(out = 'bin/js/hardcore.js') {
//     return rollup.rollup({
//         input: './src/Main.ts',
//         treeshake: true,//建议忽略
//         plugins: [
//             typescript({
//                 check: false,
//                 clean: false,
//                 tsconfigOverride: { compilerOptions: { removeComments: true } }
//             }),

//         ]
//     }).then(bundle => {
//         return bundle.write({
//             file: out,
//             //   对于浏览器和 Node.js: umd 
//             // 对于 Node.js: cjs
//             // 对于浏览器：iife
//             format: 'iife',
//             name: 'hardcore',
//             sourcemap: false
//         });
//     });
// }


/**
 * 执行CDM命令
 * @param { } cmd 
 * @param {*} callBack 
 */
function executeCMD(cmd, callBack) {

    exec(cmd, function (error, stdout, stderr) {
        if (error) {
            console.error(cmd, ' error');
        } else {
            console.log(cmd, " \n 执行 成功");
            callBack && callBack();
        }
    });
}





gulp.task('zip', function (args, args2) {
    return gulp.src('bin/**/*.*')
        .pipe(zip('bin.zip'))
        .pipe(gulp.dest('.'));
});

///////////////////////// 魅族 ////////////////////

/**  魅族编译压缩成zip  */
gulp.task('meizu', function (args, args2) {

    outDir = "bin/js/"; // 魅族

    return compileTSFile().on('end', () => {
        return gulp.src('bin/**/*.*')
            .pipe(zip('bin.zip'))
            .pipe(gulp.dest('.')).on('end', () => {
                console.log('meizu zip end');
            });
    });
});




////////////////////////////// OPPO //////////////////////////////////
 
function packOppoRelease(callBack) {
    let cmd = " cd  release/quickgame   & quickgame pack release";
    executeCMD(cmd, pushOppoReleaseSDCARD);
}

function pushOppoReleaseSDCARD(callBack) {
    let packName = 'com.whs.nearme.gamecenter'
    let cmd = 'adb push %cd%/release/quickgame/dist/'+packName+'.signed.rpk'
       + '  /sdcard/games/'+packName+'.signed.rpk';
    executeCMD(cmd, callBack);
 }

gulp.task('oppo', function () {

    outDir = 'release/quickgame/js/';
    return compileTSFile().on('end', () => {
        packOppoRelease();
    });
})


///////////////////////////  华为 //////////////////////////////


let packHuawei = function (callBack) {

    let cmd = 'start   %cd%/release/huawei/run.bat';
    executeCMD(cmd, callBack);
}
gulp.task('huawei', function () {

    outDir = 'release/huawei/game/js/';
    return compileTSFile().on('end', () => {
        packHuawei(() => { console.log("华为完成") });
    });
})



///////////////////// vivo /////////////////////////////


 
function vivoRelease(callBack) {
    let cmd = ' start %cd%/release/vivogame/release.bat'
    executeCMD(cmd, callBack);
}



gulp.task('vivo', function () {

    outDir = 'release/vivogame/js/';
    return compileTSFile().on('end', () => {
        // pushVIVO();
        vivoRelease();
    });

})

///////////////////////////////////////////////  小米小游戏 //////////////////////////

function xiaomiPush(isDebug = true, callBack) {
    let cmd = ' start %cd%/release/xiaomigame/core/' + (isDebug ? 'build.bat' : 'release.bat');
    executeCMD(cmd, callBack);
}

// 小米合并代码
gulp.task('xiaomiConcat', function () {

    let gameBase ='release/xiaomigame/game/'
    return gulp.src([
        gameBase+'libs/laya.core.js',
        gameBase+'libs/laya.ani.js',
        gameBase+'libs/laya.html.js',
        gameBase+'libs/laya.webgl.js',
        gameBase+'libs/laya.filter.js', 
        gameBase+'libs/laya.ui.js',
        gameBase+'libs/laya.xmmini.js',
        gameBase+'js/config.js',
        gameBase+'js/audio.js',
        gameBase+'js/hardcore.js',
        gameBase+'js/index.js',
    ])
        .pipe(concat('core.js'))
        .pipe(gulp.dest("release/xiaomigame/core")).on('end', function () {
            console.log(`  JS LIBS File End Compile...`);
        });
})
// 小米发编译硬核
gulp.task('xiaomiCompile', function () {
    outDir = 'release/xiaomigame/game/js/';
    return compileTSFile();
})

gulp.task('xaiomiPush', function () {
    let isDebug = false;
    xiaomiPush(isDebug);
    return null;
})

gulp.task('xiaomi', gulp.series('xiaomiCompile', 'xiaomiConcat', 'xaiomiPush'))


//////////////////////////////// 公共部分 ///////////////////////////////////
// 合并依赖库
gulp.task('combine', function () {


    return gulp.src([

        "bin/libs/laya.core.js",
        "bin/libs/laya.webgl.js",
        "bin/libs/laya.ani.js",
        "bin/libs/laya.html.js",
        "bin/libs/laya.ui.js",
        "bin/libs/laya.filter.js",
        "bin/libs/md5.min.js",
        "bin/libs/pool.min.js",
        "bin/libs/utils.min.js",
        "bin/libs/sproto.min.js",
        "bin/js/index_cs.js",
        "bin/js/shouyoudao.js",
        "bin/js/config.js",
        "bin/js/require.js",
        // "bin/js/hardcore.js",

    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest("bin/libs/")).on('end', function () {
            console.log(`  JS LIBS File End Compile...`);
        });
})



gulp.task('cp', () => {
    const basePath = '%cd%/release';
    const versionName = '1.2.5';
    const toBase = 'D:/SVN/frontend/sdk/版本发布/硬核-20200108';
    executeCMD(`cp ${basePath}/huawei/dist/com.hzby.tjyr.huawei.rpk  ${toBase}/华为/com.hzby.tjyr.huawei.${versionName}.rpk`);
    executeCMD(`cp ${basePath}/quickgame/dist/com.hzby.tjyr.nearme.gamecenter.signed.rpk  ${toBase}/oppo/com.hzby.tjyr.nearme.gamecenter.signed.${versionName}.rpk`)
    executeCMD(`cp ${basePath}/vivogame/dist/com.tjyr.hzby.vivominigame.signed.rpk  ${toBase}/vivo/com.tjyr.hzby.vivominigame.signed.${versionName}.rpk`);
    executeCMD(`cp D:/SVN/frontend/sdk/硬核/魅族_out/com.hzby.tjyr.kyx.meizu.release.rpk  ${toBase}/meizu/com.hzby.tjyr.kyx.meizu.release.${versionName}.rpk`);


    return null
})



// 硬核串行打包所有的应和（顺序）执行
gulp.task('all', gulp.series('oppo', 'vivo', 'huawei', 'meizu', 'cp'));









// /////////////////////////// QQ 小游戏 /////////////////////////////


// // var tsProject = ts.createProject("tsconfile_gulp.json");
// var wxTools = require('wxgame-tools');
// //  微信分包 
// var wxSub = require('wxgame-sub');
// // 输入的文件，将wxgame.js进行拆分
// var gameJS = "qqgame_out/qqgame.js";
// var gameJSExport = "qqgame_out/qqgame_export.js";
// var minimist = require('minimist');
// var uglify = require('gulp-uglify'); // 需要安装包




// // 整包 并压缩
// gulp.task("qq", function () {
//     //  const head = `var Laya = window.Laya;\n`;
//     //  return gulp.src([
//     //      "libs/*.ts",
//     //      "src/**/*.ts"
//     //  ])
//     //      .pipe(sorter(false)) // 排序  false 不显示日志
//     //      .pipe(tsProject()) // 编译TS文件
//     //      .pipe(wxSub(null, false, head, true))
//     //      .pipe(wxTools())
//     //      .pipe(uglify({ mangle: true, compress: {} }))
//     //      .pipe(concat("qqgame.js")) // 合并编译后的js到一个文件
//     //      .pipe(gulp.dest('release/qqgame/js/'))

//     outDir = 'release/qqgame/js/';
//     return compileTSFile().on('end', () => {
//         packHuawei(() => { console.log("华为完成") });
//     });

// })



// /**
//  * 编译成单个js  不创建 window.a =a ;
//  * 
//  * @param {*} fileName 生成的名字
//  * @param {*} outPath 输出路径
//  * @returns
//  */
// function compileWXTSFile(outPath, fileName) {
//     // 混淆参数
//     const uglifyOptions = {
//         mangle: true,// 混淆
//         compress: false // 不压缩
//     }
//     return gulp.src([
//         "libs/*.ts",
//         "src/**/*.ts"
//     ])
//         .pipe(sorter(false)) // 排序  false 不显示日志
//         .pipe(tsProject()) // 编译TS文件
//         // .pipe(wxTools()) // 
//         .pipe(uglify(uglifyOptions))// 混淆
//         .pipe(concat(fileName)) // 合并编译后的js到一个文件
//         .pipe(gulp.dest(outPath))
// }


// /**
//  *  筛选出 window.a=a 生成独立js  
//  */
// function createWXExport() {
//     // 进行编译 不进行混淆
//     return gulp.src([
//         "libs/*.ts",
//         "src/**/*.ts"
//     ])
//         .pipe(sorter(false)) // 排序  false 不显示日志
//         .pipe(tsProject()) // 编译TS文件 // 读取已经混淆好的整包
//         .pipe(wxTools(true)) //  筛选顶层引用 用 window.a = a 包含
//         .pipe(concat("qqgame_export.js"))
//         .pipe(gulp.dest("qqgame_out/"))
// }

// /**
//  *  分包
//  * @param {string } path  切割后输出路径
//  * @param {string} fileName  生成文件名
//  * @param {boolean} isLast 是否是第二个分包
//  * @param {string } head 头部添加的内容不免报错  var Laya = window.Laya;var __extends = window.__extends;
//  */
// function subWX(tempPath, outPath, fileName, isLast, head) {
//     // 中间关键字,用于切割文件
//     var key = `define("game/battle/control/BattleDataControl"`;
//     var uglifyArgs = {
//         mangle: false, // 分包不再进行混淆 只压缩空白
//         compress: {}
//     }
//     // gameJS 未压缩的game.js
//     return gulp.src([gameJS,])
//         .pipe(wxSub(key, isLast, head))
//         .pipe(wxTools()) //  筛选顶层引用 用 window.a = a 包含
//         .pipe(concat(fileName))
//         //   .pipe(uglify(uglifyArgs))
//         .pipe(gulp.dest(tempPath))
//         .on("end", () => { // 结束后
//             return conactExport(tempPath, outPath, fileName);
//         })
// }

// //  gulp wxsub -c  执行 编译 不加-c只切割不编译
// var isCompile = {
//     string: 'c',
//     default: 0
// }
// var compile = minimist(process.argv.slice(2), isCompile);

// /**
//  * 添加  window.a=a 到尾部
//  * @param { } inFile 
//  * @param {*} outPath 
//  * @param {*} outFileName 
//  */
// var conactExport = function (inPath, outPath, fileName) {
//     return gulp.src([
//         inPath + fileName,
//         gameJSExport,
//     ])
//         .pipe(concat(fileName))
//         .pipe(gulp.dest(outPath))
//         .on("end", () => {
//             console.log("sub success =>> ", outPath, fileName)
//         })
// }

// // 分包任务
// gulp.task('qqsub', function (args, args2) {

//     var head = `var Laya = window.Laya;\n`;
//     var head2 = `  var Laya = window.Laya;var __extends = window.__extends;\n`;

//     if (compile && compile.c != null) {
//         console.log("start qq compile");
//         return compileWXTSFile("qqgame_out", "qqgame.js").on("end", () => {
//             console.log("compileWXTSFile Finish");
//             createWXExport().on("end", () => {
//                 subWX("qqgame_out/sub1/", "release/qqgame/sub1/", "qqgame.js", false, head);
//                 subWX("qqgame_out/sub2/", "release/qqgame/sub2/", "qqgame.js", true, head2);
//             })
//         })
//     } else {
//         subWX("qqgame_out/sub1/", "release/qqgame/sub1/", "qqgame.js", false, head);
//         subWX("qqgame_out/sub2/", "release/qqgame/sub2/", "qqgame.js", true, head2);
//     }
// });














