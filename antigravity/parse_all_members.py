import urllib.request
import ssl
import json
import os
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch_html(url):
    req = urllib.request.Request(url, headers=HEADERS)
    return urllib.request.urlopen(req, context=ctx).read()

# 1. Fetch main members list to get URLs and initial data
main_html = fetch_html('https://tryfunds.co.jp/company/members/')
soup = BeautifulSoup(main_html, 'html.parser')

members = []
list_container = soup.find(class_='member_list')

for li in list_container.find_all('li'):
    a_tag = li.find('a')
    if not a_tag: continue
    link = a_tag.get('href', '')
    url = f"https://tryfunds.co.jp{link}" if link.startswith('/') else link
    members.append({
        'url': url,
        'id': link.split('/')[-1]
    })

results = {}

# 2. Fetch each member's individual page
for m in members:
    mid = m['id']
    url = m['url']
    print(f"Fetching {mid}: {url}")
    try:
        html = fetch_html(url)
        msoup = BeautifulSoup(html, 'html.parser')
        
        # Get bio
        detail = msoup.find(class_='bl_memberDetail') or msoup.find(class_='bl_memberDetail_txt') or msoup.find(class_='txt')
        bio = ""
        if detail:
            for br in detail.find_all("br"):
                br.replace_with("\n")
            bio = detail.get_text(strip=True)
            
        # Download image if not exists
        img_tag = msoup.find('img', class_='bl_memberImage') or msoup.select_one('.right img')
        if img_tag and img_tag.get('src'):
            img_url = img_tag['src']
            if img_url.startswith('/'):
               img_url = f"https://tryfunds.co.jp{img_url}"
            img_path = f"public/images/members/mem_{mid}.jpg"
            if not os.path.exists(img_path):
                print(f"Downloading image for {mid} from {img_url}")
                urllib.request.urlretrieve(img_url, img_path)
                
        results[mid] = bio
    except Exception as e:
        print(f"Error for {mid}: {e}")

with open('all_bios.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Done generating all_bios.json")
