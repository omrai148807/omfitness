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
                .replace(/#0a0a0a/g, '#000000') // Use absolute black instead of zinc-950 for pure noir
                .replace(/#1a1a1a/g, '#18181b')
                .replace(/#2a2a2a/g, 'rgba(255,255,255,0.1)') // Use white/10 for borders instead of flat grey
                .replace(/#a0a0a0/g, '#a1a1aa')
                .replace(/#252525/g, '#27272a');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log('Updated', fullPath);
            }
        }
    }
}
replaceInDir('./src');
