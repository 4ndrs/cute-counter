import { create } from "zustand";

type Settings = {
  haptics: boolean;
  toggleHaptics: () => void;
};

export const useSettings = create<Settings>()((set) => ({
  haptics: true,
  toggleHaptics: () => set((state) => ({ haptics: !state.haptics })),
}));
