import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import {
  Trophy,
  Activity,
  Flame,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  const categories = [
    { name: 'Cricket', count: '24 Items', icon: Trophy, gradient: 'from-amber-600/20 to-orange-600/10' },
    { name: 'Football', count: '18 Items', icon: Activity, gradient: 'from-blue-600/20 to-indigo-600/10' },
    { name: 'Shoes', count: '32 Items', icon: Flame, gradient: 'from-red-600/20 to-rose-600/10' },
    { name: 'Sportswear', count: '40 Items', icon: Sparkles, gradient: 'from-green-600/20 to-emerald-600/10' },
    { name: 'Fitness', count: '15 Items', icon: Award, gradient: 'from-purple-600/20 to-violet-600/10' },
    { name: 'Gloves', count: '12 Items', icon: Star, gradient: 'from-pink-600/20 to-fuchsia-600/10' },
    { name: 'Bags', count: '9 Items', icon: TrendingUp, gradient: 'from-cyan-600/20 to-teal-600/10' },
    { name: 'Others', count: '16 Items', icon: ShieldCheck, gradient: 'from-slate-600/20 to-zinc-600/10' },
  ];

  const products = [
    {
      name: 'Pro English Willow Cricket Bat',
      category: 'Cricket',
      price: '$199.99',
      image: '/images/cricket_bat.jpg',
      rating: 5,
      badge: 'Best Seller',
    },
    {
      name: 'Match Grade Pro Football',
      category: 'Football',
      price: '$49.99',
      image: '/images/football.jpg',
      rating: 4,
      badge: 'New Arrival',
    },
    {
      name: 'Carbon-Fiber Neon Running Shoes',
      category: 'Shoes',
      price: '$129.99',
      image: '/images/running_shoe.jpg',
      rating: 5,
      badge: 'Trending',
    },
    {
      name: 'Elite Compression Sportswear Shirt',
      category: 'Sportswear',
      price: '$39.99',
      image: '/images/sportswear_shirt.jpg',
      rating: 4,
    },
  ];

  const brands = [
    { name: 'Nike', origin: 'USA' },
    { name: 'Adidas', origin: 'Germany' },
    { name: 'Puma', origin: 'Germany' },
    { name: 'SG', origin: 'India' },
    { name: 'GM', origin: 'UK' },
    { name: 'Kookaburra', origin: 'Australia' },
  ];

  const reasons = [
    {
      title: 'Premium Quality Products',
      desc: 'Handpicked premium grade equipment designed to optimize athletic performance.',
      icon: Award,
    },
    {
      title: 'Fast Delivery',
      desc: 'Lightning-fast shipping and dispatch networks ensuring gear reaches you on time.',
      icon: Truck,
    },
    {
      title: 'Secure Payments',
      desc: 'Top-tier 256-bit encrypted secure transaction gateway protecting your finances.',
      icon: ShieldCheck,
    },
    {
      title: 'Easy Returns',
      desc: 'Hassle-free 30-day return policy for ultimate peace of mind and flexibility.',
      icon: RotateCcw,
    },
    {
      title: 'Trusted Sports Brands',
      desc: 'Authorized dealership representing the finest global sporting labels directly.',
      icon: Trophy,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32 bg-gradient-to-b from-black via-[#08090d] to-transparent">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest inline-block mb-6 animate-pulse">
            The Ultimate Sports Haven
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase">
            SPORTS ADDA <br />
            <span className="text-gradient">YOUR ULTIMATE SPORTS STORE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 leading-relaxed mb-10">
            Step up your game with top-tier athletic equipment, apparel, and footwear from the world's most trusted sports brands. Crafted for champions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#best-sellers"
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold tracking-wide shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Shop Best Sellers
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#categories"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white font-bold tracking-wide transition-all duration-300 w-full sm:w-auto text-center"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section id="categories" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Categories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Browse by Sport & Gear</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm mt-2 md:mt-0">
            Find gear tailored specifically for your sporting discipline.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className={`glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-slate-300 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{cat.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section id="best-sellers" className="py-24 bg-gradient-to-b from-transparent via-[#0b0c10]/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Top Picks</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Our Best Sellers</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mt-2 md:mt-0">
              The choice of professional athletes. Discover our most popular gear of the season.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod) => (
              <ProductCard key={prod.name} {...prod} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Authorized Dealer</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Popular Global Brands</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="glass rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center group hover:border-primary/20 hover:bg-slate-900/60 transition-all duration-300 cursor-pointer"
              >
                <span className="text-2xl font-black text-slate-500 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="text-[10px] uppercase text-slate-600 group-hover:text-slate-400 transition-colors duration-300 mt-1">
                  {brand.origin}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sports Adda Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Features</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Why Choose Sports Adda</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="glass-card rounded-2xl p-6 flex flex-col items-start border border-white/5 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary shadow-inner">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-3 leading-snug">{reason.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
