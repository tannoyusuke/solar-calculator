const fs = require('fs');
const https = require('https');
const path = require('path');

const companies = [
    { id: 'recmed', name: 'レクメド', domain: 'recmed.co.jp' },
    { id: 'ftg', name: 'FTG Company', domain: 'ftg-company.com' },
    { id: 'generaloyster', name: 'General Oyster', domain: 'generaloyster.co.jp' },
    { id: 'bizit', name: 'BIZIT', domain: 'm-a-bizit.com' },
    { id: 'kyushuijishinpo', name: '九州医事新報社', domain: 'k-ijishinpo.jp' },
    { id: 'philcompany', name: 'フィル・カンパニー', domain: 'philcompany.jp' },
    { id: 'sustech', name: 'Sustech', domain: 'sustech-inc.co.jp' },
    { id: 'shiency', name: 'シエンシー', domain: 'shiency.com' },
    { id: 'scapital', name: 'エスキャピタル', domain: 's-capital.co.jp' },
    { id: 'wanova', name: 'Wanova', domain: 'wanova.jp' },
    { id: 'pegasus', name: 'Pegasus Tech Ventures', domain: 'pegasustechventures.com' },
    { id: 'phalus', name: 'ファルス', domain: 'phalus.net' },
    { id: 'handsonai', name: 'Handson AI', domain: 'handson-ai.com' },
    { id: 'ensenten', name: 'エンセンテン', domain: 'ensenten.com' }
];

const outputDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function generateSVG(name, filename) {
    const fontSize = name.length > 10 ? 24 : 36;
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80" width="100%" height="100%">
    <style>
        .text { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-weight: 800; font-size: ${fontSize}px; fill: #ffffff; text-anchor: middle; dominant-baseline: middle; letter-spacing: 0.05em; }
    </style>
    <text x="150" y="42" class="text">${name}</text>
</svg>`;
    fs.writeFileSync(path.join(outputDir, filename), svgContent);
    console.log(`Fallback: Generated SVG for ${name}`);
}

async function downloadLogo(company) {
    return new Promise((resolve) => {
        const url = `https://logo.clearbit.com/${company.domain}?size=400`;
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                // Determine extension based on content-type
                const contentType = res.headers['content-type'] || 'image/png';
                let extension = '.png';
                if (contentType.includes('jpeg') || contentType.includes('jpg')) extension = '.jpg';
                if (contentType.includes('svg')) extension = '.svg';

                const filename = `${company.id}${extension}`;
                const fileStream = fs.createWriteStream(path.join(outputDir, filename));
                res.pipe(fileStream);

                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Success: Downloaded ${company.name} logo from ${company.domain}`);
                    resolve({ id: company.id, name: company.name, file: `/logos/${filename}` });
                });
            } else {
                console.log(`Error ${res.statusCode}: Failed to find logo for ${company.domain}, generating fallback.`);
                generateSVG(company.name, `${company.id}.svg`);
                resolve({ id: company.id, name: company.name, file: `/logos/${company.id}.svg` });
            }
        }).on('error', (err) => {
            console.log(`Network Error: Failed for ${company.domain}, generating fallback.`);
            generateSVG(company.name, `${company.id}.svg`);
            resolve({ id: company.id, name: company.name, file: `/logos/${company.id}.svg` });
        });
    });
}

async function main() {
    const results = [];
    for (const company of companies) {
        const result = await downloadLogo(company);
        results.push(result);
    }

    // Write out the JSON mapping for easy update
    fs.writeFileSync(path.join(__dirname, 'logoMapping.json'), JSON.stringify(results, null, 2));
    console.log("All done. logoMapping.json created.");
}

main();
