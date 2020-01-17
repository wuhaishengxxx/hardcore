
@echo on
:begin
set PACK_NAME=com.whs.mi
set ROOT=%~dp0
cd /D %~dp0

npm run release & adb push %ROOT%dist/%PACK_NAME%.release.rpk  /sdcard/_rpk/%PACK_NAME%.rpk & exit