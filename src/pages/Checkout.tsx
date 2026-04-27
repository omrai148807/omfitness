import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { ProductImage } from '../components/ProductImage';
import { useAuth } from '../context/AuthContext';
import { CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'upi'
  });

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const finalTotal = total - discountAmount;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'CARDIO20') {
      setAppliedCoupon('CARDIO20');
      setDiscountAmount(total * 0.20);
    } else if (couponCode.toUpperCase() === 'FIT10') {
      setAppliedCoupon('FIT10');
      setDiscountAmount(total * 0.10);
    } else {
      setAppliedCoupon(null);
      setDiscountAmount(0);
      alert('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setAppliedCoupon(null);
    setDiscountAmount(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Create the order payload
      const orderPayload = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        street_address: formData.street,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zipCode,
        payment_method: formData.paymentMethod,
        total_amount: finalTotal,
        user_id: user?.id || null, // Optional if user is logged in natively
        items: items.map(item => ({
          product_id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        status: 'pending',
        created_at: new Date().toISOString()
      };

      const { data, error: supabaseError } = await supabase
        .from('orders')
        .insert([orderPayload]);

      if (supabaseError) {
        throw supabaseError;
      }

      clearCart();
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Error placing order:', err);
      setError(err.message || 'Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#000000] px-4 relative">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 left-4 md:left-8 lg:left-12 flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>
        <div className="bg-[#28a745]/10 p-6 rounded-full mb-6">
          <CheckCircle2 className="h-16 w-16 text-[#28a745]" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight text-center">Order Placed Successfully!</h2>
        <p className="text-[#a1a1aa] mb-8 text-center max-w-md">
          Thank you for shopping with FitGear. Your order has been confirmed and will be shipped soon.
        </p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-[#ef233c] hover:bg-[#ef233c] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-none"
        >
          Continue Shopping
        </button>
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
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* Steps Indicator */}
            <div className="flex items-center mb-8">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step === 1 ? 'bg-[#ef233c] text-white' : 'bg-[#28a745] text-white'}`}>1</div>
              <div className={`flex-1 h-1 mx-2 ${step === 2 ? 'bg-[#28a745]' : 'bg-zinc-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step === 2 ? 'bg-[#ef233c] text-white' : 'bg-zinc-200 text-[#a1a1aa]'}`}>2</div>
            </div>

            {step === 1 ? (
              <form onSubmit={handleNextStep} className="bg-[#18181b] p-6 md:p-8 rounded-2xl shadow-none border border-[rgba(255,255,255,0.1)]">
                <h2 className="text-xl font-bold text-white mb-6">Shipping Address</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-[#000000] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 focus:ring-[#ef233c] focus:border-[#ef233c]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#000000] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 focus:ring-[#ef233c] focus:border-[#ef233c]" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white mb-2">Street Address</label>
                    <input required type="text" name="street" value={formData.street} onChange={handleChange} className="w-full bg-[#000000] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 focus:ring-[#ef233c] focus:border-[#ef233c]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">City</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-[#000000] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 focus:ring-[#ef233c] focus:border-[#ef233c]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">State</label>
                    <select required name="state" value={formData.state} onChange={handleChange} className="w-full bg-[#000000] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 focus:ring-[#ef233c] focus:border-[#ef233c]">
                      <option value="" className="bg-[#000000] text-white">Select State</option>
                      <option value="Andhra Pradesh" className="bg-[#000000] text-white">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh" className="bg-[#000000] text-white">Arunachal Pradesh</option>
                      <option value="Assam" className="bg-[#000000] text-white">Assam</option>
                      <option value="Bihar" className="bg-[#000000] text-white">Bihar</option>
                      <option value="Chhattisgarh" className="bg-[#000000] text-white">Chhattisgarh</option>
                      <option value="Goa" className="bg-[#000000] text-white">Goa</option>
                      <option value="Gujarat" className="bg-[#000000] text-white">Gujarat</option>
                      <option value="Haryana" className="bg-[#000000] text-white">Haryana</option>
                      <option value="Himachal Pradesh" className="bg-[#000000] text-white">Himachal Pradesh</option>
                      <option value="Jharkhand" className="bg-[#000000] text-white">Jharkhand</option>
                      <option value="Karnataka" className="bg-[#000000] text-white">Karnataka</option>
                      <option value="Kerala" className="bg-[#000000] text-white">Kerala</option>
                      <option value="Madhya Pradesh" className="bg-[#000000] text-white">Madhya Pradesh</option>
                      <option value="Maharashtra" className="bg-[#000000] text-white">Maharashtra</option>
                      <option value="Manipur" className="bg-[#000000] text-white">Manipur</option>
                      <option value="Meghalaya" className="bg-[#000000] text-white">Meghalaya</option>
                      <option value="Mizoram" className="bg-[#000000] text-white">Mizoram</option>
                      <option value="Nagaland" className="bg-[#000000] text-white">Nagaland</option>
                      <option value="Odisha" className="bg-[#000000] text-white">Odisha</option>
                      <option value="Punjab" className="bg-[#000000] text-white">Punjab</option>
                      <option value="Rajasthan" className="bg-[#000000] text-white">Rajasthan</option>
                      <option value="Sikkim" className="bg-[#000000] text-white">Sikkim</option>
                      <option value="Tamil Nadu" className="bg-[#000000] text-white">Tamil Nadu</option>
                      <option value="Telangana" className="bg-[#000000] text-white">Telangana</option>
                      <option value="Tripura" className="bg-[#000000] text-white">Tripura</option>
                      <option value="Uttar Pradesh" className="bg-[#000000] text-white">Uttar Pradesh</option>
                      <option value="Uttarakhand" className="bg-[#000000] text-white">Uttarakhand</option>
                      <option value="West Bengal" className="bg-[#000000] text-white">West Bengal</option>
                      <option value="Andaman and Nicobar Islands" className="bg-[rgba(255,255,255,0.1)] text-white">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh" className="bg-[rgba(255,255,255,0.1)] text-white">Chandigarh</option>
                      <option value="Dadra/Nagar Haveli and Daman/Diu" className="bg-[rgba(255,255,255,0.1)] text-white">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="Delhi" className="bg-[rgba(255,255,255,0.1)] text-white">Delhi</option>
                      <option value="Jammu and Kashmir" className="bg-[rgba(255,255,255,0.1)] text-white">Jammu and Kashmir</option>
                      <option value="Ladakh" className="bg-[rgba(255,255,255,0.1)] text-white">Ladakh</option>
                      <option value="Lakshadweep" className="bg-[rgba(255,255,255,0.1)] text-white">Lakshadweep</option>
                      <option value="Puducherry" className="bg-[rgba(255,255,255,0.1)] text-white">Puducherry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">PIN Code</label>
                    <input required type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full bg-[#000000] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 focus:ring-[#ef233c] focus:border-[#ef233c]" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#ef233c] hover:bg-[#ef233c] text-white py-4 rounded-xl font-bold text-lg transition-colors">
                  Continue to Payment
                </button>
              </form>
            ) : (
              <form onSubmit={handlePlaceOrder} className="bg-[#18181b] p-6 md:p-8 rounded-2xl shadow-none border border-[rgba(255,255,255,0.1)]">
                <h2 className="text-xl font-bold text-white mb-6">Payment Method</h2>
                
                <div className="space-y-4 mb-8">
                  <label className="flex items-center p-4 border border-[rgba(255,255,255,0.1)] rounded-xl cursor-pointer hover:bg-[#000000] transition-colors">
                    <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleChange} className="text-[#ef233c] focus:ring-red-500 w-5 h-5" />
                    <div className="ml-4">
                      <span className="block font-bold text-white">UPI (GPay, PhonePe, Paytm)</span>
                      <span className="block text-sm text-[#a1a1aa]">Pay directly from your bank account</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-[rgba(255,255,255,0.1)] rounded-xl cursor-pointer hover:bg-[#000000] transition-colors">
                    <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} className="text-[#ef233c] focus:ring-red-500 w-5 h-5" />
                    <div className="ml-4">
                      <span className="block font-bold text-white">Credit / Debit Card</span>
                      <span className="block text-sm text-[#a1a1aa]">Visa, MasterCard, RuPay</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-[rgba(255,255,255,0.1)] rounded-xl cursor-pointer hover:bg-[#000000] transition-colors">
                    <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} className="text-[#ef233c] focus:ring-red-500 w-5 h-5" />
                    <div className="ml-4">
                      <span className="block font-bold text-white">Cash on Delivery</span>
                      <span className="block text-sm text-[#a1a1aa]">Pay when you receive the order</span>
                    </div>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button disabled={isSubmitting} type="button" onClick={() => setStep(1)} className="w-1/3 bg-[#27272a] hover:bg-zinc-200 text-white py-4 rounded-xl font-bold text-lg transition-colors disabled:opacity-50">
                    Back
                  </button>
                  <button disabled={isSubmitting} type="submit" className="w-2/3 flex items-center justify-center gap-2 bg-[#ef233c] hover:bg-[#ef233c]/80 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-none disabled:opacity-70">
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                    ) : (
                      `Place Order (₹${Number(finalTotal || 0).toLocaleString('en-IN')})`
                    )}
                  </button>
                </div>
                {error && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
                    {error}
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-96">
            <div className="bg-[#18181b] p-6 rounded-2xl shadow-none border border-[rgba(255,255,255,0.1)] sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <ProductImage src={item.image} category={item.category} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-[#27272a]" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-white line-clamp-1">{item.name}</h4>
                      <div className="text-sm text-[#a1a1aa]">Qty: {item.quantity}</div>
                      <div className="font-bold text-sm text-white">₹{(Number(item.price || 0) * item.quantity).toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-[rgba(255,255,255,0.1)] pt-4 mb-6">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Coupon code (e.g., FIT10)" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={!!appliedCoupon}
                    className="flex-1 bg-[#000000] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 focus:ring-[#ef233c] focus:border-[#ef233c] text-sm disabled:opacity-50 uppercase"
                  />
                  {!appliedCoupon ? (
                    <button 
                      type="button"
                      onClick={handleApplyCoupon}
                      className="bg-[#27272a] hover:bg-[#ef233c] hover:text-black text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      Apply
                    </button>
                  ) : (
                    <button 
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                {!appliedCoupon && (
                  <div className="flex items-center gap-2 mt-2 pt-1 overflow-x-auto pb-1">
                    <span className="text-xs text-[#a1a1aa] whitespace-nowrap">Try:</span>
                    <button type="button" onClick={() => setCouponCode('CARDIO20')} className="text-xs font-mono text-[#ef233c] border border-[#ef233c]/30 hover:bg-[#ef233c]/10 px-2 py-0.5 rounded border-dashed whitespace-nowrap transition-colors">CARDIO20 (-20%)</button>
                    <button type="button" onClick={() => setCouponCode('FIT10')} className="text-xs font-mono text-[#ef233c] border border-[#ef233c]/30 hover:bg-[#ef233c]/10 px-2 py-0.5 rounded border-dashed whitespace-nowrap transition-colors">FIT10 (-10%)</button>
                  </div>
                )}
                {appliedCoupon && (
                  <p className="text-xs text-[#28a745]">Coupon '{appliedCoupon}' applied successfully!</p>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t border-[rgba(255,255,255,0.1)] text-sm">
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">₹{Number(total || 0).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#28a745]">Free</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-[#a1a1aa]">
                    <span>Discount ({appliedCoupon})</span>
                    <span className="font-medium text-[#ef233c]">-₹{Number(discountAmount || 0).toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="pt-3 border-t border-[rgba(255,255,255,0.1)] flex justify-between items-center">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-xl font-extrabold text-[#ef233c]">₹{Number(finalTotal || 0).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
