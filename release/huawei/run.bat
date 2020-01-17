@echo on
:begin
set PACK_NAME=com.whs.huawei
set ROOT=%~dp0
node %ROOT%signtool\package\index.js %ROOT%game %ROOT%dist %PACK_NAME% %ROOT%sign\release\private.pem %ROOT%sign\release\certificate.pem
adb push %ROOT%dist/%PACK_NAME%.rpk  /sdcard/_rpk/%PACK_NAME%.rpk
exit 
 
 