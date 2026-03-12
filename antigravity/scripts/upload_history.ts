import * as fs from 'fs';
import * as path from 'path';

const apiKey = process.env.MICROCMS_API_KEY || '';
const domain = process.env.MICROCMS_SERVICE_DOMAIN || 'tryfunds';
const baseUrl = `https://${domain}.microcms.io/api/v1/history`;

async function upload() {
  const jaPath = path.resolve(__dirname, '../dictionaries/ja.json');
  const enPath = path.resolve(__dirname, '../dictionaries/en.json');
  
  const jaDict = JSON.parse(fs.readFileSync(jaPath, 'utf8'));
  const enDict = JSON.parse(fs.readFileSync(enPath, 'utf8'));

  const jaEvents = jaDict.company.history.events;
  const enEvents = enDict.company.history.events;

  console.log(`Found ${jaEvents.length} History events.`);

  for (let i = 0; i < jaEvents.length; i++) {
    const ja = jaEvents[i];
    const en = enEvents[i] || {};

    const payload = {
      year: ja.year,
      event: ja.event,
      year_en: en.year || '',
      event_en: en.event || ''
    };

    try {
      console.log(`Uploading history event ${ja.year}...`);
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
        console.log(`Success: ${ja.year} -> '${data.id}'`);
      } else {
        console.error(`Failed to upload ${ja.year}: ${res.status} ${res.statusText}`);
        const errorText = await res.text();
        console.error(errorText);
      }
    } catch (error: any) {
      console.error(`Error uploading ${ja.year}:`, error.message);
    }

    await new Promise(r => setTimeout(r, 1000));
  }
}

if (!apiKey) {
    console.error("MICROCMS_API_KEY is not set.");
} else {
    upload();
}
