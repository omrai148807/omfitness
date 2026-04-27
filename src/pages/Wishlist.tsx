import React from 'react';
import { Link, useNavigate } from 'react-router';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { ProductImage } from '../components/ProductImage';
import { useCart } from '../context/CartContext';

export const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#000000] px-4 relative">
        <button 
          onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')}
          className="absolute top-8 left-4 md:left-8 lg:left-12 flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <div className="bg-[#18181b] p-8 rounded-full shadow-none mb-6">
          <Heart className="h-16 w-16 text-[#a1a1aa]" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Your wishlist is empty</h2>
        <p className="text-[#a1a1aa] mb-8 text-center max-w-md">
          Save items you love to your wishlist. Review them anytime and easily move them to cart.
        </p>
        <Link 
          to="/products" 
          className="bg-[#ef233c] hover:bg-[#ef233c] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-none"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#000000] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')}
          className="flex items-center gap-2 text-[#a1a1aa] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8">My Wishlist</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(product => (
            <div key={product.id} className="bg-[#18181b] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-none flex flex-col">
              <div className="relative aspect-square bg-[#27272a]">
                <ProductImage src={product.image} category={product.category} alt={product.name} className="w-full h-full object-cover" />
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-[#18181b]/80 backdrop-blur-sm hover:bg-[#18181b] text-[#ef233c] transition-colors z-10"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-semibold text-white line-clamp-2 hover:text-[#ef233c] transition-colors mb-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="font-bold text-lg text-white mb-4">
                  ₹{Number(product.price || 0).toLocaleString('en-IN')}
                </div>
                <button 
                  onClick={() => handleMoveToCart(product)}
                  className="mt-auto w-full bg-[#ef233c] hover:bg-[#ef233c] text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" /> Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
