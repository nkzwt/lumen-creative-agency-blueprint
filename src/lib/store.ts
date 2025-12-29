import { create } from 'zustand';
interface UIState {
  isQuoteModalOpen: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}
export const useUIStore = create<UIState>((set) => ({
  isQuoteModalOpen: false,
  openQuoteModal: () => set({ isQuoteModalOpen: true }),
  closeQuoteModal: () => set({ isQuoteModalOpen: false }),
}));