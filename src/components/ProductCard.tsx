import React from 'react';
import { Link } from 'react-router';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { items, addToCart, updateQuantity, removeFromCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  
  const cartItem = items.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#2a2a2a] hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col"
    >
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#252525]">
        <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105">
          <ProductImage 
            src={product.image} category={product.category} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <button 
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2 rounded-full bg-[#1a1a1a]/80 backdrop-blur-sm hover:bg-[#1a1a1a] text-[#a0a0a0] hover:text-[#D4AF37] transition-colors z-10"
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-yellow-500 text-[#D4AF37]' : ''}`} />
        </button>
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-[#a0a0a0] mb-1 font-medium tracking-wider uppercase">{product.category}</div>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-white line-clamp-2 transition-colors mb-2 group-hover:text-[#D4AF37]">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
          <span className="text-sm font-medium text-white">{product.rating}</span>
          <span className="text-xs text-[#a0a0a0]">({product.reviews})</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
          <div className="font-bold text-lg text-white">
            ₹{Number(product.price || 0).toLocaleString('en-IN')}
          </div>
          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-[#D4AF37] rounded">
                <button 
                  onClick={(e) => { e.preventDefault(); quantity === 1 ? removeFromCart(product.id) : updateQuantity(product.id, quantity - 1); }}
                  className="px-2 py-1 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-colors"
                >
                  -
                </button>
                <span className="px-2 py-1 text-xs font-semibold text-white">{quantity}</span>
                <button 
                  onClick={(e) => { e.preventDefault(); updateQuantity(product.id, quantity + 1); }}
                  className="px-2 py-1 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-colors"
                >
                  +
                </button>
              </div>
              <Link 
                to="/cart"
                className="flex items-center justify-center bg-[#D4AF37] text-[#0a0a0a] px-2 py-1.5 rounded text-xs font-semibold transition-colors hover:bg-[#c4a030]"
                title="Go to Cart"
              >
                Cart
              </Link>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-transparent border border-[#D4AF37] text-[#D4AF37] px-3 py-1.5 rounded text-xs font-semibold transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0a0a0a]"
              title="Add to Cart"
            >
              + ADD
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
