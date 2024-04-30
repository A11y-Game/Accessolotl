<script>
export default {
  mounted() {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  data() {
    return {
      levelCount: 1,
    };
  },
  methods: {
    toggleTheme() {
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    },
    incrementLevel() {
      this.levelNumber++;
    },
    decrementLevel() {
      this.levelNumber--;
    },
  },
  computed: {
    prevLevel() {
      return parseInt(this.levelNumber) - 1 + "";
    },
    nextLevel() {
      return parseInt(this.levelNumber) + 1 + "";
    },
    levelNumber() {
      return useRoute().fullPath.split("/")[2] ?? 0;
    },
  },
};
</script>

<template>
  <div class="flex h-screen flex-col">
    <main class="h-0 flex-1 text-text-light dark:text-text-dark">
      <NuxtPage />
    </main>
  </div>
</template>
