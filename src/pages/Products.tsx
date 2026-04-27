import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { Filter, SlidersHorizontal, X, ArrowLeft } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();
  
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState<number>(50000);
  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchParam) {
      const q = searchParam.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price <= priceRange);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Mock newest by ID for now
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy, searchParam]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange(50000);
    setSortBy('popular');
    setSearchParams({});
  };

  return (
    <div className="bg-[#000000] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')}
          className="flex items-center gap-2 text-[#a1a1aa] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-[rgba(255,255,255,0.1)]">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              {searchParam ? `Search Results for "${searchParam}"` : 'All Products'}
            </h1>
            <p className="text-[#a1a1aa] mt-2">Showing {filteredProducts.length} products</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 bg-[#18181b] border border-[rgba(255,255,255,0.1)] px-4 py-2 rounded-lg text-sm font-medium"
            >
              <Filter className="h-4 w-4" /> Filters
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#a1a1aa] hidden md:inline">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#18181b] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#ef233c]"
              >
                <option value="popular">Popularity</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-[#18181b] p-6 rounded-xl border border-[rgba(255,255,255,0.1)] sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" /> Filters
                </h2>
                {isFilterOpen && (
                  <button onClick={() => setIsFilterOpen(false)} className="md:hidden">
                    <X className="h-5 w-5 text-[#a1a1aa]" />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === 'All'}
                      onChange={() => handleCategoryChange('All')}
                      className="text-[#ef233c] focus:ring-red-500"
                    />
                    <span className="text-sm text-white">All Categories</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat}
                        onChange={() => handleCategoryChange(cat)}
                        className="text-[#ef233c] focus:ring-red-500"
                      />
                      <span className="text-sm text-white">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-semibold text-white mb-4">Max Price: ₹{Number(priceRange || 0).toLocaleString('en-IN')}</h3>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#ef233c]"
                />
                <div className="flex justify-between text-xs text-[#a1a1aa] mt-2">
                  <span>₹500</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              <button 
                onClick={clearFilters}
                className="w-full py-2 border border-[rgba(255,255,255,0.1)] rounded-lg text-sm font-medium text-white hover:bg-[#27272a] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-[#18181b] p-12 rounded-xl border border-[rgba(255,255,255,0.1)] text-center">
                <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                <p className="text-[#a1a1aa] mb-6">Try adjusting your filters or search query.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-[#ef233c] hover:bg-[#ef233c]/80 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
