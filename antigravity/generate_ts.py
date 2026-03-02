import json

members_json = [
  {"id": "24", "nameJa": "丹野 裕介", "nameEn": "Yusuke Tanno", "role": "代表取締役 CEO"},
  {"id": "48", "nameJa": "大堀 格稔", "nameEn": "Kakutoshi Ohori", "role": "プリンシパル"},
  {"id": "30", "nameJa": "久保 伊求馬", "nameEn": "Ikuma Kubo", "role": "プリンシパルTryfunds Investment 取締役"},
  {"id": "29", "nameJa": "和氣 左知子", "nameEn": "Sachiko Wake", "role": "プリンシパル"},
  {"id": "52", "nameJa": "佐々木 実", "nameEn": "Minoru Sasaki", "role": "プリンシパル"},
  {"id": "39", "nameJa": "渡邊 史人", "nameEn": "Fumito Watanabe", "role": "プリンシパル"},
  {"id": "42", "nameJa": "南陽介", "nameEn": "Yosuke Minami", "role": "バイス・プレジデント"},
  {"id": "49", "nameJa": "高木 敦也", "nameEn": "Atsuya Takagi", "role": "バイス・プレジデント"},
  {"id": "50", "nameJa": "仲川 顕太", "nameEn": "Kenta Nakagawa", "role": "バイス・プレジデント"},
  {"id": "44", "nameJa": "大橋昭文", "nameEn": "Akifumi Ohashi", "role": "バイス・プレジデント"},
  {"id": "46", "nameJa": "松井一樹", "nameEn": "Kazuki Matsui", "role": "エンゲージメント・マネージャー"},
  {"id": "41", "nameJa": "秋山寛次", "nameEn": "Hirotsugu Akiyama", "role": "エンゲージメント・マネージャーTryfunds Investment取締役"},
  {"id": "45", "nameJa": "家本政明", "nameEn": "Masaaki Iemoto", "role": "シニア・プロフェッショナル"},
  {"id": "32", "nameJa": "丹野 裕氏", "nameEn": "Hiroshi Tanno", "role": "シニア・アドバイザー"},
  {"id": "33", "nameJa": "石井 正", "nameEn": "Tadashi Ishii", "role": "シニア・アドバイザー"},
  {"id": "34", "nameJa": "川島 孝一", "nameEn": "Koichi Kawashima", "role": "シニア・アドバイザー"},
  {"id": "35", "nameJa": "上杉 潔", "nameEn": "Kiyoshi Uesugi", "role": "シニア・アドバイザー"},
  {"id": "40", "nameJa": "金巻 龍一", "nameEn": "Ryuichi Kanemaki", "role": "シニア・アドバイザー"},
  {"id": "47", "nameJa": "片桐 純", "nameEn": "Jun Katagiri", "role": "シニア・アドバイザー"},
  {"id": "51", "nameJa": "北野亮", "nameEn": "Makoto Kitano", "role": "シニア・アドバイザー"}
]

# Manual Bios
bios = {
    "24": "リクルート（現リクルートホールディングス）を経て、2012年に株式会社Tryfunds(トライファンズ)を創業し代表取締役CEOに就任。日本企業の海外進出コンサルティング、新規事業開発、M&Aアドバイザリーなどを手がけ、東証1部上場企業から中小企業まで500プロジェクト以上を手がける。\n\n上場企業を含む複数社の経営に従事し、学生起業したスポーツマネジメント会社を売却した経験も持つ。\n\n早稲田大学スポーツ科学部卒\n\n株式会社Tryfunds 代表取締役CEO\n株式会社Sustech 代表取締役社長",
    "30": "アーサー・アンダーセンにて、事業ポートフォリオの再構築、企業価値評価、投融資支援、企業再生業務に従事。その後、同社財務戦略部門がスピンアウトしたブティック系コンサルティングファームにおいて、主に事業化支援、投融資支援、企業再生、企業価値評価業務に従事。EYアドバイザリー・アンド・コンサルティングでは、上場企業の海外統括本社設立業務、事業戦略立案支援業務、事業化支援業務、投融資戦略立案支援業務、企業再生業務、ビジネス・デューディリジェンス、M&A支援業務に従事。Tryfundsではコンサルティング事業の統括及び事業開発の企画・推進を担当。\n\n早稲田大学法学部卒\n株式会社Tryfunds Investment取締役",
    "29": "JPモルガン証券 投資銀行本部にて、製薬・資源/エネルギー・商社・化学/繊維・非鉄金属業界等の国内外の上場企業に対する国内間・国際間のM&Aアドバイザリー業務に従事。アプローチからデュー・ディリジェンス（DD）、交渉、クロージングまでのM&Aの実行プロセスをプロジェクト・リーダーとして行う。また、国内上場企業の株式引受業務、国内外のLBOファイナンス業務、米国NASDAQ上場等ファイナンス業務にも主導的な立場で携わった実績を有す。最終職位はエグゼクティブダイレクター。Tryfundsでは、M&Aアドバイザリー事業部で国内企業の海外買収並びに海外企業の国内買収事案に従事。\n\n京都大学経済学部卒",
    "41": "三菱UFJ銀行にて、中小・中堅企業の財務再構築、事業承継を支援した後、上場企業を含む大・中堅企業やPEファンドに対する買収ファイナンス、シンジケートローン等のストラクチャードファイナンス組成を主導。また、支店の営業企画統括として、支店全体の予算管理や企画立案・推進業務にも従事。Tryfundsでは、上場企業から地方中堅企業まで幅広いクライアントに対する事業開発支援に従事。2023年に株式会社Tryfunds Investmentの取締役に就任し、投資・ファンド事業をリードしている。\n\n大阪大学工学部卒業"
}

# The user explicitly requested order: Tanno, Kubo, Watanabe, Wake
order = ["24", "30", "39", "29"]
remaining_ids = [m["id"] for m in members_json if m["id"] not in order]
final_order = order + remaining_ids

id_to_member = {m["id"]: m for m in members_json}

ts_content = 'import { Member } from "@/types";\n\nexport const members: Member[] = [\n'

for mid in final_order:
    m = id_to_member[mid]
    
    # Format roles safely
    role = m["role"]
    if "Tryfunds Investment" in role and "取締役" in role:
        role = role.replace("Tryfunds Investment 取締役", "Tryfunds Investment 取締役") \
                   .replace("Tryfunds Investment取締役", "Tryfunds Investment 取締役") \
                   .replace("プリンシパルTryfunds", "プリンシパル<br />Tryfunds") \
                   .replace("エンゲージメント・マネージャーTryfunds", "エンゲージメント・マネージャー<br />Tryfunds")
                   
    bio = bios.get(mid, "")
    
    # We use json.dumps for safe string escaping
    ts_content += '    {\n'
    ts_content += f'        "id": "mem_{mid}",\n'
    ts_content += f'        "name": {json.dumps(m["nameJa"])},\n'
    ts_content += f'        "nameEn": {json.dumps(m["nameEn"])},\n'
    ts_content += f'        "role": {json.dumps(role)},\n'
    ts_content += f'        "description": {json.dumps(bio)},\n'
    ts_content += f'        "imageUrl": "/images/members/mem_{mid}.jpg"\n'
    ts_content += '    },\n'

ts_content += '];\n'

with open('data/members.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)
