const fs = require('fs');
const path = require('path');

const caseStudiesJaFile = path.join(__dirname, '../data/caseStudies.ja.ts');
const caseStudiesEnFile = path.join(__dirname, '../data/caseStudies.en.ts');

const jaContent = fs.readFileSync(caseStudiesJaFile, 'utf8');
const enContent = fs.readFileSync(caseStudiesEnFile, 'utf8');

let jaData, enData;
eval(jaContent.replace('export var caseStudies = ', 'jaData = '));
eval(enContent.replace('export var caseStudies = ', 'enData = '));

const apiKey = 'LtSeC9tH3JsuDt7kDCKT3G9Yf5kP8lAlxsGL';
const baseUrl = 'https://tryfunds.microcms.io/api/v1/case-studies';

async function upload() {
  console.log(`Found ${jaData.length} Japanese and ${enData.length} English case studies.`);

  for (let i = 0; i < jaData.length; i++) {
    const ja = jaData[i];
    const en = enData.find(e => e.id === ja.id) || {};

    // Testing POST to see if it allows auto-generation of ID
    const payload = {
      client: ja.client,
      title: ja.title,
      title_en: en.title || '',
      category: ja.category,
      category_en: en.category || '',
      summary: ja.summary,
      summary_en: en.summary || '',
      tags: ja.tags ? ja.tags.join(', ') : '',
      results: ja.results ? ja.results.join('\n') : '',
      results_en: en.results ? en.results.join('\n') : '',
      content_background: ja.content?.background || '',
      content_bg_en: en.content?.background || '',
      content_challenges: ja.content?.challenges || '',
      content_chall_en: en.content?.challenges || '',
      content_approach: ja.content?.approach || '',
      content_approach_en: en.content?.approach || '',
      content_outcome: ja.content?.outcome || '',
      content_out_en: en.content?.outcome || ''
    };

    try {
      console.log(`Uploading ${ja.id} (will generate random id)...`);
      const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'X-MICROCMS-API-KEY': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        console.log(`Success: original id '${ja.id}' is now '${data.id}'`);
      } else {
        console.error(`Failed to upload ${ja.id}: ${res.status} ${res.statusText}`);
        const errorText = await res.text();
        console.error(errorText);
      }
    } catch (error) {
      console.error(`Error uploading ${ja.id}:`, error.message);
    }

    await new Promise(r => setTimeout(r, 1000));
  }
}

upload();
