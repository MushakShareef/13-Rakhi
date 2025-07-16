// Helper script to generate image array structure
// Run this in your browser console or Node.js

function generateImageArray(baseUrl, totalImages = 100) {
  const images = [];
  
  for (let i = 1; i <= totalImages; i++) {
    const paddedNumber = String(i).padStart(3, '0');
    images.push({
      id: i,
      url: `${baseUrl}/rakhi-${paddedNumber}.jpg`,
      alt: `Rakhi Celebration Image ${i}`
    });
  }
  
  return images;
}

// Example usage:
// const imageArray = generateImageArray('https://your-domain.com/images');
// console.log(JSON.stringify(imageArray, null, 2));

// For Cloudinary:
// const cloudinaryImages = generateImageArray('https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/rakhi-images');

// For Firebase Storage:
// const firebaseImages = generateImageArray('https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/rakhi-images');

// Copy the output and paste it into your images.ts file