import urllib.request
import urllib.parse
import json

def search_unsplash(query):
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['results']:
                return data['results'][0]['urls']['raw'].split('?')[0] + "?auto=format&fit=crop&q=80&w=800"
    except Exception as e:
        print(f"Error for {query}: {e}")
    return None

items = [
    "adjustable dumbbells",
    "dumbbells",
    "olympic barbell",
    "resistance bands",
    "treadmill",
    "yoga mat",
    "gym gloves",
    "protein shaker bottle",
    "weight plates gym",
    "kettlebell",
    "skipping rope",
    "battle rope gym",
    "wrist wraps gym",
    "weightlifting belt",
    "home gym equipment"
]

for item in items:
    url = search_unsplash(item)
    print(f"{item}|{url}")
