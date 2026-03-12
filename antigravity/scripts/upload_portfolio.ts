import { fullPortfolios as jaFull } from '../data/portfolioList.ja';
import { fullPortfolios as enFull } from '../data/portfolioList.en';
import { portfolioData as jaHighlight } from '../data/portfolio.ja';
import { portfolioData as enHighlight } from '../data/portfolio.en';

const apiKey = 'LtSeC9tH3JsuDt7kDCKT3G9Yf5kP8lAlxsGL';
const baseUrl = 'https://tryfunds.microcms.io/api/v1/portfolio';

async function upload() {
  console.log(`Found ${jaFull.length} Japanese and ${enFull.length} English portfolio items.`);

  for (let i = 0; i < jaFull.length; i++) {
    const ja = jaFull[i];
    const en = enFull.find(e => e.name === ja.name) || {}; // Try to match by name or index. Assuming order is same.
    const enItem = enFull[i]; // safer fallback if name changes

    // Check if this item is a highlight item by matching the name
    const jaHigh = jaHighlight.find(h => h.name === ja.name || h.name === '石坂産業' && ja.name.includes('石坂'));
    const enHigh = enHighlight.find(h => h.id === jaHigh?.id);

    const isHighlight = !!jaHigh;

    const payload = {
      name: ja.name,
      name_en: enItem?.name || '',
      description: ja.description,
      description_en: enItem?.description || '',
      type: ja.type,
      type_en: enItem?.type || '',
      status: ja.status,
      status_en: enItem?.status || '',
      // logoImage is a file, we won't upload it via API now, can do it manually in CMS or handle URLs differently
      isHighlight: isHighlight,
      logoText: jaHigh ? jaHigh.logoText : '',
      highlightDescription: jaHigh ? jaHigh.description : '',
      highlightDesc_en: enHigh ? enHigh.description : ''
    };

    try {
      console.log(`Uploading ${ja.name}...`);
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
        console.log(`Success: '${ja.name}' is now '${data.id}'`);
      } else {
        console.error(`Failed to upload ${ja.name}: ${res.status} ${res.statusText}`);
        const errorText = await res.text();
        console.error(errorText);
      }
    } catch (error: any) {
      console.error(`Error uploading ${ja.name}:`, error.message);
    }

    await new Promise(r => setTimeout(r, 1000));
  }
}

upload();
