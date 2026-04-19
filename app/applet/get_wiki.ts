import https from 'https';

const searchWikimedia = (query: string): Promise<string | null> => {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&pithumbsize=800`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.query && parsed.query.pages) {
            const pages = parsed.query.pages;
            const firstPageId = Object.keys(pages)[0];
            const imageUrl = pages[firstPageId].thumbnail?.source;
            resolve(imageUrl || null);
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
  "adjustable dumbbell",
  "hex dumbbell",
  "olympic barbell",
  "resistance band",
  "treadmill",
  "yoga mat",
  "weightlifting gloves",
  "protein shaker",
  "weight plate",
  "kettlebell",
  "skipping rope",
  "battle rope",
  "wrist wrap",
  "weightlifting belt",
];

async function run() {
  for (const item of items) {
    const url = await searchWikimedia(item);
    console.log(`${item} | ${url || 'NOT_FOUND'}`);
  }
}

run();
