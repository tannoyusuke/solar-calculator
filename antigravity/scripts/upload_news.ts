import { newsData as jaData } from '../data/news.ja';
import { newsData as enData } from '../data/news.en';

const apiKey = process.env.MICROCMS_API_KEY || '';
const domain = process.env.MICROCMS_SERVICE_DOMAIN || 'tryfunds';
const baseUrl = `https://${domain}.microcms.io/api/v1/news`;

async function upload() {
  console.log(`Found ${jaData.length} Japanese and ${enData.length} English news items.`);

  for (let i = 0; i < jaData.length; i++) {
    const ja = jaData[i];
    const en = enData.find(e => e.id === ja.id) || {};

    const payload = {
      title: ja.title,
      title_en: en.title || '',
      date: ja.date,
      category: ja.category,
      content: ja.content,
      content_en: en.content || ''
    };

    try {
      console.log(`Uploading news ${ja.id}...`);
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
    } catch (error: any) {
      console.error(`Error uploading ${ja.id}:`, error.message);
    }

    await new Promise(r => setTimeout(r, 1000));
  }
}

if (!apiKey) {
    console.error("MICROCMS_API_KEY is not set.");
} else {
    upload();
}
