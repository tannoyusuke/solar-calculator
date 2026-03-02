import json

with open('all_bios.json', 'r', encoding='utf-8') as f:
    bios = json.load(f)

# Canonical data from live site scrape (fix_names.py output)
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
  {"id": "41", "nameJa": "秋山 寛次", "nameEn": "Hirotsugu Akiyama", "role": "エンゲージメント・マネージャー<br />Tryfunds Investment 取締役"},
  {"id": "45", "nameJa": "家本 政明", "nameEn": "Masaaki Iemoto", "role": "シニア・プロフェッショナル"},
  {"id": "32", "nameJa": "丹野 裕氏", "nameEn": "Hiroshi Tanno", "role": "シニア・アドバイザー"},
  {"id": "33", "nameJa": "石井 正", "nameEn": "Tadashi Ishii", "role": "シニア・アドバイザー"},
  {"id": "34", "nameJa": "川島 孝一", "nameEn": "Koichi Kawashima", "role": "シニア・アドバイザー"},
  {"id": "35", "nameJa": "上杉 潔", "nameEn": "Kiyoshi Uesugi", "role": "シニア・アドバイザー"},
  {"id": "40", "nameJa": "金巻 龍一", "nameEn": "Ryuichi Kanemaki", "role": "シニア・アドバイザー"},
  {"id": "47", "nameJa": "片桐 純", "nameEn": "Jun Katagiri", "role": "シニア・アドバイザー"},
  {"id": "51", "nameJa": "北野 亮", "nameEn": "Makoto Kitano", "role": "シニア・アドバイザー"}
]

out = """export interface Member {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  imageUrl: string;
  description: string;
}

export const members: Member[] = [
"""

for m in members_list:
    mid = m['id']
    desc = bios.get(mid, "")
    desc_escaped = desc.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    
    out += f"  {{\n"
    out += f"    id: '{mid}',\n"
    out += f"    name: '{m['nameJa']}',\n"
    out += f"    nameEn: '{m['nameEn']}',\n"
    out += f"    role: '{m['role']}',\n"
    out += f"    imageUrl: '/images/members/mem_{mid}.jpg',\n"
    out += f"    description: `{desc_escaped}`\n"
    out += f"  }},\n"

out += "];\n"

with open('data/members.ts', 'w', encoding='utf-8') as f:
    f.write(out)

print("members.ts rebuilt with correct names!")

# Print a summary of changes
print("\n=== Names used ===")
for m in members_list:
    print(f"  ID {m['id']}: {m['nameJa']} ({m['nameEn']}) - {m['role']}")
