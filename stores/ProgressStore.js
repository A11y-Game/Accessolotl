import { defineStore } from "pinia";

export const useMyProgressStoreStore = defineStore("ProgresStore", {
  state: () => ({
    progress: 0,
    currentLevel: 1,
  }),
  actions: {
    levelUp() {
      this.progress++;
    },
    incrementLevel() {
		this.setLevel(this.currentLevel + 1);
	},
    decrementLevel() {
      this.setLevel(this.currentLevel - 1);
    },
    setLevel(level) {
      if (accessGranted(this.progress, level)) {
        this.currentLevel = level;
      }
    },
	clearProgress() {
		this.progress = 0;
	}
  },
});

function accessGranted(progress, newLevel) {
  return newLevel <= progress + 1 && newLevel > 0;
}
