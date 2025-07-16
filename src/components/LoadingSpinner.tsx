import React from 'react';
import { Sparkles } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Sparkles className="w-16 h-16 text-orange-500 mx-auto mb-4 animate-spin" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Preparing Your Rakhi
        </h2>
        <p className="text-gray-600">
          Selecting a special blessed image just for you...
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Large images may take a moment to load
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;