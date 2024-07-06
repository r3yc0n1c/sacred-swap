import pandas as pd
import re

f = pd.read_json("data.json")
CLEANR = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});')

for record in f["records"]:
    cleaned = re.sub(CLEANR, ' ', record["effect"])
    record["effect"] = cleaned

df = pd.json_normalize(f['records'])

print(df)
df.to_csv("cards.csv", index=False)
