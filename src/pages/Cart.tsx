import React from 'react';
import { Link, useNavigate } from 'react-router';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductImage } from '../components/ProductImage';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

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
          <ShoppingBag className="h-16 w-16 text-[#a1a1aa]" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Your cart is empty</h2>
        <p className="text-[#a1a1aa] mb-8 text-center max-w-md">
          Looks like you haven't added any fitness gear to your cart yet.
        </p>
        <Link 
          to="/products" 
          className="bg-[#ef233c] hover:bg-[#ef233c]/80 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-none shadow-none"
        >
          Start Shopping
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
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-[#18181b] rounded-2xl shadow-none border border-[rgba(255,255,255,0.1)] overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-[rgba(255,255,255,0.1)] text-sm font-bold text-[#a1a1aa] uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="divide-y divide-zinc-100">
                {items.map(item => (
                  <div key={item.id} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">
                    <div className="col-span-6 flex items-center gap-4 w-full">
                      <ProductImage src={item.image} category={item.category} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-[#27272a]" />
                      <div className="flex-1">
                        <Link to={`/products/${item.id}`} className="font-bold text-white hover:text-[#ef233c] transition-colors line-clamp-2">
                          {item.name}
                        </Link>
                        <div className="text-sm text-[#a1a1aa] mt-1">{item.category}</div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#ef233c] text-sm font-medium mt-2 flex items-center gap-1 hover:text-[#ef233c]"
                        >
                          <Trash2 className="h-3 w-3" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-center font-medium text-white w-full sm:w-auto flex justify-between sm:block">
                      <span className="sm:hidden text-[#a1a1aa]">Price:</span>
                      ₹{Number(item.price || 0).toLocaleString('en-IN')}
                    </div>
                    
                    <div className="col-span-2 flex justify-center w-full sm:w-auto">
                      <div className="flex items-center border border-[rgba(255,255,255,0.1)] rounded-lg bg-[#18181b]">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-[#27272a] text-[#a1a1aa] transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-[#27272a] text-[#a1a1aa] transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-right font-bold text-white w-full sm:w-auto flex justify-between sm:block">
                      <span className="sm:hidden text-[#a1a1aa]">Total:</span>
                      ₹{(Number(item.price || 0) * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-[#18181b] p-6 rounded-2xl shadow-none border border-[rgba(255,255,255,0.1)] sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">₹{Number(total || 0).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#28a745]">Free</span>
                </div>
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Tax (18% GST incl.)</span>
                  <span className="font-medium text-white">₹{Math.round(total * 0.18).toLocaleString('en-IN')}</span>
                </div>
                
                <div className="pt-4 border-t border-[rgba(255,255,255,0.1)]">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Total</span>
                    <span className="text-2xl font-extrabold text-[#ef233c]">₹{Number(total || 0).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#ef233c] hover:bg-[#ef233c] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-none"
              >
                Proceed to Checkout <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <input 
                    type="text" 
                    placeholder="Coupon Code" 
                    className="flex-1 border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-500"
                  />
                  <button className="bg-[#27272a] hover:bg-zinc-200 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
