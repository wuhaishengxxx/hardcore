# 基于Laya1.8.5的硬核工程

## 目录
---
<!-- TOC -->
- [特性说明](#特性说明)
- [oppo](#oppo)
- [vivo](#vivo)
- [华为](#华为)
- [小米](#小米)
- [魅族](#魅族)
<!-- TOC -->

## 特性说明
---
1. 项目基于Laya1.8.5开发，使用gulp编译打包，一行命令打包并推送到手机指定目录
2. 不直接与游戏耦合，可以当做加载界面进行加载游戏
3. 项目不与引擎强关联，可以稍加修改替换成其他游戏引擎工程
4. 工程维护简单，只需要修改游戏启动代码
5. 做了简单的适配，具体配置需要根据不同工程去优化

## 整体目录结构   
---

|--- bin  主干目录也是魅族打压缩包的目录，可以直接通过浏览器查看硬核效果  
|--- release oppo|vivo|小米|华为 项目路径  
|--- src 用于测试硬核的游戏工程，可以当做主页工程选服工程，然后点击【开始】去初始化游戏  
|--- bin.zip 魅族打包的压缩包，gulp meizu 自动生成该文件  


## 工程使用
---
npm  install 初始化
gulp meizu 编译硬核工程并打包生成bin.zip
gulp vivo  编译打包vivo,并推送rpk到手机
gulp oppo  编译打包oppo，并推送rpk到手机
gulp huawei  编译打包huawei,并推送rpk到手机
gulp xiaomi  编译打包xiaomi，并推送rpk到手机
gulp all   顺序编译打包所有的硬核工程


## oppo 
---
### 环境安装 (参考官方文档)

### debug链接
chrome-devtools://devtools/bundled/inspector.html?v8only=true&ws=192.168.23.3:12345/00010002-0003-4004-8005-000600070008

### 目录结构
release/quickgame  
|-- dist  rpk输出路径，打包自动生成  
|-- js 硬核js  
    |-- audio.js  声音适配  
    |-- config.js 配置  
    |-- hardcore.js 硬核测试的游戏工程，即当前Laya工程打包的js  
|-- libs 依赖库  
|-- res 当前Laya工程的res  
|-- sign oppo签名  
|-- main.js  oppo工程的主文件 



## vivo 
--- 

[debug](chrome-devtools://devtools/bundled/inspector.html?v8only=true&ws=192.168.23.5:5086/00010002-0003-4004-8005-000600070008)

### 环境安装
npm install @vivo-minigame/cli

### 目录结构
release/vivogame
|-- engine 依赖库目录,需要配置到 minigame.config.js
|-- js 硬核代码,需要配置到 minigame.config.js
   |-- audio.js 声音适配
   |-- config.js 配置
   |-- core.js  用于启动初始化hardcore
   |-- hardcore.js  当前Laya工程打包的js
   |-- src vivo硬核工程代码
      |-- res Laya 工程对应的res  
      |-- game.js vivo主程序
   |-- release.bat release打包脚本
   |-- run.bat debug打包脚本
   |-- minigame.config.js 库的配置

### 编译运行 
hardccore 目录下，执行gulp vivo  
修改 core.js 可修改启动方式，初始化方式等等  



###  问题
1. 黑屏  
    黑屏大部分是报错导致，chrome 打不卡
   -- adb 查看代码是否报错
   -- LocalStorage 使用 qg.setStorage  
   -- qg.setStorage 有异常，需要每次先清理掉重新set


## 华为 
---  
### 调试工具 Huawei QuickApp IDE   
### 目录
release/huawei  
|-- dist rpk打包生成目录，打包自动生成  
|-- game 要打包的工程目录  
|-- signtool 官方提供的打包工具
|-- run.bat  release打包脚本

### 编译运行 
hardccore 目录下，执行gulp huawei   

## 小米 
---  

### 环境安装
release\xiaomigame\core 下 npm install （具体参见官方文档）

### 目录说明
release/xiaomigame  
|-- core 小米打包目录
    |-- build.bat  debug打包脚本
    |-- debug.bat  打开调试工具脚本
    |-- release.bat  打包release脚本
    |-- core.js 游戏以及依赖合并代码
    |-- main.js 小米主程序
|-- game 游戏he

## 魅族
--- 