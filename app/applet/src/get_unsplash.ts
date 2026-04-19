import https from 'https';

const searchUnsplash = (query: string): Promise<string | null> => {
  return new Promise((resolve) => {
    const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=3&orientation=squarish`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.results && parsed.results.length > 0) {
            const result = parsed.results[0];
            resolve(result.urls.raw.split('?')[0] + '?auto=format&fit=crop&q=80&w=800');
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
};

const items = [
  "adjustable dumbbells rack",
  "heavy hex dumbbells gym",
  "olympic barbell weight",
  "resistance bands workout",
  "fitness treadmill running",
  "yoga mat rolled",
  "gym gloves workout",
  "protein shaker bottle",
  "weight plates barbell",
  "kettlebell gym",
  "skipping rope fitness",
  "battle ropes gym",
  "wrist wraps workout",
  "weightlifting belt leather",
  "home gym bundle"
];

async function run() {
  for (const item of items) {
    const url = await searchUnsplash(item);
    console.log(`${item} | ${url || 'NOT_FOUND'}`);
  }
}

run();
