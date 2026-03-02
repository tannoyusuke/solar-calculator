import json
import re

with open('all_bios.json', 'r', encoding='utf-8') as f:
    bios = json.load(f)

# Read the existing members.ts to extract everything except the description
with open('data/members.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

# We can parse the array using regex or simply rebuild it. Let's rebuild it manually based on the IDs
members_list = [
  {"id": "24", "nameJa": "丹野 裕介", "nameEn": "Yusuke Tanno", "role": "代表取締役 CEO"},
  {"id": "30", "nameJa": "久保 伊求馬", "nameEn": "Ikuma Kubo", "role": "プリンシパル<br />Tryfunds Investment 取締役"},
  {"id": "39", "nameJa": "渡邊 史人", "nameEn": "Fumito Watanabe", "role": "プリンシパル"},
  {"id": "29", "nameJa": "和氣 左知子", "nameEn": "Sachiko Wake", "role": "プリンシパル"},
  {"id": "48", "nameJa": "大堀 格稔", "nameEn": "Kakutoshi Ohori", "role": "プリンシパル"},
  {"id": "52", "nameJa": "佐々木 実", "nameEn": "Minoru Sasaki", "role": "プリンシパル"},
  {"id": "42", "nameJa": "南 陽介", "nameEn": "Yosuke Minami", "role": "バイス・プレジデント"},
  {"id": "49", "nameJa": "高木 敦也", "nameEn": "Atsuya Takagi", "role": "バイス・プレジデント"},
  {"id": "50", "nameJa": "仲川 顕太", "nameEn": "Kenta Nakagawa", "role": "バイス・プレジデント"},
  {"id": "44", "nameJa": "大橋 昭文", "nameEn": "Akifumi Ohashi", "role": "バイス・プレジデント"},
  {"id": "46", "nameJa": "松井 一樹", "nameEn": "Kazuki Matsui", "role": "エンゲージメント・マネージャー"},
  {"id": "41", "nameJa": "秋山 寛次", "nameEn": "Kanji Akiyama", "role": "Tryfunds Investment<br />取締役"},
  {"id": "45", "nameJa": "家本 政明", "nameEn": "Masaaki Iemoto", "role": "マネージャー"},
  {"id": "32", "nameJa": "岩尾 伸広", "nameEn": "Nobuhiro Iwao", "role": "シニア・アドバイザー"},
  {"id": "33", "nameJa": "山本 浩二", "nameEn": "Koji Yamamoto", "role": "シニア・アドバイザー"},
  {"id": "34", "nameJa": "吉田 憲次", "nameEn": "Kenji Yoshida", "role": "シニア・アドバイザー"},
  {"id": "35", "nameJa": "下川 宏", "nameEn": "Hiroshi Shimokawa", "role": "シニア・アドバイザー"},
  {"id": "40", "nameJa": "川嶋 治", "nameEn": "Osamu Kawashima", "role": "シニア・アドバイザー"},
  {"id": "47", "nameJa": "佐藤 毅", "nameEn": "Takeshi Sato", "role": "シニア・アドバイザー"},
  {"id": "51", "nameJa": "加藤 雄吉", "nameEn": "Yukichi Kato", "role": "シニア・アドバイザー"}
]

out = "export interface Member {\n  id: string;\n  name: string;\n  nameEn: string;\n  role: string;\n  imageUrl: string;\n  description: string;\n}\n\nexport const members: Member[] = [\n"

for m in members_list:
    mid = m['id']
    desc = bios.get(mid, "")
    # Format description to escape quotes and newlines properly for TS template literal
    desc_str = desc.replace('`', '\\`')
    
    out += f"  {{\n"
    out += f"    id: '{mid}',\n"
    out += f"    name: '{m['nameJa']}',\n"
    out += f"    nameEn: '{m['nameEn']}',\n"
    out += f"    role: '{m['role']}',\n"
    out += f"    imageUrl: '/images/members/mem_{mid}.jpg',\n"
    out += f"    description: `{desc_str}`\n"
    out += f"  }},\n"

out += "];\n"

with open('data/members.ts', 'w', encoding='utf-8') as f:
    f.write(out)

print("members.ts updated.")
