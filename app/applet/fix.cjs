const fs = require('fs');

let t = fs.readFileSync('src/data/products.ts', 'utf8');

const updates = {
  'p1': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/TwoDumbbells.JPG',
  'p2': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
  'p5': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Exercise_Treadmill_Convey_Motion.jpg/800px-Exercise_Treadmill_Convey_Motion.jpg',
  'p6': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ardha-Nav%C4%81sana.JPG/800px-Ardha-Nav%C4%81sana.JPG',
  'p9': 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&q=80&w=800',
  'p10': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Weightlifting.jpg/800px-Weightlifting.jpg',
  'p11': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Competition_kettlebell_16_kilo.jpg/800px-Competition_kettlebell_16_kilo.jpg',
  'p21': 'https://upload.wikimedia.org/wikipedia/commons/8/83/LiftingBelt.JPG'
};

for (const [id, url] of Object.entries(updates)) {
  const regex = new RegExp("id: '" + id + "',([\\s\\S]*?)image: ''", 'g');
  t = t.replace(regex, "id: '" + id + "',$1image: '" + url + "'");
}

fs.writeFileSync('src/data/products.ts', t);
