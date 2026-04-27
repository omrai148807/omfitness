import React from 'react';
import { Link } from 'react-router';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }} className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45 flex items-center justify-center">
            </motion.div>
            <span className="text-2xl font-bold font-heading tracking-tight text-white">OMFITGEAR</span>
          </Link>
          <p className="text-zinc-500 max-w-xs leading-relaxed">
            Premium fitness equipment for your home and commercial gym needs. Built for strength, designed for performance.
          </p>
          <div className="flex gap-4 pt-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="https://www.instagram.com/omfitness______?igsh=NmJmcmZscjI3OWZv" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-6">Shop</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link to="/products?category=Dumbbells" className="hover:text-white transition-colors">Dumbbells</Link></li>
            <li><Link to="/products?category=Barbells" className="hover:text-white transition-colors">Barbells</Link></li>
            <li><Link to="/products?category=Treadmills" className="hover:text-white transition-colors">Cardio</Link></li>
            <li><Link to="/products?category=Yoga Mats" className="hover:text-white transition-colors">Yoga & Accessories</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
          </ul>
        </div>
      </div>

      {/* Huge Footer Text */}
      <div className="flex justify-center items-center py-10 opacity-20 pointer-events-none">
        <h1 className="text-[13vw] leading-none font-bold font-heading tracking-tighter text-stroke select-none text-zinc-800">OMFITGEAR</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-[10px] uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} OMFITGEAR Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          <a href="#" className="hover:text-zinc-400">Legal</a>
        </div>
      </div>
    </footer>
  );
};
