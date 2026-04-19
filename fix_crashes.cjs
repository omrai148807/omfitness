const fs = require('fs');
const files = [
  'src/pages/Wishlist.tsx',
  'src/pages/Cart.tsx',
  'src/pages/Checkout.tsx',
  'src/pages/ProductDetail.tsx',
  'src/pages/Products.tsx',
  'src/components/ProductCard.tsx'
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/\{product\.price\.toLocaleString/g, "{Number(product.price || 0).toLocaleString");
  content = content.replace(/\{item\.price\.toLocaleString/g, "{Number(item.price || 0).toLocaleString");
  content = content.replace(/\{\(item\.price \* item\.quantity\)\.toLocaleString/g, "{(Number(item.price || 0) * item.quantity).toLocaleString");
  
  // also handle total
  content = content.replace(/total\.toLocaleString/g, "Number(total || 0).toLocaleString");
  
  // also handle priceRange
  content = content.replace(/priceRange\.toLocaleString/g, "Number(priceRange || 0).toLocaleString");

  fs.writeFileSync(f, content);
}
