import bs4
import json

def parse_html(filename, label):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            soup = bs4.BeautifulSoup(f, 'html.parser')
        txt = soup.find(class_='txt')
        print(f"--- {label} ---")
        if txt:
            for br in txt.find_all("br"):
                br.replace_with("\n")
            print(txt.get_text(strip=True))
        else:
            print("NO MATCH")
    except Exception as e:
        print(f"Error {label}: {e}")

parse_html('kubo.html', 'KUBO')
parse_html('wake.html', 'WAKE')
parse_html('akiyama.html', 'AKIYAMA')

try:
    with open('members.html', 'r', encoding='utf-8') as f:
        soup = bs4.BeautifulSoup(f, 'html.parser')
    
    # Locate the member list container
    list_container = soup.find(class_='member_list')
    if list_container:
        members = []
        for li in list_container.find_all('li'):
            a_tag = li.find('a')
            if not a_tag: continue
            
            link = a_tag.get('href', '')
            job_tit = li.find(class_='job_tit')
            name_ja = li.find(class_='name_ja')
            name_en = li.find(class_='name_en')
            
            if name_ja:
                for br in job_tit.find_all("br"):
                    br.replace_with("\n")
                role_text = job_tit.get_text(strip=True) if job_tit else ''
                members.append({
                    'nameJa': name_ja.get_text(strip=True),
                    'nameEn': name_en.get_text(strip=True) if name_en else '',
                    'role': role_text,
                    'url': link
                })
        print("--- MEMBERS LIST ---")
        print(json.dumps(members, ensure_ascii=False, indent=2))
except Exception as e:
    print(f"Error MEMBERS: {e}")
