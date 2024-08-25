import { create } from "zustand";

type Settings = {
  haptics: boolean;
  dailyGoal: number;
  toggleHaptics: () => void;
  setDailyGoal: (goal: number) => void;
};

export const useSettings = create<Settings>()((set) => ({
  haptics: true,
  dailyGoal: 0,
  setDailyGoal: (goal) => set({ dailyGoal: goal }),
  toggleHaptics: () => set((state) => ({ haptics: !state.haptics })),
}));
