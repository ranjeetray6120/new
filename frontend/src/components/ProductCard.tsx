import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductProps {
  name: string;
  category: string;
  price: string;
  image: string;
  rating: number;
  badge?: string;
}

export default function ProductCard({ name, category, price, image, rating, badge }: ProductProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group relative">
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
          {badge}
        </span>
      )}

      {/* Image Wrapper */}
      <div className="relative h-64 w-full bg-slate-950 overflow-hidden flex items-center justify-center p-6 border-b border-white/5">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
            {category}
          </span>
          <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-primary transition-colors duration-200 line-clamp-1">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-amber-500 fill-amber-500' : 'text-slate-600'
                }`}
              />
            ))}
            <span className="text-xs text-slate-400 font-medium ml-2">({rating}.0)</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-black text-white">{price}</span>
          <button className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-primary transition-all duration-300 shadow-md">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
