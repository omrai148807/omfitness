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
  "adjustable dumbbells on rack",
  "heavy hex dumbbells gym",
  "olympic barbell gym",
  "fitness resistance bands",
  "running treadmill gym",
  "rolled yoga mat plain",
  "workout gym gloves",
  "protein shaker bottle gym",
  "weight plates barbell",
  "kettlebell gym floor",
  "digital skipping rope",
  "battle ropes gym",
  "gym wrist wraps",
  "leather weightlifting belt",
  "home gym equipment bundle"
];

async function run() {
  for (const item of items) {
    const url = await searchUnsplash(item);
    console.log(`${item} | ${url || 'NOT_FOUND'}`);
  }
}

run();
