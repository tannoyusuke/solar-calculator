import urllib.request
import json
import ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request('https://tryfunds.co.jp/company/members/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')

members = []
for li in soup.find_all('li', class_='bl_memberInfo_item'):
    name_ja = li.find('h3', class_='bl_memberInfo_nameJa')
    name_en = li.find('p', class_='bl_memberInfo_nameEn')
    role = li.find('p', class_='bl_memberInfo_role')
    link = li.find('a')['href'] if li.find('a') else ''
        
    if name_ja:
        role_text = role.get_text(separator=' ', strip=True) if role else ''
        members.append({
            'nameJa': name_ja.get_text(strip=True),
            'nameEn': name_en.get_text(strip=True) if name_en else '',
            'role': role_text,
            'url': link
        })

print("--- MEMBERS ---")
print(json.dumps(members, ensure_ascii=False, indent=2))

def fetch_bio(url, label):
    if not url: return
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, context=ctx).read()
        soup = BeautifulSoup(html, 'html.parser')
        detail = soup.find('div', class_='bl_memberDetail') or soup.find('p', class_='bl_memberDetail_txt')
        print(f"--- {label} ---")
        if detail:
            for br in detail.find_all("br"):
                br.replace_with("\n")
            print(detail.get_text(strip=True))
        else:
            print("NO MATCH")
    except Exception as e:
        print(f"Error {label}: {e}")

fetch_bio('https://tryfunds.co.jp/company/members/30', 'KUBO')
fetch_bio('https://tryfunds.co.jp/company/members/29', 'WAKE')
fetch_bio('https://tryfunds.co.jp/company/members/41', 'AKIYAMA')
