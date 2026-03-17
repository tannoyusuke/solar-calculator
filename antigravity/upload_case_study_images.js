const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const { fetch } = require('cross-fetch');

const API_KEY = "LtSeC9tH3JsuDt7kDCKT3G9Yf5kP8lAlxsGL";

const cases = [
    { id: 'yhzwic4365', file: 'cs_regional_town_real_1773759403160.png' },
    { id: '7tbhj224du', file: 'cs_inbound_tourism_real_1773759421033.png' },
    { id: 'ci8w6msq2', file: 'cs_recycling_yard_real_1773759438910.png' },
    { id: 'hac4izqpi', file: 'cs_ny_highrise_real_1773759454640.png' },
    { id: '8r1o4iho34e', file: 'cs_aerial_store_real_1773759498177.png' },
    { id: '9q6nybsa0b9', file: 'cs_restaurant_jv_real_1773759515496.png' },
    { id: 'cjg91fli-aj2', file: 'cs_dx_server_real_1773759531823.png' },
    { id: '6iry87_ioe3', file: 'cs_turnaround_room_real_1773759582158.png' },
    { id: 'w9n2hils89', file: 'cs_startup_office_real_1773759598766.png' }
];

async function run() {
    const brainDir = '/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1';
    
    for (const c of cases) {
        const filePath = path.join(brainDir, c.file);
        
        console.log(`Uploading ${c.file}...`);
        const form = new FormData();
        form.append('file', fs.createReadStream(filePath));
        
        const uploadRes = await fetch('https://tryfunds.microcms-management.io/api/v1/media', {
            method: 'POST',
            headers: {
                'X-MICROCMS-API-KEY': API_KEY
            },
            body: form
        });
        
        const uploadData = await uploadRes.json();
        
        if (!uploadData.url) {
            console.error(`Failed to upload ${c.file}:`, uploadData);
            continue;
        }
        
        console.log(`Uploaded! URL: ${uploadData.url}`);
        
        console.log(`Patching Case Study ${c.id}...`);
        const patchRes = await fetch(`https://tryfunds.microcms.io/api/v1/case-studies/${c.id}`, {
            method: 'PATCH',
            headers: {
                'X-MICROCMS-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: {
                    url: uploadData.url
                }
            })
        });
        
        if (!patchRes.ok) {
            const err = await patchRes.text();
            console.error(`Failed to patch ${c.id}:`, err);
        } else {
            console.log(`Successfully updated Case Study ${c.id}`);
        }
    }
}

run().catch(console.error);
