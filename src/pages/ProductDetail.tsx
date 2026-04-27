import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Star, Heart, ShoppingCart, Truck, Shield, ArrowLeft, Minus, Plus, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductImage } from '../components/ProductImage';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#000000]">
        <h2 className="text-2xl font-bold mb-4 text-white">Product not found</h2>
        <button onClick={() => navigate('/products')} className="text-[#ef233c] hover:underline">
          Back to Products
        </button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#000000] min-h-screen py-8 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')}
          className="flex items-center gap-2 text-[#a1a1aa] hover:text-white mb-8 transition-colors group tracking-wide text-sm font-medium uppercase"
        >
          <motion.div whileHover={{ x: -2 }}><ArrowLeft className="h-4 w-4" /></motion.div> Back to collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image Gallery - Left Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="sticky top-24">
              <div className="bg-[#18181b] rounded-[2rem] overflow-hidden aspect-square relative shadow-2xl ring-1 ring-white/5">
                {/* Subtle gradient overlay to enhance "commercial product photography" feel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 z-10 pointer-events-none" />
                <ProductImage 
                  src={product.image} category={product.category} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Product Info - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-xs font-bold text-[#ef233c] tracking-[0.2em] uppercase">
              OMFITGEAR / {product.category}
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter mb-4 leading-tight">
              {product.name}
            </motion.h1>
            
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 bg-[#18181b] px-3 py-1.5 rounded-full border border-white/5">
                <Star className="h-4 w-4 fill-[#ef233c] text-[#ef233c]" />
                <span className="font-bold text-sm text-white">{product.rating}</span>
              </div>
              <span className="text-[#a1a1aa] text-sm hover:text-white transition-colors cursor-pointer border-b border-[#a1a1aa] hover:border-white border-dashed pb-0.5">
                Based on {product.reviews} Reviews
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-end gap-3 mb-8">
              <span className="text-5xl font-bold text-white tracking-tight">
                ₹{Number(product.price || 0).toLocaleString('en-IN')}
              </span>
              <span className="text-[#a1a1aa] text-sm pb-1.5 uppercase tracking-wider font-medium">INR</span>
            </motion.div>

            {/* Glassmorphism Description Card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef233c]/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
              <p className="text-[#c0c0c0] text-lg leading-relaxed font-light">
                {/* Simulated SEO Description based on prompt */}
                Elevate your training with the {product.name.toLowerCase()}, engineered for peak performance and unparalleled durability. {product.description}
              </p>
              
              <ul className="mt-6 space-y-3">
                {['Commercial-grade construction', 'Optimized for high-intensity training', 'Ergonomic performance design'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#ef233c]/20 p-0.5 rounded-full">
                      <Check className="h-3 w-3 text-[#ef233c]" />
                    </div>
                    <span className="text-[#a1a1aa] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 bg-[#141414] rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium text-white text-sm uppercase tracking-wider mb-1">Select Quantity</span>
                <span className="text-xs text-[#a1a1aa]">
                  {product.stock > 0 ? `${product.stock} units available` : 'Out of stock'}
                </span>
              </div>
              <div className="flex items-center bg-[#000000] border border-[rgba(255,255,255,0.1)] rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#27272a] text-[#a1a1aa] hover:text-white transition-colors rounded-l-lg"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-bold text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-3 hover:bg-[#27272a] text-[#a1a1aa] hover:text-white transition-colors rounded-r-lg"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button 
                whileHover={{ scale: product.stock === 0 ? 1 : 1.02 }}
                whileTap={{ scale: product.stock === 0 ? 1 : 0.98 }}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-gradient-to-r from-[#ef233c] to-[#8d0801] hover:from-[#ff4d6d] hover:to-[#d90429] disabled:from-zinc-600 disabled:to-zinc-700 text-black py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(239,35,60,0.3)] disabled:shadow-none"
              >
                <ShoppingCart className="h-5 w-5" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWishlistToggle}
                className={`py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all border-2 ${
                  isWishlisted 
                    ? 'border-[#ef233c] text-[#ef233c] bg-[#ef233c]/10' 
                    : 'border-[rgba(255,255,255,0.1)] text-[#a1a1aa] hover:border-[#ef233c] hover:text-[#ef233c] bg-[#18181b]'
                }`}
              >
                <Heart className={`h-5 w-5 transition-colors ${isWishlisted ? 'fill-[#ef233c]' : ''}`} />
              </motion.button>
            </motion.div>

            {/* Specifications Table */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Specifications</h3>
              <div className="border border-white/10 rounded-xl overflow-hidden bg-[#18181b]">
                <table className="w-full text-sm text-left">
                  <tbody>
                    <tr className="border-b border-white/5">
                      <th className="px-4 py-3 font-medium text-[#a1a1aa] w-1/3 bg-[#141414]">Material</th>
                      <td className="px-4 py-3 text-white">Premium Commercial Grade</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <th className="px-4 py-3 font-medium text-[#a1a1aa] w-1/3 bg-[#141414]">Finish</th>
                      <td className="px-4 py-3 text-white">Matte Black / Metallic</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-3 font-medium text-[#a1a1aa] w-1/3 bg-[#141414]">Usage</th>
                      <td className="px-4 py-3 text-white">Home & Commercial Gyms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[rgba(255,255,255,0.1)] pt-8">
              <div className="flex items-center gap-4 bg-[#141414] p-4 rounded-xl border border-white/5">
                <div className="bg-[#ef233c]/10 p-2.5 rounded-full text-[#ef233c]">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Secure Shipping</h4>
                  <p className="text-xs text-[#a1a1aa]">Nationwide delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#141414] p-4 rounded-xl border border-white/5">
                <div className="bg-[#ef233c]/10 p-2.5 rounded-full text-[#ef233c]">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Quality Guarantee</h4>
                  <p className="text-xs text-[#a1a1aa]">30-day return policy</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
