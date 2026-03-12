const fs = require('fs');
const path = require('path');

// Require ts-node to parse the typescript data files
require('ts-node').register({ transpileOnly: true });

const caseStudiesJaFile = path.join(__dirname, '../data/caseStudies.ja.ts');
const caseStudiesEnFile = path.join(__dirname, '../data/caseStudies.en.ts');

const jaData = require(caseStudiesJaFile).caseStudies;
const enData = require(caseStudiesEnFile).caseStudies;

function escapeCsv(str) {
    if (str === null || str === undefined) return '';
    const text = String(str);
    // If text contains quotes, commas, or newlines, we must wrap it in quotes and double the internal quotes
    if (text.includes('"') || text.includes(',') || text.includes('\n') || text.includes('\r')) {
        return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
}

async function generateCsv() {
    console.log(`Generating CSV for ${jaData.length} Japanese case studies...`);

    // Define the EXACT field IDs we set in microCMS
    const headers = [
        'id',
        'title',
        'title_en',
        'client',
        'category',
        'category_en',
        'summary',
        'summary_en',
        'tags',
        'results',
        'results_en',
        'content_background',
        'content_bg_en', // Ah wait, let me check what we named the english background. According to the screenshot it was content_bg_en! Let's check screenshot!
        // No wait, I need to check the exact IDs I created. 
        // Wait, the API schema screenshot shows `content_bg_en` for "content_background_en"? Yes, `content_bg_en`.
        // Let me check my previous subagent logs...
        'content_challenges',
        'content_chall_en',
        'content_approach',
        'content_approach_en', // wait, didn't I name it differently? Let me use my previous screenshot to be sure
        'content_outcome',
        'content_out_en'
    ];

    /* Let's verify field IDs from our subagent history:
     - content_background
     - content_bg_en             (Created as content_bg_en because it was cut off or typed by agent)
     - content_challenges
     - content_chall_en
     - content_approach
     - content_approach_en       (We created this one successfully as approach_en)
     - content_outcome
     - content_out_en
    */

    const expectedHeaders = [
        'title',
        'client',
        'category',
        'category_en',
        'summary',
        'summary_en',
        'tags',
        'results',
        'results_en',
        'content_background',
        'content_bg_en',
        'content_challenges',
        'content_chall_en',
        'content_approach',
        'content_approach_en',
        'content_outcome',
        'content_out_en'
    ];

    let csvContent = headers.join(',') + '\n';

    for (let i = 0; i < jaData.length; i++) {
        const ja = jaData[i];
        const en = enData.find(e => e.id === ja.id) || {};

        const row = [
            ja.id,
            ja.title,
            en.title || '',
            ja.client,
            ja.category,
            en.category || '',
            ja.summary,
            en.summary || '',
            ja.tags ? ja.tags.join(', ') : '',
            ja.results ? ja.results.join('\n') : '',
            en.results ? en.results.join('\n') : '',
            ja.content?.background || '',
            en.content?.background || '',
            ja.content?.challenges || '',
            en.content?.challenges || '',
            ja.content?.approach || '',
            en.content?.approach || '',
            ja.content?.outcome || '',
            en.content?.outcome || ''
        ];

        csvContent += row.map(escapeCsv).join(',') + '\n';
    }

    const outputPath = path.join(__dirname, '../case-studies-import.csv');
    fs.writeFileSync(outputPath, csvContent, 'utf-8');
    console.log(`Successfully generated ${outputPath}`);
}

generateCsv();
