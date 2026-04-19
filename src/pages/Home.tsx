import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Dumbbell, Activity, Flame, Star, Quote } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const trendingProducts = products.slice(4, 8);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Gym Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e1e] to-[#0a0a0a] opacity-90" />
        </div>
        
        {/* Animated Floating Gym Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
          <motion.div 
            animate={{ y: [0, -40, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-[15%] left-[60%] text-[#D4AF37]"
          >
            <Dumbbell size={120} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 50, 0], rotate: [0, -20, 20, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            className="absolute top-[40%] right-[10%] text-white"
          >
            <Activity size={180} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[8%] text-[#D4AF37]"
          >
            <Flame size={150} strokeWidth={0.5} />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37] text-white text-sm font-bold tracking-wider mb-6 relative overflow-hidden">
              <motion.span 
                className="absolute inset-0 bg-white opacity-30" 
                animate={{ x: ['-100%', '200%'] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 3 }}
              />
              NEW COLLECTION 2026
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              BUILD YOUR <br/>
              <span className="text-[#D4AF37]">DREAM GYM</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-[#a0a0a0] mb-10 max-w-xl"
            >
              Premium quality fitness equipment for home and commercial use. Start your fitness journey today with FitGear.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/products" 
                className="group relative bg-[#D4AF37] text-[#0a0a0a] px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}><ArrowRight className="h-5 w-5" /></motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#c4a030] z-0"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.div
                  className="absolute -inset-1 border-2 border-[#D4AF37] rounded-lg pointer-events-none opacity-0"
                  animate={{ scale: [1, 1.1], opacity: [0.8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </Link>
              <Link to="/products?category=Dumbbells" className="bg-[#1a1a1a] hover:bg-[#252525] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border border-[#D4AF37]/20">
                View Dumbbells
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Endless Ticker Marquee */}
      <div className="bg-[#D4AF37] border-y border-[#D4AF37]/50 py-3 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex space-x-12 items-center text-[#0a0a0a] font-black text-2xl tracking-widest uppercase"
        >
           {/* We repeat the content multiple times to make it a seamless infinite loop */}
           <span>POWER.</span> <span className="mx-4 text-white">✖</span> 
           <span>STRENGTH.</span> <span className="mx-4 text-white">✖</span> 
           <span>ENDURANCE.</span> <span className="mx-4 text-white">✖</span> 
           <span>OMFITGEAR.</span> <span className="mx-4 text-white">✖</span> 
           <span>PERFORMANCE.</span> <span className="mx-4 text-white">✖</span> 
           <span>DEDICATION.</span> <span className="mx-4 text-white">✖</span> 
           <span>POWER.</span> <span className="mx-4 text-white">✖</span> 
           <span>STRENGTH.</span> <span className="mx-4 text-white">✖</span> 
           <span>ENDURANCE.</span> <span className="mx-4 text-white">✖</span> 
           <span>OMFITGEAR.</span> <span className="mx-4 text-white">✖</span> 
           <span>PERFORMANCE.</span> <span className="mx-4 text-white">✖</span> 
           <span>DEDICATION.</span> <span className="mx-4 text-white">✖</span> 
           <span>POWER.</span> <span className="mx-4 text-white">✖</span> 
        </motion.div>
      </div>

      {/* Features */}
      <section className="py-12 bg-[#0a0a0a] border-b border-[#2a2a2a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4 p-6 bg-[#1a1a1a] rounded-xl shadow-none">
              <div className="bg-[#D4AF37]/10 p-3 rounded-full text-[#D4AF37]">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Free Shipping</h3>
                <p className="text-sm text-[#a0a0a0]">On orders over ₹5,000</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4 p-6 bg-[#1a1a1a] rounded-xl shadow-none">
              <div className="bg-[#D4AF37]/10 p-3 rounded-full text-[#D4AF37]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Secure Payment</h3>
                <p className="text-sm text-[#a0a0a0]">100% secure checkout</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4 p-6 bg-[#1a1a1a] rounded-xl shadow-none">
              <div className="bg-[#D4AF37]/10 p-3 rounded-full text-[#D4AF37]">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Easy Returns</h3>
                <p className="text-sm text-[#a0a0a0]">7-day return policy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <h2 className="text-3xl font-bold text-white tracking-tight">Shop by Category</h2>
            <Link to="/products" className="text-[#D4AF37] hover:text-[#D4AF37] font-medium flex items-center gap-1 group">
              View All <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight className="h-4 w-4" /></motion.span>
            </Link>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {categories.slice(0, 4).map((category, idx) => {
              const catImages = [
                'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600', // Dumbbells
                'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=600', // Barbells
                'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', // Plates
                'https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&q=80&w=600'  // Kettlebells
              ];
              const categoryImage = catImages[idx];
              
              return (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  key={category}
                >
                  <Link 
                    to={`/products?category=${category}`}
                    className="group relative h-48 md:h-64 rounded-2xl overflow-hidden bg-[#252525] block"
                  >
                    <img 
                      src={categoryImage}
                      alt={category}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-white font-bold text-xl mb-1 group-hover:-translate-y-1 transition-transform">{category}</h3>
                      <span className="text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Shop Now &rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Featured Products</h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">Handpicked premium equipment to elevate your workout experience.</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {featuredProducts.map((product, idx) => (
              <motion.div 
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="relative py-24 bg-[#D4AF37] text-[#0a0a0a] text-center px-4 overflow-hidden">
        {/* Animated Banner Background */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap pt-8"
          >
            {[...Array({length: 10})].map((_, i) => (
              <span key={i} className="text-9xl font-black mx-8 text-black opacity-50">CARDIO</span>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">FLAT 20% OFF ON ALL CARDIO EQUIPMENT</h2>
          <p className="text-lg md:text-xl mb-8 font-medium">Upgrade your home gym with our premium treadmills and exercise bikes. Use code: CARDIO20</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/products?category=Treadmills" className="inline-block bg-[#1a1a1a] text-[#D4AF37] hover:bg-[#252525] px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-xl shadow-black/20">
              Shop Cardio Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Trending Now</h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">Our most popular items this week.</p>
          </motion.div>
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={{
               hidden: { opacity: 0 },
               visible: {
                 opacity: 1,
                 transition: { staggerChildren: 0.1 }
               }
             }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {trendingProducts.map(product => (
              <motion.div 
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-[#D4AF37] tracking-widest uppercase mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                FORGED IN IRON. BUILT FOR GLORY.
              </h3>
              <p className="text-lg text-[#a0a0a0] mb-6">
                At <span className="text-white font-bold">OMFITGEAR</span>, we believe that true strength is earned, not given. What started as a small garage workshop in 2020 has evolved into a premium fitness equipment brand trusted by world-class athletes and dedicated home gym enthusiasts alike.
              </p>
              <p className="text-lg text-[#a0a0a0] mb-8">
                Every piece of equipment we design undergoes rigorous stress testing. Our mission is simple: to provide you with the most durable, biomechanically superior, and aesthetically bold gear on the planet. Stop making excuses. Start building your legacy.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] text-center flex-1">
                  <div className="text-3xl font-black text-[#D4AF37] mb-1">50K+</div>
                  <div className="text-xs text-[#a0a0a0] uppercase tracking-wider">Happy Athletes</div>
                </div>
                <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] text-center flex-1">
                  <div className="text-3xl font-black text-[#D4AF37] mb-1">5Y</div>
                  <div className="text-xs text-[#a0a0a0] uppercase tracking-wider">Warranty</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-20 transform scale-75" />
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop" 
                alt="OMFITGEAR Gym Facility" 
                className="w-full h-full object-cover rounded-2xl relative z-10 border border-[#2a2a2a] shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Feedback / Testimonials */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-[#D4AF37] tracking-widest uppercase mb-4">Wall of Fame</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">COMMUNITY FEEDBACK</h3>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">Don't just take our word for it. Hear what the OMFITGEAR community has to say.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#0a0a0a] p-8 rounded-2xl border border-[#2a2a2a] relative">
              <Quote className="absolute top-6 right-6 text-[#2a2a2a] w-12 h-12" />
              <div className="flex text-[#D4AF37] mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white italic mb-6 relative z-10">
                "The Hex Dumbbells and the AlphaFit Kit are legitimately gym-grade. I canceled my commercial gym membership because this gear is infinitely better."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-xl">JD</div>
                <div>
                  <h4 className="text-white font-bold">Jason D.</h4>
                  <p className="text-xs text-[#a0a0a0]">Verified Buyer</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#0a0a0a] p-8 rounded-2xl border border-[#D4AF37]/30 relative shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <Quote className="absolute top-6 right-6 text-[#2a2a2a] w-12 h-12" />
              <div className="flex text-[#D4AF37] mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white italic mb-6 relative z-10">
                "I bought the IronForge Olympic plates and a barbell. The knurling is aggressive but perfect. Customer service was also extremely responsive when I had a shipping question."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xl">MR</div>
                <div>
                  <h4 className="text-white font-bold">Marcus R.</h4>
                  <p className="text-xs text-[#a0a0a0]">Verified Buyer</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-[#0a0a0a] p-8 rounded-2xl border border-[#2a2a2a] relative">
              <Quote className="absolute top-6 right-6 text-[#2a2a2a] w-12 h-12" />
              <div className="flex text-[#D4AF37] mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white italic mb-6 relative z-10">
                "Absolutely love the Cardio Tracker rope and the apparel. Everything arrived two days early and the unboxing experience was premium. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-xl">SL</div>
                <div>
                  <h4 className="text-white font-bold">Sarah L.</h4>
                  <p className="text-xs text-[#a0a0a0]">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
