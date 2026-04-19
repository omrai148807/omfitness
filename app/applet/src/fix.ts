import fs from 'fs';

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

const restore:Record<string, any> = {
  'p1': {
    name: 'Adjustable Dumbbell Set 20kg',
    description: 'High-quality adjustable dumbbells for home workouts. Easy to change weights.',
    price: 4500,
    category: 'Dumbbells'
  },
  'p2': {
    name: 'Hex Dumbbells 5kg Pair',
    description: 'Rubber coated hex dumbbells, perfect for isolation exercises.',
    price: 1200,
    category: 'Dumbbells'
  },
  'p5': {
    name: 'Motorized Treadmill with Incline',
    description: 'Foldable motorized treadmill with heart rate monitor and auto-incline.',
    price: 35000,
    category: 'Treadmills'
  },
  'p6': {
    name: 'Eco-Friendly Yoga Mat 6mm',
    description: 'Non-slip, eco-friendly TPE yoga mat with alignment lines.',
    price: 899,
    category: 'Yoga Mats'
  },
  'p9': {
    name: 'OMFITGEAR TitanPro Adjustable Dumbbells',
    description: 'Heavy-duty, long-lasting adjustable dumbbells for serious lifters.',
    price: 15000,
    category: 'Dumbbells'
  },
  'p10': {
    name: 'OMFITGEAR IronForge Olympic Plate Set',
    description: 'Elite Strength Series Olympic plate set. Heavy-duty and long-lasting.',
    price: 25000,
    category: 'Plates'
  },
  'p11': {
    name: 'OMFITGEAR BeastX Kettlebell (Cast Iron Series)',
    description: 'Premium cast iron kettlebell for elite strength training.',
    price: 3500,
    category: 'Kettlebells'
  },
  'p21': {
    name: 'OMFITGEAR PowerCore Lifting Belt',
    description: 'Premium lifting belt for core support during heavy compound movements.',
    price: 3500,
    category: 'Support & Protection'
  }
};

for (const [id, url] of Object.entries(updates)) {
  const r = new RegExp("id: '" + id + "',image: ''");
  if (t.match(r)) {
      const d = restore[id];
      t = t.replace(r, "id: '" + id + "',\n    name: '" + d.name + "',\n    description: '" + d.description + "',\n    price: " + d.price + ",\n    category: '" + d.category + "',\n    image: '" + url + "'");
  }
}

fs.writeFileSync('src/data/products.ts', t);
