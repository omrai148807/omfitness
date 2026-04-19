import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'EACCES') return;
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.tsx'));

const replacements = [
  { regex: /\btext-text-text-white\b/g, replacement: 'text-text-white' },
  { regex: /\btext-text-text-gray\b/g, replacement: 'text-text-gray' },
  { regex: /\btext-text-white\b/g, replacement: 'text-white' },
  { regex: /\btext-text-gray\b/g, replacement: 'text-[#a0a0a0]' },
  { regex: /\bbg-card-bg\b/g, replacement: 'bg-[#1a1a1a]' },
  { regex: /\bbg-bg-dark\b/g, replacement: 'bg-[#0a0a0a]' },
  { regex: /\bborder-border-color\b/g, replacement: 'border-[#2a2a2a]' },
  { regex: /\bbg-accent-red\b/g, replacement: 'bg-[#ff3131]' },
  { regex: /\btext-accent-red\b/g, replacement: 'text-[#ff3131]' },
  { regex: /\bbg-accent-red\/80\b/g, replacement: 'bg-[#ff3131]/80' },
  { regex: /\bbg-accent-red\/10\b/g, replacement: 'bg-[#ff3131]/10' },
  { regex: /\bbg-accent-red\/5\b/g, replacement: 'bg-[#ff3131]/5' },
  { regex: /\bbg-card-bg\/80\b/g, replacement: 'bg-[#1a1a1a]/80' },
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  replacements.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });
  fs.writeFileSync(file, content, 'utf-8');
});
console.log('Cleanup applied successfully.');
