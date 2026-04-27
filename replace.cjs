const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/#D4AF37/g, '#ef233c')
                .replace(/#c4a030/g, '#d90429')
                .replace(/#B38F24/g, '#8d0801')
                .replace(/text-yellow-500/g, 'text-red-500')
                .replace(/fill-yellow-500/g, 'fill-red-500')
                .replace(/focus:ring-yellow-500/g, 'focus:ring-red-500')
                .replace(/bg-yellow-500/g, 'bg-red-500');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log('Updated', fullPath);
            }
        }
    }
}
replaceInDir('./src');
