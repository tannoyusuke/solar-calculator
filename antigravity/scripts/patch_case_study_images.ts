import * as fs from 'fs';

const apiKey = process.env.MICROCMS_API_KEY || '';
const domain = process.env.MICROCMS_SERVICE_DOMAIN || 'tryfunds';
const managementUrl = `https://${domain}.microcms-management.io/api/v1/media`;
const contentUrl = `https://${domain}.microcms.io/api/v1/case-studies`;

const mappings = [
    { client: 'Sustech', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/sustech_ai_1773326328614.png' },
    { client: 'ゼネラル・オイスター', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/oyster_turnaround_1773326362819.png' },
    { client: '大手倉庫会社', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/warehouse_dx_1773326399634.png' },
    { client: 'うかい', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/ukai_global_1773326430771.png' },
    { client: 'フィル・カンパニー', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/phil_company_1773326459888.png' },
    { client: '米国不動産AM', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/us_real_estate_1773326488260.png' },
    { client: '石坂産業', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/ishizaka_branding_1773326517075.png' },
    { client: '大手金融機関 × 地方自治体', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/regional_tourism_1773326548277.png' },
    { client: '第四北越銀行', path: '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/daishi_hokuetsu_1773326572142.png' },
];

async function uploadMedia(filePath: string, filename: string): Promise<string> {
  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: 'image/png' });
  const formData = new FormData();
  formData.append('file', blob, filename);

  const res = await fetch(managementUrl, {
    method: 'POST',
    headers: { 'X-MICROCMS-API-KEY': apiKey },
    body: formData as any
  });

  if (!res.ok) {
    throw new Error(`Media upload failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.url;
}

async function run() {
  console.log('Fetching CMS entries...');
  const listRes = await fetch(`${contentUrl}?limit=100`, {
    headers: { 'X-MICROCMS-API-KEY': apiKey }
  });
  
  if (!listRes.ok) throw new Error('Failed to fetch case-studies list');
  const listData = await listRes.json();
  
  for (const item of mappings) {
    const cmsEntry = listData.contents.find((c: any) => c.client === item.client);
    if (!cmsEntry) {
      console.error(`Could not find entry for client ${item.client} in CMS`);
      continue;
    }

    try {
      console.log(`Uploading image for ${item.client}...`);
      const imageUrl = await uploadMedia(item.path, `${item.client}.png`);
      console.log(`Image uploaded: ${imageUrl}`);

      console.log(`Patching CMS entry ${cmsEntry.id}...`);
      const patchRes = await fetch(`${contentUrl}/${cmsEntry.id}`, {
        method: 'PATCH',
        headers: {
          'X-MICROCMS-API-KEY': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: imageUrl })
      });

      if (!patchRes.ok) {
        console.error(`Failed to patch entry ${cmsEntry.id}:`, await patchRes.text());
      } else {
        console.log(`Successfully updated ${item.client}!`);
      }
    } catch (e: any) {
      console.error(`Error processing ${item.client}:`, e.message);
    }
  }
}

run();
