const fs = require('fs');
const path = require('path');

const ignoreDirs = ['.git', 'node_modules', '.skills', 'dist'];

function mapDir(dir, depth = 0) {
    if (depth > 2) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        if (ignoreDirs.includes(item)) return;
        const fullPath = path.join(dir, item);
        const isDir = fs.statSync(fullPath).isDirectory();
        console.log('  '.repeat(depth) + (isDir ? '📁 ' : '📄 ') + item);
        if (isDir) mapDir(fullPath, depth + 1);
    });
}

console.log("### Codebase Structure Map\n");
mapDir('.');
