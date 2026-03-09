const fs = require('fs');
const path = require('path');

function fixJSON(filePath) {
    let raw = fs.readFileSync(filePath, 'utf8');

    // 1. Temporarily replace double BRs which act as paragraph boundaries
    let step1 = raw.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '__DOUBLE_BR__');

    // 2. Replace remaining isolated <br> tags with responsive ones
    let step2 = step1.replace(/<br(\s*\/?)>/g, "<br class='hidden md:block' />");

    // 3. Restore double BRs
    let step3 = step2.replace(/__DOUBLE_BR__/g, "<br /><br />");

    fs.writeFileSync(filePath, step3);
    console.log(`Fixed ${filePath}`);
}

fixJSON(path.join(__dirname, 'dictionaries/ja.json'));
fixJSON(path.join(__dirname, 'dictionaries/en.json'));
