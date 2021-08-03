const path = require('path');
const fs = require('fs-extra');

const sourcePath = path.resolve(__dirname, '../projects/ngx-vant/');
const targetPath = path.resolve(__dirname, '../dist/ngx-vant');


console.log('---------------copy style folder-----------------------');
fs.copySync(path.resolve(sourcePath, `style`), path.resolve(targetPath, `style`));
fs.copySync(path.resolve(sourcePath, `style.less`), path.resolve(targetPath, `style.less`));
fs.copySync(path.resolve(sourcePath, 'ngx-vant.less'), path.resolve(targetPath, 'ngx-vant.less'));
console.log('---------------done-----------------------');