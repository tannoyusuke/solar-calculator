import * as fs from 'fs';

const apiKey = process.env.MICROCMS_API_KEY || '';
const domain = process.env.MICROCMS_SERVICE_DOMAIN || 'tryfunds';
const managementUrl = `https://${domain}.microcms-management.io/api/v1/media`;

async function testUpload() {
  const filePath = '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1/sustech_ai_1773326328614.png';
  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: 'image/png' });
  
  const formData = new FormData();
  formData.append('file', blob, 'sustech_ai.png');

  try {
    console.log(`Testing upload to ${managementUrl}`);
    const res = await fetch(managementUrl, {
      method: 'POST',
      headers: {
        'X-MICROCMS-API-KEY': apiKey,
        // FormData boundary is automatically set by node-fetch when passing FormData
      },
      // In Node 18+ fetch, passing form-data library object might need special handling or we can just pass it if it's compatible
      body: formData as any
    });

    if (res.ok) {
      const data = await res.json();
      console.log('Success!', data);
    } else {
      console.error(`Failed: ${res.status} ${res.statusText}`);
      const text = await res.text();
      console.error(text);
    }
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

testUpload();
