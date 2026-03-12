const fetch = require('node-fetch');

const apiKey = 'LtSeC9tH3JsuDt7kDCKT3G9Yf5kP8lAlxsGL';
const baseUrl = 'https://tryfunds.microcms.io/api/v1/portfolio';

async function probe() {
  const allKeys = [
    'name', 'name_en', 'description', 'description_en', 'type', 'type_en', 'status', 'status_en',
    'logoImage', 'isHighlight', 'highlightImage', 'logoText', 'highlightDescription', 'highlightDesc_en',
    'highlightDescription_en'
  ];
  
  let validKeys = [];
  let currentKeys = [...allKeys];

  while (currentKeys.length > 0) {
    const payload = {};
    currentKeys.forEach(k => payload[k] = "test");
    
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'X-MICROCMS-API-KEY': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      console.log("Success! All remaining keys are valid:", currentKeys);
      break;
    }
    
    const text = await res.text();
    let json;
    try { json = JSON.parse(text); } catch(e) {}
    
    if (json && json.message && json.message.includes("is unexpected key")) {
      const match = json.message.match(/'([^']+)' is unexpected key/);
      if (match) {
        const invalidKey = match[1];
        console.log("Invalid key found:", invalidKey);
        currentKeys = currentKeys.filter(k => k !== invalidKey);
      } else {
        console.log("Unknown error format:", json);
        break;
      }
    } else {
      console.log("Valid keys so far triggers checking other fields:", text);
      // If it throws an error about type (e.g., 'isHighlight must be boolean'), then the key is valid!
      console.log("Current keys being probed:", currentKeys);
      break;
    }
  }
}

probe();
