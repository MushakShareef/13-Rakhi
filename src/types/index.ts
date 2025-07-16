export interface RakhiImage {
  id: number;
  url: string;
  alt: string;
}

export interface AppState {
  currentPage: 'home' | 'image';
  userName: string;
  selectedImage: RakhiImage | null;
  isLoading: boolean;
  error: string | null;
}