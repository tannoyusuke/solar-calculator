import urllib.request
import re
import json

try:
    html = urllib.request.urlopen("https://tryfunds.co.jp/company/members/").read().decode("utf-8")
    members = []
    
    # Very rudimentary parsing to find member cards
    # Tryfunds member list usually has something like "class='member-card'" or "name", etc.
    # Searching for typical Japanese names or English tags
    names = re.findall(r'<h3[^>]*>([^<]+)</h3>', html)
    print("NAMES:", names[:5])
    
    # Finding images
    imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html)
    member_imgs = [img for img in imgs if 'member' in img.lower() or 'people' in img.lower()]
    print("IMGS:", member_imgs[:5])

except Exception as e:
    print("ERR:", e)
