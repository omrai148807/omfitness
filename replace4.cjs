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
                .replace(/#ef233c/g, '#D4AF37')
                .replace(/#d90429/g, '#c4a030')
                .replace(/#8d0801/g, '#B38F24')
                .replace(/#ff4d6d/g, '#e5c149')
                .replace(/239,\s*35,\s*60/g, '212,175,55')
                .replace(/text-red-/g, 'text-yellow-')
                .replace(/bg-red-/g, 'bg-yellow-')
                .replace(/fill-red-/g, 'fill-yellow-')
                .replace(/border-red-/g, 'border-yellow-')
                .replace(/focus:ring-red-/g, 'focus:ring-yellow-')
                .replace(/to-red-/g, 'to-yellow-')
                .replace(/from-red-/g, 'from-yellow-')
                .replace(/accent-red/g, 'accent-gold')
                // replace background images to match golden theme
                .replace(/https:\/\/wallpaperbat\.com\/img\/99007441-gym-dark\.jpg/g, 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000');
                
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log('Updated', fullPath);
            }
        }
    }
}
replaceInDir('./src');
