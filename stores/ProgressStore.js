import { defineStore } from "pinia";

export const useProgressStore = defineStore("progress", {
  state: () => ({
    progress: 0,
    currentLevel: 1,
    levelCount: 2,
    initialized: false,
  }),
  getters: {
    currLevelString(state) {
      return `${state.currentLevel}`;
    },
    accessGranted(state) {
      return (newLevel) => accessCheck(state.progress, newLevel);
    },
    /** Only returns the next level string if it is accessible */
    nextLevelString(state) {
      return `${
        accessCheck(state.progress, state.currentLevel + 1)
          ? state.currentLevel + 1
          : state.currentLevel
      }`;
    },
    prevLevelString(state) {
      return `${
        accessCheck(state.progress, state.currentLevel - 1)
          ? state.currentLevel - 1
          : state.currentLevel
      }`;
    },
  },
  actions: {
    init() {
      /** Necessary for SSR */
      if (typeof window !== "undefined") {
        this.progress = parseInt(localStorage.getItem("progress")) || 0;
        this.currentLevel = parseInt(useRoute().fullPath.split("/")[2]) || 1;
        this.initialized = true;
      }
    },
    levelUp() {
      this.progress = Math.max(this.progress, this.currentLevel);
      localStorage.setItem("progress", this.progress);
    },
    /** Does nothing as long as the level is inaccessable */
    incrementLevel() {
      this.setLevel(this.currentLevel + 1);
    },
    /** Does nothing as long as the level is inaccessable */
    decrementLevel() {
      this.setLevel(this.currentLevel - 1);
    },
    setLevel(level) {
      if (accessCheck(this.progress, level)) {
        this.currentLevel = level;
        localStorage.setItem("currentLevel", this.currentLevel);
      }
    },
    setCurrentLevelFromRoute() {
      this.currentLevel =
        parseInt(useRoute().fullPath.split("/")[2]) ||
        parseInt(localStorage.getItem("currentLevel")) ||
        1;
    },
    jumpToLevel(level, router) {
      this.setLevel(level);
      if (router && accessCheck(this.progress, level)) {
        router.push(`/levels/${this.currentLevel}`);
      }
    },
    clearProgress() {
      this.progress = 0;
      localStorage.removeItem("progress");
      localStorage.removeItem("currentLevel");
    },
  },
});

function accessCheck(progress, newLevel) {
  return newLevel <= progress + 1 && newLevel > 0;
}
