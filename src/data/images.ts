import { RakhiImage } from '../types';

// Sample Rakhi images - In production, these would be actual Rakhi celebration images
export const rakhiImages: RakhiImage[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  url: `https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&crop=center&q=${Math.floor(Math.random() * 20) + 80}`,
  alt: `Rakhi Celebration Image ${index + 1}`
}));

// Add some variety with different Pexels images for demonstration
const varietyImages = [
  'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/6128997/pexels-photo-6128997.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/6129138/pexels-photo-6129138.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/6129114/pexels-photo-6129114.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
];

// Apply variety to first few images
varietyImages.forEach((url, index) => {
  if (rakhiImages[index]) {
    rakhiImages[index].url = url;
  }
});

export const getRandomImage = (): RakhiImage => {
  const randomIndex = Math.floor(Math.random() * rakhiImages.length);
  return rakhiImages[randomIndex];
};