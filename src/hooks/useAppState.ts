import { useState, useCallback } from 'react';
import { AppState, RakhiImage } from '../types';

const initialState: AppState = {
  currentPage: 'home',
  userName: '',
  selectedImage: null,
  isLoading: false,
  error: null,
};

export const useAppState = () => {
  const [state, setState] = useState<AppState>(initialState);

  const setCurrentPage = useCallback((page: 'home' | 'image') => {
    setState(prev => ({ ...prev, currentPage: page }));
  }, []);

  const setUserName = useCallback((name: string) => {
    setState(prev => ({ ...prev, userName: name }));
  }, []);

  const setSelectedImage = useCallback((image: RakhiImage | null) => {
    setState(prev => ({ ...prev, selectedImage: image }));
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    setCurrentPage,
    setUserName,
    setSelectedImage,
    setLoading,
    setError,
    resetState,
  };
};