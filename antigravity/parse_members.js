const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }, timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
};

(async () => {
  try {
    console.log("Fetching members list...");
    const html = await fetchUrl('https://tryfunds.co.jp/company/members/');
    const $ = cheerio.load(html);
    const members = [];
    $('.bl_memberInfo_item').each((i, el) => {
      const nameJa = $(el).find('.bl_memberInfo_nameJa').text().trim();
      const nameEn = $(el).find('.bl_memberInfo_nameEn').text().trim();
      let roleHtml = $(el).find('.bl_memberInfo_role').html() || '';
      roleHtml = roleHtml.replace(/<br\s*\/?>/gi, '\n').trim();
      const $roleText = cheerio.load(roleHtml);
      const roleText = $roleText.text().trim();
      const link = $(el).find('a').attr('href') || '';
      if (nameJa) {
        members.push({ nameJa, nameEn, role: roleText, link });
      }
    });
    console.log("--- MEMBER LIST ---");
    console.log(JSON.stringify(members, null, 2));

    const extractBio = async (url, label) => {
      console.log(`Fetching ${label}...`);
      try {
        const pageHtml = await fetchUrl(url);
        const $page = cheerio.load(pageHtml);
        let bio = $page('.bl_memberDetail_txt').html();
        if (bio) {
          bio = bio.replace(/<br\s*\/?>/gi, '\n')
            .replace(/<[^>]+>/g, '')
            .replace(/&nbsp;/g, ' ')
            .trim();
        } else {
          bio = $page('.bl_memberDetail').text().trim();
        }
        console.log(`--- ${label} BIO ---`);
        console.log(bio);
      } catch (err) {
        console.error(`Failed ${label}: ${err.message}`);
      }
    };

    await extractBio('https://tryfunds.co.jp/company/members/30', 'KUBO');
    await extractBio('https://tryfunds.co.jp/company/members/29', 'WAKE');
    await extractBio('https://tryfunds.co.jp/company/members/41', 'AKIYAMA');

  } catch (e) {
    console.error("Error:", e.message);
  }
})();
