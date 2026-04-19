import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { User, Package, MapPin, Heart, LogOut, ArrowLeft } from 'lucide-react';

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')}
          className="flex items-center gap-2 text-[#a0a0a0] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-none border border-[#2a2a2a] overflow-hidden">
              <div className="p-6 border-b border-[#2a2a2a] flex items-center gap-4">
                <div className="bg-[#252525] h-12 w-12 rounded-full flex items-center justify-center text-[#a0a0a0]">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{user.name}</h3>
                  <p className="text-sm text-[#a0a0a0]">{user.email}</p>
                </div>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#D4AF37] bg-[#D4AF37]/5 rounded-lg">
                  <User className="h-4 w-4" /> Profile Info
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#a0a0a0] hover:bg-[#0a0a0a] rounded-lg transition-colors">
                  <Package className="h-4 w-4" /> Orders
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#a0a0a0] hover:bg-[#0a0a0a] rounded-lg transition-colors">
                  <MapPin className="h-4 w-4" /> Saved Addresses
                </button>
                <button onClick={() => navigate('/wishlist')} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#a0a0a0] hover:bg-[#0a0a0a] rounded-lg transition-colors">
                  <Heart className="h-4 w-4" /> Wishlist
                </button>
                <div className="my-2 border-t border-[#2a2a2a]"></div>
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#a0a0a0] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg transition-colors">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-2xl shadow-none border border-[#2a2a2a]">
              <h2 className="text-xl font-bold text-white mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                  <input type="text" defaultValue={user.name} className="w-full border border-[#2a2a2a] rounded-lg px-4 py-2 focus:ring-yellow-500 focus:border-yellow-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <input type="email" defaultValue={user.email} disabled className="w-full border border-[#2a2a2a] bg-[#0a0a0a] rounded-lg px-4 py-2 text-[#a0a0a0]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91" className="w-full border border-[#2a2a2a] rounded-lg px-4 py-2 focus:ring-yellow-500 focus:border-yellow-500" />
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-2xl shadow-none border border-[#2a2a2a]">
              <h2 className="text-xl font-bold text-white mb-6">Recent Orders</h2>
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-[#a0a0a0] mx-auto mb-3" />
                <p className="text-[#a0a0a0] mb-4">You haven't placed any orders yet.</p>
                <button onClick={() => navigate('/products')} className="text-[#D4AF37] font-medium hover:underline">
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
