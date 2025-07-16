import React, { useState, useEffect } from 'react';
import { Download, ArrowLeft, Heart, Sparkles, Share2 } from 'lucide-react';
import { RakhiImage } from '../types';

interface ImageDisplayProps {
  image: RakhiImage;
  userName: string;
  onBack: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ image, userName, onBack }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [image]);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Rakhi_${userName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Rakhi Blessing',
          text: `Check out my special Rakhi image for ${userName}!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-orange-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 p-2 rounded-lg hover:bg-orange-50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
          
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-medium text-gray-700">For {userName}</span>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Image */}
            <div className="relative">
              {!isImageLoaded && (
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-600 font-medium">Loading your special Rakhi...</p>
                  </div>
                </div>
              )}
              
              <img
                src={image.url}
                alt={image.alt}
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-auto transition-opacity duration-500 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
                style={{ maxHeight: '70vh', objectFit: 'contain' }}
              />
              
              {/* Overlay for user name */}
              {isImageLoaded && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                      Rakhi Blessings for {userName}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      May this sacred bond bring you joy, protection, and prosperity
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading || !isImageLoaded}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg min-h-[52px]"
                >
                  {isDownloading ? (
                    <>
                      <Sparkles className="w-5 h-5 animate-spin" />
                      Preparing Download...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download Image
                    </>
                  )}
                </button>

                {navigator.share && (
                  <button
                    onClick={handleShare}
                    className="flex items-center justify-center gap-2 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg min-h-[52px]"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                )}
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Image will be saved as: Rakhi_{userName.replace(/\s+/g, '_')}_{new Date().toISOString().split('T')[0]}.jpg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;