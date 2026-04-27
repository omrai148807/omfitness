import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { ShoppingCart, Heart, User, Search, Menu, X, Dumbbell, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { user } = useAuth();

  const [showAboutInfo, setShowAboutInfo] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setShowAboutInfo(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="gradient-blur"></div>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full z-50 pt-6 px-4"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }} className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45 flex items-center justify-center">
            </motion.div>
            <span className="text-lg font-bold font-heading tracking-tight text-white">OMFITGEAR</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search for equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-[#ef233c] transition-all text-sm text-white"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-zinc-400 hover:text-white">
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
            <Link to="/products" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Shop</Link>
            
            <div className="relative" ref={aboutRef}>
              <button 
                onClick={() => setShowAboutInfo(!showAboutInfo)}
                className={`text-sm font-medium transition-colors ${showAboutInfo ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                About Us
              </button>
              
              <AnimatePresence>
                {showAboutInfo && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-80 bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl z-50 pointer-events-auto origin-top"
                  >
                    <h4 className="text-[#ef233c] font-extrabold text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                       OMFITGEAR <div className="h-px bg-[#ef233c]/30 flex-1"></div>
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                      Premium, heavy-duty fitness equipment engineered for serious athletes and commercial facilities.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/5 border border-white/5 p-2 rounded-lg text-[#ef233c]"><Dumbbell className="w-4 h-4" /></div>
                        <span className="text-white text-sm font-medium">Free Weights & Plates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-white/5 border border-white/5 p-2 rounded-lg text-[#ef233c]"><Activity className="w-4 h-4" /></div>
                        <span className="text-white text-sm font-medium">High-End Cardio Gear</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-white/5 border border-white/5 p-2 rounded-lg text-[#ef233c]"><ShieldCheck className="w-4 h-4" /></div>
                        <span className="text-white text-sm font-medium">Protective Accessories</span>
                      </div>
                    </div>

                    <Link 
                      to="/about" 
                      onClick={() => setShowAboutInfo(false)}
                      className="w-full bg-white/5 hover:bg-[#ef233c] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors group"
                    >
                      Read Our Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Contact</Link>
            
            <div className="w-px h-5 bg-white/10 mx-2"></div>
            
            <Link to="/wishlist" className="text-zinc-400 hover:text-[#ef233c] transition-colors relative group">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Heart className="h-5 w-5" />
              </motion.div>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#ef233c] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="text-zinc-400 hover:text-[#ef233c] transition-colors relative group">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ShoppingCart className="h-5 w-5" />
              </motion.div>
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#ef233c] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>
            
            <Link to={user ? "/profile" : "/login"} className="text-zinc-400 hover:text-white transition-colors">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <User className="h-5 w-5" />
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="text-zinc-400 hover:text-white transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#ef233c] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden max-w-7xl mx-auto mt-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:border-[#ef233c] text-sm text-white transition-colors"
              />
              <button type="submit" className="absolute right-3 top-3 text-zinc-400">
                <Search className="h-5 w-5" />
              </button>
            </form>
            <div className="flex flex-col space-y-3 pt-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white font-medium">Home</Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white font-medium">Shop All</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white font-medium">About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white font-medium">Contact</Link>
              <div className="h-px w-full bg-white/10 my-2"></div>
              <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white font-medium flex items-center justify-between">
                Wishlist
                {wishlistItems.length > 0 && <span className="bg-[#ef233c] text-white text-xs px-2 py-0.5 rounded-full">{wishlistItems.length}</span>}
              </Link>
              <Link to={user ? "/profile" : "/login"} onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white font-medium">
                {user ? 'My Profile' : 'Login / Sign Up'}
              </Link>
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
};
