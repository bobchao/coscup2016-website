# coscup 2016 website


## 環境準備
npm 版本過舊可能會導致之後 build 失敗  
[更新 node, npm 參考資料](https://nodejs.org/en/download/package-manager/)

安裝套件管理器至全域
```
npm install -g gulp
```

安裝 build 網頁時會用到的前處理器
```
npm install
```


## Debug
`gulp debug` 會重 build 整個網頁並建制臨時的小型網頁伺服 livereload 修改  
``gulp debug`` **不會執行壓縮**


## Build
``gulp`` 會從 build 整個網頁，並關閉 debug mode，壓縮可壓縮的檔案


## Source Code
所有 source code 都位於 ``app/`` 下  

#### Pages
``app/*.html`` 會被視為各頁面，i.e.  
``app/index.html`` -> ``build/index.html``  
``app/schedule.html`` -> ``build/schedule.html``  
...

#### html
html 拆成多個部份放在資料夾 ``app/html/`` 下，由 ``app/*.html`` include ，可遞迴地 include  
include 方式如
```
<div id="some-block">
	__@w@include('./html/path_to_source.html')
</div>
```
非 API 撈的網頁文案放  ``app/html/copy/``  

#### scss
所有 ``app/scss/*.scss`` 都會被 build 成 ``build/*.css``  
要被 import 的 parital 放在 ``app/scss/**/*.scss``  

#### javascript & react
所有 ``app/js/*.js`` 都會被 build 成 ``build/*.js``
* react component: ``app/js/components/``
* react state: ``app/js/states/``
* library: ``app/js/lib/``
* static json: ``app/js/json/``

