 
@echo on
:begin
set PACK_NAME=com.whs.mi
set ROOT=%~dp0
cd /D %~dp0
 
npm run build  & adb push %ROOT%dist/%PACK_NAME%.debug.rpk  /sdcard/_rpk/%PACK_NAME%.debug.rpk & exit