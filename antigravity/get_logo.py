import urllib.request
import re
try:
    html = urllib.request.urlopen("https://tryfunds.co.jp").read().decode("utf-8")
    svgs = re.findall(r"src=[\'\"]([^\'\"]*\.svg)[\'\"]", html)
    print("SVGS:", svgs)
except Exception as e:
    print(e)
