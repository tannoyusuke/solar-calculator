import urllib.request
import ssl
import json
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch_html(url):
    req = urllib.request.Request(url, headers=HEADERS)
    return urllib.request.urlopen(req, context=ctx).read()

# 1. Fetch main members list
main_html = fetch_html('https://tryfunds.co.jp/company/members/')
soup = BeautifulSoup(main_html, 'html.parser')

list_container = soup.find(class_='member_list')
members = []
for li in list_container.find_all('li'):
    a_tag = li.find('a')
    if not a_tag: continue
    link = a_tag.get('href', '')
    mid = link.rstrip('/').split('/')[-1]
    
    name_ja = li.find(class_='name_ja')
    name_en = li.find(class_='name_en')
    job_tit = li.find(class_='job_tit')
    
    name_ja_text = name_ja.get_text(strip=True) if name_ja else ''
    name_en_text = name_en.get_text(strip=True) if name_en else ''
    
    if job_tit:
        for br in job_tit.find_all("br"):
            br.replace_with("\n")
        role_text = job_tit.get_text(strip=True)
    else:
        role_text = ''
    
    members.append({
        'id': mid,
        'nameJa': name_ja_text,
        'nameEn': name_en_text,
        'role': role_text,
        'url': f"https://tryfunds.co.jp{link}" if link.startswith('/') else link
    })

# Also fetch each detail page to get the exact name displayed there
for m in members:
    try:
        html = fetch_html(m['url'])
        dsoup = BeautifulSoup(html, 'html.parser')
        # Try to find the detail page name
        detail_name = dsoup.find(class_='name_ja') or dsoup.find('h2')
        detail_en = dsoup.find(class_='name_en')
        if detail_name:
            m['detailNameJa'] = detail_name.get_text(strip=True)
        if detail_en:
            m['detailNameEn'] = detail_en.get_text(strip=True)
    except Exception as e:
        print(f"Error fetching detail for {m['id']}: {e}")

print(json.dumps(members, ensure_ascii=False, indent=2))
