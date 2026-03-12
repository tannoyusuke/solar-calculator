import { createClient } from 'microcms-js-sdk';

const cmsClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || 'tryfunds',
  apiKey: process.env.MICROCMS_API_KEY || 'N/A'
});

async function run() {
  try {
    const news = await cmsClient.get({ endpoint: 'news' });
    console.log('news endpoint exists:', news.totalCount);
  } catch (e: any) { console.log('news error:', e.message); }

  try {
    const history = await cmsClient.get({ endpoint: 'history' });
    console.log('history endpoint exists:', history.totalCount);
  } catch (e: any) { console.log('history error:', e.message); }
}
run();
