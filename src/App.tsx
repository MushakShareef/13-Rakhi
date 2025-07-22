import React, { useEffect } from 'react';
import { useAppState } from './hooks/useAppState';
import { getRandomImage } from './data/images';
import Header from './components/Header';
import UserForm from './components/UserForm';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const {
    state,
    setCurrentPage,
    setUserName,
    setSelectedImage,
    setLoading,
    setError,
    resetState,
  } = useAppState();

  const handleFormSubmit = async (name: string) => {
    setLoading(true);
    setUserName(name);
    
    try {
      // Reduced loading time for better performance
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const randomImage = getRandomImage();
      setSelectedImage(randomImage);
      setCurrentPage('image');
    } catch (error) {
      setError('Failed to load image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedImage(null);
    setError(null);
  };

  const handleReset = () => {
    resetState();
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (state.currentPage === 'image') {
        handleBackToHome();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [state.currentPage]);

  // Update browser history
  useEffect(() => {
    if (state.currentPage === 'image') {
      window.history.pushState({ page: 'image' }, '', '#image');
    } else {
      window.history.pushState({ page: 'home' }, '', '#home');
    }
  }, [state.currentPage]);

  if (state.isLoading) {
    return <LoadingSpinner />;
  }

  if (state.currentPage === 'image' && state.selectedImage) {
    return (
      <ImageDisplay
        image={state.selectedImage}
        userName={state.userName}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-12 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Receive Your Personalized Rakhi Blessing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter your name below to receive a specially selected Rakhi image 
              filled with love, blessings, and spiritual energy.
            </p>
          </div> */}
          
          <UserForm 
            onSubmit={handleFormSubmit}
            isLoading={state.isLoading}
          />
          
          {state.error && (
            <div className="max-w-md mx-auto mt-4 px-4">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <p className="text-sm">{state.error}</p>
                <button
                  onClick={() => setError(null)}
                  className="text-red-600 hover:text-red-800 font-medium text-sm mt-2"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;