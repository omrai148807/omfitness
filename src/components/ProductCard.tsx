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
      className="group relative bg-[#18181b] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] hover:shadow-2xl hover:shadow-[#ef233c]/10 hover:border-[#ef233c]/30 transition-all duration-300 flex flex-col"
    >
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#27272a]">
        <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105">
          <ProductImage 
            src={product.image} category={product.category} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <button 
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2 rounded-full bg-[#18181b]/80 backdrop-blur-sm hover:bg-[#18181b] text-[#a1a1aa] hover:text-[#ef233c] transition-colors z-10"
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-[#ef233c]' : ''}`} />
        </button>
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-[#a1a1aa] mb-1 font-medium tracking-wider uppercase">{product.category}</div>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-white line-clamp-2 transition-colors mb-2 group-hover:text-[#ef233c]">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-[#ef233c] text-[#ef233c]" />
          <span className="text-sm font-medium text-white">{product.rating}</span>
          <span className="text-xs text-[#a1a1aa]">({product.reviews})</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.1)]">
          <div className="font-bold text-lg text-white">
            ₹{Number(product.price || 0).toLocaleString('en-IN')}
          </div>
          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-[#ef233c] rounded">
                <button 
                  onClick={(e) => { e.preventDefault(); quantity === 1 ? removeFromCart(product.id) : updateQuantity(product.id, quantity - 1); }}
                  className="px-2 py-1 text-[#ef233c] hover:bg-[#ef233c] hover:text-[#000000] transition-colors"
                >
                  -
                </button>
                <span className="px-2 py-1 text-xs font-semibold text-white">{quantity}</span>
                <button 
                  onClick={(e) => { e.preventDefault(); updateQuantity(product.id, quantity + 1); }}
                  className="px-2 py-1 text-[#ef233c] hover:bg-[#ef233c] hover:text-[#000000] transition-colors"
                >
                  +
                </button>
              </div>
              <Link 
                to="/cart"
                className="flex items-center justify-center bg-[#ef233c] text-[#000000] px-2 py-1.5 rounded text-xs font-semibold transition-colors hover:bg-[#d90429]"
                title="Go to Cart"
              >
                Cart
              </Link>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-transparent border border-[#ef233c] text-[#ef233c] px-3 py-1.5 rounded text-xs font-semibold transition-all duration-300 group-hover:bg-[#ef233c] group-hover:text-[#000000]"
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
