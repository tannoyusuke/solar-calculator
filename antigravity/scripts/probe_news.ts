import { createClient } from 'microcms-js-sdk';

const cmsClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || 'tryfunds',
  apiKey: process.env.MICROCMS_API_KEY || 'N/A'
});

async function run() {
  try {
    const res = await cmsClient.get({ endpoint: 'news' });
    console.log('news endpoint exists:', res);
  } catch (e: any) {
    if (e.message && e.message.includes('404')) {
      console.log('news endpoint NOT found. Status:', e.message);
      try {
        const res2 = await cmsClient.get({ endpoint: 'newsnewsnewsnewsnew' });
        console.log('found weird news endpoint:', res2);
      } catch(e2: any) {
        console.log('newsnewsnewsnewsnew NOT found either:', e2.message);
      }
    } else {
       console.log('Other error:', e);
    }
  }
}
run();
