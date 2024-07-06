import requests
import json

url = "https://api.godsunchained.com/v0/proto?page=1&perPage=1000000000"
res = requests.get(url)

if res.status_code == 200:
    with open("data.json", "w") as f:
        json.dump(res.json(), f, ensure_ascii=False, indent=4)