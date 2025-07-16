import { RakhiImage } from '../types';

// Local Rakhi images - stored in public/images/rakhi/
export const rakhiImages: RakhiImage[] = [
  {
    id: 1,
    url: '/images/rakhi/rakhi-001.jpg',
    alt: 'Beautiful Traditional Rakhi Design 1'
  },
  {
    id: 2,
    url: '/images/rakhi/rakhi-002.jpg',
    alt: 'Colorful Rakhi with Beads 2'
  },
  {
    id: 3,
    url: '/images/rakhi/rakhi-003.jpg',
    alt: 'Golden Thread Rakhi 3'
  },
  {
    id: 4,
    url: '/images/rakhi/rakhi-004.jpg',
    alt: 'Floral Rakhi Design 4'
  },
  {
    id: 5,
    url: '/images/rakhi/rakhi-005.jpg',
    alt: 'Pearl Decorated Rakhi 5'
  },
  {
    id: 6,
    url: '/images/rakhi/rakhi-006.jpg',
    alt: 'Silver Thread Rakhi 6'
  },
  {
    id: 7,
    url: '/images/rakhi/rakhi-007.jpg',
    alt: 'Kundan Rakhi Design 7'
  },
  {
    id: 8,
    url: '/images/rakhi/rakhi-008.jpg',
    alt: 'Silk Thread Rakhi 8'
  },
  {
    id: 9,
    url: '/images/rakhi/rakhi-009.jpg',
    alt: 'Zardozi Work Rakhi 9'
  },
 
];

export const getRandomImage = (): RakhiImage => {
  const randomIndex = Math.floor(Math.random() * rakhiImages.length);
  return rakhiImages[randomIndex];
};

// Helper function to validate image URLs (optional)
export const validateImageUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Helper function to preload images for better performance
export const preloadImages = (imageUrls: string[], timeout: number = 5000): Promise<void[]> => {
  return Promise.all(
    imageUrls.map(url => 
      new Promise<void>((resolve) => {
        const img = new Image();
        const timer = setTimeout(() => {
          resolve(); // Resolve after timeout to prevent hanging
        }, timeout);
        
        img.onload = () => {
          clearTimeout(timer);
          resolve();
        };
        img.onerror = () => {
          clearTimeout(timer);
          resolve(); // Still resolve to not block other images
        };
        img.src = url;
      })
    )
  );
};

// Get a batch of random images (useful for preloading)
export const getRandomImageBatch = (count: number = 10): RakhiImage[] => {
  const shuffled = [...rakhiImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};