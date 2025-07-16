import React from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-8 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          <Gift className="w-10 h-10 text-white" />
          <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Raksha Bandhan
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-red-300" />
          <p className="text-lg md:text-xl font-medium">
            A Sacred Bond of Love & Protection
          </p>
          <Heart className="w-6 h-6 text-red-300" />
        </div>
        
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
          Celebrate the eternal bond between siblings with our special Rakhi collection. 
          Each image carries the blessings of love, protection, and prosperity.
        </p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm md:text-base">
          <span className="bg-white/20 px-3 py-1 rounded-full">✨ Blessed</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">🎁 Special</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">💝 Loving</span>
        </div>
      </div>
    </header>
  );
};

export default Header;