import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Star, Heart, ShoppingCart, Truck, Shield, ArrowLeft, Minus, Plus } from 'lucide-react';
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button onClick={() => navigate('/products')} className="text-[#D4AF37] hover:underline">
          Back to Products
        </button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: Show toast notification
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
      className="bg-[#0a0a0a] min-h-screen py-8 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')}
          className="flex items-center gap-2 text-[#a0a0a0] hover:text-white mb-8 transition-colors group"
        >
          <motion.div whileHover={{ x: -2 }}><ArrowLeft className="h-4 w-4" /></motion.div> Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#252525] rounded-2xl overflow-hidden aspect-square relative"
          >
            <ProductImage 
              src={product.image} category={product.category} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex flex-col"
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-2 text-sm font-bold text-[#D4AF37] tracking-wider uppercase">
              {product.category}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              {product.name}
            </motion.h1>
            
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 bg-[#252525] px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-[#ffb400] text-[#ffb400]" />
                <span className="font-bold text-sm">{product.rating}</span>
              </div>
              <span className="text-[#a0a0a0] text-sm underline cursor-pointer">
                Read {product.reviews} Reviews
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-6">
              ₹{Number(product.price || 0).toLocaleString('en-IN')}
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
              {product.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-semibold text-white">Quantity</span>
                <div className="flex items-center border border-[#2a2a2a] rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-[#252525] text-[#a0a0a0] transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-[#252525] text-[#a0a0a0] transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-[#a0a0a0]">
                  {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button 
                whileHover={{ scale: product.stock === 0 ? 1 : 1.02 }}
                whileTap={{ scale: product.stock === 0 ? 1 : 0.98 }}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-[#D4AF37] hover:bg-[#D4AF37]/80 disabled:bg-zinc-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWishlistToggle}
                className={`py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors border-2 ${
                  isWishlisted 
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5' 
                    : 'border-[#2a2a2a] text-[#a0a0a0] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-[#D4AF37]' : ''}`} />
                {isWishlisted ? 'Saved' : 'Wishlist'}
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#2a2a2a]">
              <div className="flex items-center gap-3">
                <div className="bg-[#252525] p-2 rounded-full text-white">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Free Delivery</h4>
                  <p className="text-xs text-[#a0a0a0]">Enter postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#252525] p-2 rounded-full text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Return Delivery</h4>
                  <p className="text-xs text-[#a0a0a0]">Free 30 Days Delivery Returns.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
