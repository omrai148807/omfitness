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
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Global Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="https://wallpaperbat.com/img/99007441-gym-dark.jpg"
              alt="Dark Gym Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
            <div className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent stars-1 animate-[animStar_50s_linear_infinite]"></div>
            <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent stars-2 animate-[animStar_80s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]"></div>
        </div>
        
        {/* Animated Floating Gym Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
          <motion.div 
            animate={{ y: [0, -40, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-[15%] left-[60%] text-[#ef233c]"
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
            className="absolute bottom-[20%] left-[8%] text-[#ef233c]"
          >
            <Flame size={150} strokeWidth={0.5} />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef233c]"></span>
              </span>
              <span className="text-xs font-medium text-red-100/90 tracking-wide font-heading">
                  NEW COLLECTION 2026
              </span>
              <ArrowRight className="w-3 h-3 text-red-400" />
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter font-heading leading-[1.1] mb-8"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Build Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
                  Dream <span className="text-[#ef233c] inline-block relative">
                      Gym
                      <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#ef233c] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                  </span>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto md:mx-0 mb-12 leading-relaxed"
            >
              Premium quality fitness equipment for home and commercial use. Start your fitness journey today with FitGear.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
            >
              <Link 
                to="/products" 
                className="shiny-cta group w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium">
                  Shop Now <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link 
                to="/products?category=Dumbbells" 
                className="group w-full sm:w-auto text-center px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
              >
                View Dumbbells
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Endless Ticker Marquee */}
      <div className="w-full mt-8 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-10 opacity-60 hover:opacity-100 transition-opacity overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex space-x-12 items-center text-zinc-500 font-bold tracking-widest uppercase font-heading text-sm"
        >
           {/* We repeat the content multiple times to make it a seamless infinite loop */}
           <span>POWER.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>STRENGTH.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>ENDURANCE.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>OMFITGEAR.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>PERFORMANCE.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>DEDICATION.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>POWER.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>STRENGTH.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>ENDURANCE.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>OMFITGEAR.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>PERFORMANCE.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>DEDICATION.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
           <span>POWER.</span> <span className="mx-4 text-[#ef233c] font-black">✖</span> 
        </motion.div>
      </div>

      {/* Features */}
      <section className="py-20 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-heading mb-6">
                The Equipment for <br />
                <span className="text-[#ef233c]">Modern Athletes</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light">
                Replace your fragmented toolset with one cohesive gym setup driven by results.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden p-8 border border-white/10 bg-gradient-to-b from-zinc-900/50 to-black hover:border-white/20 transition-all rounded-xl">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#ef233c]">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white font-heading mb-2">Free Shipping</h3>
                <p className="text-zinc-400">On all orders over ₹5,000 nationwide.</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: 'radial-gradient(circle at top right, #ef233c, transparent 70%)' }}></div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl lg:col-span-1">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#3b82f6]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white font-heading mb-2">Secure Checkout</h3>
                <p className="text-zinc-400">100% encrypted, safe & secure checkout process natively integrated.</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: 'radial-gradient(circle at top right, #3b82f6, transparent 70%)' }}></div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden p-8 border border-white/10 bg-black hover:border-white/20 transition-all rounded-xl">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-[#eab308]">
                  <RotateCcw className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white font-heading mb-2">Easy Returns</h3>
                <p className="text-zinc-400">7-day no-questions-asked return policy for all standard equipment.</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ background: 'radial-gradient(circle at top right, #eab308, transparent 70%)' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <h2 className="text-4xl font-semibold text-white tracking-tight font-heading">Shop by Category</h2>
            <Link to="/products" className="text-[#ef233c] hover:text-red-400 font-medium flex items-center gap-1 group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              const svg = `
                <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
                  <rect width="600" height="600" fill="#000000"/>
                  <rect x="50" y="50" width="500" height="500" rx="20" fill="#111111" stroke="#333" stroke-width="2"/>
                  <text x="300" y="300" font-family="system-ui, sans-serif" font-size="40" font-weight="bold" fill="#ef233c" text-anchor="middle" dominant-baseline="middle">
                    ${category}
                  </text>
                </svg>
              `;
              const categoryImage = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
              
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
                    className="group relative h-48 md:h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 block hover:border-white/20 transition-all"
                  >
                    <img 
                      src={categoryImage}
                      alt={category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-white font-semibold font-heading text-xl mb-1">{category}</h3>
                      <span className="text-[#ef233c] text-xs font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">EXPLORE &rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-white tracking-tight font-heading mb-4">Featured Products</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Handpicked premium equipment to elevate your workout experience.</p>
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
      <section className="relative py-24 bg-[#ef233c] text-black text-center px-4 overflow-hidden border-y border-white/10">
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
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-1 text-black mb-6">
              {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-6 h-6 fill-current" />
              ))}
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-black font-heading leading-tight mb-8">
            FLAT 20% OFF ON ALL CARDIO EQUIPMENT
          </h3>
          <p className="text-lg md:text-xl text-black/80 font-medium mb-10 max-w-2xl mx-auto">
            Upgrade your home gym with our premium treadmills and exercise bikes. Use code: <strong>CARDIO20</strong>
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/products?category=Treadmills" className="inline-flex bg-black text-white px-10 py-5 rounded-full font-bold text-lg transition-colors shadow-2xl hover:bg-zinc-900 group">
              Shop Cardio Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-white tracking-tight font-heading mb-4">Trending Now</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our most popular items this week.</p>
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
      <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 font-mono text-[#ef233c] text-xs">
                 <ShieldCheck className="w-3 h-3" /> OUR STORY
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white font-heading leading-tight mb-6">
                Forged in Iron. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef233c] to-red-400">Built for Glory.</span>
              </h3>
              <p className="text-lg text-zinc-400 mb-6 font-light leading-relaxed">
                At <span className="text-white font-medium">OMFITGEAR</span>, we believe that true strength is earned, not given. What started as a small garage workshop in 2020 has evolved into a premium fitness equipment brand trusted by world-class athletes and dedicated home gym enthusiasts alike.
              </p>
              <div className="flex gap-4 mt-12">
                <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center flex-1">
                  <div className="text-4xl font-bold text-white mb-2 font-heading">50K+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Athletes</div>
                </div>
                <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center flex-1">
                  <div className="text-4xl font-bold text-[#ef233c] mb-2 font-heading">5Y</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Warranty</div>
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
              <div className="absolute inset-0 bg-[#ef233c] blur-[100px] opacity-20 transform scale-75" />
              <img 
                src="https://nikestrength.com/cdn/shop/files/BSAL-PC20_CAP_HO23_20KG-Barbell-Chrome_1391_b8330fb5-d4f4-40da-8b27-51963ad57d7d_1066x.jpg" 
                alt="OMFITGEAR Gym Facility" 
                className="w-full h-full object-cover rounded-2xl relative z-10 border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Feedback / Testimonials */}
      <section className="py-32 bg-zinc-950/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white tracking-tight font-heading mb-4">Community Feedback</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-light">Don't just take our word for it. Hear what the OMFITGEAR community has to say.</p>
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
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-black p-8 rounded-2xl border border-white/10 relative hover:border-white/20 transition-all">
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12" />
              <div className="flex text-[#ef233c] mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-300 font-light mb-8 relative z-10 leading-relaxed">
                "The Hex Dumbbells and the AlphaFit Kit are legitimately gym-grade. I canceled my commercial gym membership because this gear is infinitely better."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm">JD</div>
                <div>
                  <h4 className="text-white font-medium text-sm">Jason D.</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">Verified Buyer</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-zinc-900/40 p-8 rounded-2xl border border-[#ef233c] relative shadow-[0_0_30px_rgba(239,35,60,0.1)] scale-105 z-10">
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12" />
              <div className="flex text-[#ef233c] mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-200 font-medium mb-8 relative z-10 leading-relaxed">
                "I bought the IronForge Olympic plates and a barbell. The knurling is aggressive but perfect. Customer service was also extremely responsive."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ef233c] rounded-full flex items-center justify-center text-white font-bold text-sm">MR</div>
                <div>
                  <h4 className="text-white font-medium text-sm">Marcus R.</h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold mt-1">Verified Buyer</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-black p-8 rounded-2xl border border-white/10 relative hover:border-white/20 transition-all">
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12" />
              <div className="flex text-[#ef233c] mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-300 font-light mb-8 relative z-10 leading-relaxed">
                "Absolutely love the Cardio Tracker rope and the apparel. Everything arrived two days early and the unboxing experience was premium."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm">SL</div>
                <div>
                  <h4 className="text-white font-medium text-sm">Sarah L.</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
