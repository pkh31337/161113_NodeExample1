﻿var path = require('path');

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);

var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('파일 패스 : %s', curPath);