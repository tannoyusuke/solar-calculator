import urllib.request
import re
import json
import os

base_url = "https://tryfunds.co.jp"
index_url = base_url + "/company/members/"
out_dir = "public/images/members/"
os.makedirs(out_dir, exist_ok=True)

try:
    html = urllib.request.urlopen(index_url).read().decode('utf-8')
except Exception as e:
    print("Could not fetch index:", e)
    exit(1)

pattern = re.compile(r'<a href="(/company/members/\d+/?)"[^>]*>.*?<img src="([^"]+)".*?<div class="job_tit">([^<]+)</div>.*?<div class="name_ja">([^<]+)</div>.*?<div class="name_en">([^<]+)</div>', re.DOTALL)

members = []
for m in pattern.finditer(html):
    detail_path = m.group(1)
    img_src = m.group(2)
    role = m.group(3).strip()
    name = m.group(4).strip()
    name_en = m.group(5).strip()
    
    m_id = "mem_" + img_src.split('/')[-1].split('.')[0]
    
    img_url = base_url + img_src
    local_img = out_dir + m_id + ".jpg"
    try:
        urllib.request.urlretrieve(img_url, local_img)
    except Exception as e:
        print("Image fail:", e)
        pass
    
    desc = "Tryfunds Group プロフェッショナルメンバー"
    if detail_path:
        detail_url = base_url + detail_path
        try:
            dhtml = urllib.request.urlopen(detail_url).read().decode('utf-8')
            txt_match = re.search(r'<div class="txt">(.*?)</div>', dhtml, re.DOTALL)
            if txt_match:
                raw_desc = txt_match.group(1)
                raw_desc = re.sub(r'<br\s*/?>', '\n', raw_desc)
                raw_desc = re.sub(r'<[^>]+>', '', raw_desc).replace('&nbsp;', ' ').strip()
                if len(raw_desc) > 10:
                    desc = raw_desc
        except Exception as e:
            print("Detail fail:", e)
            pass
            
    members.append({
        "id": m_id,
        "name": name,
        "nameEn": name_en,
        "role": role,
        "description": desc,
        "imageUrl": f"/images/members/{m_id}.jpg"
    })

js_content = 'export type Member = {\n    id: string;\n    name: string;\n    nameEn: string;\n    role: string;\n    description: string;\n    imageUrl: string;\n};\n\nexport const members: Member[] = ' + json.dumps(members, ensure_ascii=False, indent=4) + ';\n'

with open('data/members.ts', 'w') as f:
    f.write(js_content)

print(f"Successfully scraped {len(members)} members.")
