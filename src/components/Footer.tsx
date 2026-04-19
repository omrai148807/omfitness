import React from 'react';
import { Link } from 'react-router';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#a0a0a0] py-12 border-t border-[#2a2a2a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-[#D4AF37] font-bold text-xl tracking-tight">
              <Dumbbell className="h-6 w-6" />
              <span>OMFITGEAR</span>
            </Link>
            <p className="text-sm">
              Premium fitness equipment for your home and commercial gym needs. Built for strength, designed for performance.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/omfitness______?igsh=NmJmcmZscjI3OWZv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=Dumbbells" className="hover:text-[#D4AF37] transition-colors">Dumbbells</Link></li>
              <li><Link to="/products?category=Barbells" className="hover:text-[#D4AF37] transition-colors">Barbells</Link></li>
              <li><Link to="/products?category=Treadmills" className="hover:text-[#D4AF37] transition-colors">Cardio</Link></li>
              <li><Link to="/products?category=Yoga Mats" className="hover:text-[#D4AF37] transition-colors">Yoga & Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#D4AF37] border border-[#2a2a2a] rounded-md px-3 py-2 text-sm flex-1 focus:outline-none focus:border-yellow-500"
              />
              <button type="submit" className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#2a2a2a] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} FitGear India. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
