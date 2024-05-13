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
  <div class="flex h-screen flex-col bg-blue-1-light dark:bg-blue-1-dark">
    <header
      class="mx-auto mb-6 mt-6 flex h-20 w-11/12 items-center justify-between"
    >
      <NuxtLink to="/">
        <div class="flex items-center pr-9">
          <picture class="h-11 dark:hidden">
            <source
              srcset="~\assets\img\icons\light\accessolotllogo-light.svg"
            />
            <img src="assets\img\icons\light\accessolotllogo-light.png" />
          </picture>
          <picture class="hidden h-11 dark:block">
            <source srcset="assets\img\icons\dark\accessolotllogo-dark.svg" />
            <img src="assets\img\icons\dark\accessolotllogo-dark.png" />
          </picture></div
      ></NuxtLink>
      <div
        class="flex h-16 grow items-center rounded-2xl bg-blue-2-light dark:bg-blue-2-dark"
      >
        <button type="button" class="invisible ml-12">
          <Icon name="material-symbols:wb-sunny-outline" class="text-4xl" />
        </button>
        <nav
          class="align-center flex flex-grow items-center justify-center gap-2"
        >
          <NuxtLink :to="prevLevel" @click="decrementLevel()">
            <Icon
              name="material-symbols:arrow-back-ios-rounded"
              class="text-2xl text-text-light dark:text-text-dark"
            />
          </NuxtLink>
          <span class="text-2xl text-text-light dark:text-text-dark"
            >Level {{ levelNumber }} of {{ levelCount }}</span
          >
          <NuxtLink :to="nextLevel" @click="incrementLevel()">
            <Icon
              name="material-symbols:arrow-forward-ios-rounded"
              class="text-2xl text-text-light dark:text-text-dark"
            />
          </NuxtLink>
        </nav>
        <button type="button" class="ml-auto mr-16" @click="toggleTheme()">
          <div class="dark:hidden">
            <Icon
              name="material-symbols:dark-mode-outline"
              class="text-4xl text-text-light"
            />
          </div>
          <div class="hidden dark:block">
            <Icon
              name="material-symbols:wb-sunny-outline"
              class="text-4xl text-text-dark"
            />
          </div>
        </button>
      </div>

      <div class="ml-12 flex items-center justify-between">
        <a
          href="/#about"
          class="font-heading text-2xl text-text-light underline dark:text-text-dark"
          >About us</a
        >
        &nbsp;
        <a href="https://github.com/A11y-Game/A11y-Game">
          <Icon
            name="mdi:github"
            class="text-3xl text-text-light dark:text-text-dark"
          />
        </a>
      </div>
    </header>
    <main class="h-0 flex-1 text-text-light dark:text-text-dark">
      <NuxtPage />
    </main>
  </div>
</template>
