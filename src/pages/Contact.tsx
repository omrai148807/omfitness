import React from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Twitter, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-[#000000] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-[rgba(255,255,255,0.1)]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <img 
            src="https://wallpaperbat.com/img/99007441-gym-dark.jpg" 
            alt="Gym background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#000000]/50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            GET IN <span className="text-[#ef233c]">TOUCH</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a1a1aa] max-w-2xl mx-auto"
          >
            Have a question about our equipment? Need support with an order? Our team of fitness experts is ready to help you forge your perfect setup.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#18181b] p-8 md:p-12 rounded-2xl border border-[rgba(255,255,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef233c]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-[#ef233c] w-6 h-6" /> Send a Message
            </h2>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#a1a1aa] mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#000000] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#000000] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#000000] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] transition-colors" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Subject</label>
                <select className="w-full bg-[#000000] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] transition-colors appearance-none">
                  <option>Order Support</option>
                  <option>Product Inquiry</option>
                  <option>Warranty Claim</option>
                  <option>Wholesale/Gym Outfitting</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#a1a1aa] mb-2">Message</label>
                <textarea rows={5} className="w-full bg-[#000000] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] transition-colors resize-none" placeholder="How can we help you crush your goals?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#ef233c] hover:bg-[#d90429] text-[#000000] font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-transform transform active:scale-95 shadow-[0_0_20px_rgba(239,35,60,0.2)]">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Graphics */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div whileHover={{ y: -5 }} className="bg-[#18181b] p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#27272a] rounded-full flex items-center justify-center mb-4 text-[#ef233c]">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">Phone Support</h3>
                <p className="text-[#a1a1aa] text-sm mb-2">Mon-Fri, 9am - 8pm EST</p>
                <a href="tel:+18005553488" className="text-[#ef233c] font-bold hover:underline">+1 (800) 555-FITG</a>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-[#18181b] p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#27272a] rounded-full flex items-center justify-center mb-4 text-[#ef233c]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">Email Us</h3>
                <p className="text-[#a1a1aa] text-sm mb-2">Typically replies in 2 hours</p>
                <a href="mailto:support@omfitgear.com" className="text-[#ef233c] font-bold hover:underline">support@omfitgear.com</a>
              </motion.div>
            </div>

            <div className="bg-[#18181b] p-8 rounded-2xl border border-[rgba(255,255,255,0.1)]">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-[rgba(255,255,255,0.1)] pb-4">Our Headquarters</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#ef233c] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">OMFITGEAR Global HQ</h4>
                    <p className="text-[#a1a1aa] mt-1">100 Iron Works Blvd.<br/>Suite 400<br/>Austin, TX 78701</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#ef233c] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Showroom Hours</h4>
                    <p className="text-[#a1a1aa] mt-1">Monday - Saturday: 10:00 AM - 7:00 PM<br/>Sunday: Closed for Recovery</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#ef233c] p-8 rounded-2xl flex items-center justify-between shadow-[0_0_40px_rgba(239,35,60,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10">
                <h3 className="text-[#000000] font-extrabold text-xl mb-1">Follow the Movement</h3>
                <p className="text-[#000000]/80 text-sm font-medium">Tag #OMFITGEAR to be featured</p>
              </div>
              <div className="flex gap-3 relative z-10">
                <a href="https://www.instagram.com/omfitness______?igsh=NmJmcmZscjI3OWZv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center text-[#ef233c] hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center text-[#ef233c] hover:scale-110 transition-transform">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center text-[#ef233c] hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};
