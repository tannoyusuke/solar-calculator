import urllib.request
import re
try:
    html = urllib.request.urlopen("https://tryfunds.co.jp").read().decode("utf-8")
    match = re.search(r'src=["\']([^"\']*logo[^"\']*\.(?:png|svg))["\']', html, re.IGNORECASE)
    if match:
        url = match.group(1)
        if not url.startswith('http'):
            url = ("https://tryfunds.co.jp/" + url).replace(".co.jp//", ".co.jp/")
        print("FOUND URL:", url)
        urllib.request.urlretrieve(url, "public/logo.svg" if url.endswith('.svg') else "public/logo.png")
        print("SAVED LOGO")
    else:
        print("LOGO NOT FOUND")
except Exception as e:
    print("ERR:", e)
