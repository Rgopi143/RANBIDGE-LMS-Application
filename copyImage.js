const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\PC PC\\.gemini\\antigravity\\brain\\424e5959-6d5c-46d6-b21d-cf745c8776ff\\media__1779366056617.png';
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'backend-thumbnail.png');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

fs.copyFileSync(src, dest);
console.log('Copied successfully!');
