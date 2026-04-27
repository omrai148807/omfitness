import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, RotateCcw, Target, Users, Zap, Award } from 'lucide-react';
import { Link } from 'react-router';

export const About = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent z-10" />
          <img 
            src="https://wallpaperbat.com/img/99007441-gym-dark.jpg" 
            alt="Hardcore Gym" 
            className="w-full h-full object-cover scale-105"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-[#ef233c] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-[#ef233c]"></span> Our Story
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              BUILT FOR THOSE WHO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef233c] to-red-600">NEVER QUIT.</span>
            </h1>
            <p className="text-xl text-[#a1a1aa] leading-relaxed mb-10 border-l-4 border-[#ef233c] pl-6 font-medium">
              We engineer premium, heavy-duty fitness equipment for commercial facilities, garage gyms, and athletes who demand perfection.
            </p>
            <Link to="/products" className="inline-block bg-[#ef233c] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#d90429] transition-colors shadow-[0_0_20px_rgba(239,35,60,0.3)]">
              Explore Our Gear
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section (Visual Graphics Focus) */}
      <section className="py-24 bg-[#111111] border-y border-[rgba(255,255,255,0.1)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef233c]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ef233c]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">THE IRON LOGIC</h2>
            <p className="text-[#a1a1aa] text-lg">We don't compromise on quality, safety, or design. This is the foundation of everything bearing the OMFITGEAR logo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision Engineering", desc: "Every knurl, bolt, and weld is mathematically verified." },
              { icon: Zap, title: "Extreme Durability", desc: "Tested at 3x capacity to ensure it survives any workout." },
              { icon: Users, title: "Athlete Focused", desc: "Designed alongside world champion powerlifters." },
              { icon: Award, title: "Lifetime Warranty", desc: "We replace anything that breaks under normal use." }
            ].map((value, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={value.title}
                className="bg-[#18181b] p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] group hover:border-[#ef233c]/50 transition-colors"
              >
                <div className="w-14 h-14 bg-[#000000] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-[#ef233c]/10">
                  <value.icon className="w-7 h-7 text-[#ef233c]" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-[#a1a1aa] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Image Grid */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-4 relative"
            >
              <div className="absolute inset-0 bg-[#ef233c] blur-[150px] opacity-10 pointer-events-none" />
              <img src="https://m.media-amazon.com/images/I/81OTO0Lc8JL.jpg" className="rounded-2xl rounded-tr-[4rem] border border-[rgba(255,255,255,0.1)] w-full h-64 object-cover mt-8" alt="Weights" />
              <img src="https://image.shutterstock.com/shutterstock/photos/593645939/display_1500/stock-photo-dramatic-lighting-of-a-barbell-with-silver-olympic-style-weight-plates-593645939.jpg" className="rounded-2xl rounded-bl-[4rem] border border-[rgba(255,255,255,0.1)] w-full h-64 object-cover" alt="Lifter" />
              <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/EJ/WT/OH/136316110/gym-cast-iron-kettlebell-500x500.jpg" className="rounded-2xl rounded-tl-[4rem] border border-[rgba(255,255,255,0.1)] w-full h-64 object-cover mt-4" alt="Kettlebell" />
              <img src="https://5.imimg.com/data5/XK/RP/ZI/SELLER-60254959/gym-belt-gloves-work-out-gloves-leather-gloves-gym-1000x1000.jpg" className="rounded-2xl rounded-br-[4rem] border border-[rgba(255,255,255,0.1)] w-full h-64 object-cover -mt-4" alt="Gloves" />
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">MORE THAN JUST A BRAND.</h2>
              <p className="text-[#a1a1aa] text-lg mb-6 leading-relaxed">
                We started in a 400 square-foot garage because we were tired of commercial equipment that rattled, bent, and failed under heavy loads. We took matters into our own hands.
              </p>
              <p className="text-[#a1a1aa] text-lg mb-8 leading-relaxed">
                Today, OMFITGEAR outfits professional training centers globally, but our core philosophy remains unchanged: create equipment that outlasts the athlete.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10 text-[#ef233c]" />
                  <div>
                    <h4 className="text-white font-bold">Secure Global Shipping</h4>
                    <p className="text-sm text-[#a1a1aa]">Delivered in armor-grade crates.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <RotateCcw className="w-10 h-10 text-[#ef233c]" />
                  <div>
                    <h4 className="text-white font-bold">60-Day Returns</h4>
                    <p className="text-sm text-[#a1a1aa]">No questions asked.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
