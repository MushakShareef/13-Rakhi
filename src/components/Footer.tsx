import React from 'react';
import { Globe, Phone, Mail, Heart, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Brahma Kumaris */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold">Brahma Kumaris</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A worldwide spiritual organization dedicated to personal transformation and 
              world renewal through meditation, positive thinking, and spiritual wisdom.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <Users className="w-5 h-5" />
              <span className="font-medium">Serving humanity since 1937</span>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">Our Mission</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Spiritual empowerment through meditation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Promoting peace and harmony</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Character building and moral values</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Service to humanity</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <a 
                  href="https://www.brahmakumaris.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  www.brahmakumaris.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">044 2626 6765</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400" />
                <a 
                  href="mailto:contact@brahmakumaris.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  contact@brahmakumaris.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                 Brahma Kumaris World Spiritual University.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for spiritual growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;