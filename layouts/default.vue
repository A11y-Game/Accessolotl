<script>
import { useProgressStore } from "../stores/ProgressStore";
import { mapStores } from "pinia";
import { useThemeChanger } from "~/composables/themeChanger";

export default {
  mounted() {
    if (!this.progressStore.initialized) {
      this.progressStore.init();
    }

    if (!this.progressStore.accessGranted(this.progressStore.currentLevel)) {
      this.progressStore.jumpToLevel(
        this.progressStore.progress + 1,
        this.$router,
      );
    }
    if (/mobile/i.test(navigator.userAgent) && useRoute().fullPath != "/") {
      alert(
        "We are sorry to inform you that this game is not optimized for mobile devices. Please use a desktop browser.",
      );
      this.$router.push("/");
    }

    if (!this.themeInitialized()) {
      this.initialize();
    }
  },

  computed: {
    ...mapStores(useProgressStore),
  },
  methods: {
    ...useThemeChanger(),
  },
};
</script>

<template>
  <div class="flex h-screen flex-col bg-blue-1-light dark:bg-blue-1-dark">
    <header class="mx-auto my-6 flex h-20 w-11/12 items-center justify-between">
      <div class="flex items-center pr-9">
        <NuxtLink to="/">
          <img
            src="assets\img\icons\light\accessolotllogo-light.svg"
            class="h-11 dark:hidden"
            alt="The Accessolotl Logo"
          />
          <img
            src="assets\img\icons\dark\accessolotllogo-dark.svg"
            class="hidden h-11 dark:block"
            alt="The Accessolotl Logo"
          />
        </NuxtLink>
      </div>
      <div
        class="flex h-16 grow items-center rounded-2xl bg-blue-2-light px-16 dark:bg-blue-2-dark"
      >
        <button type="button" class="invisible">
          <Icon name="material-symbols:wb-sunny-outline" class="text-4xl" />
        </button>
        <nav
          class="align-center flex flex-grow items-center justify-center gap-2"
        >
          <NuxtLink
            :to="progressStore.prevLevelString"
            @click="progressStore.decrementLevel"
            title="Previous Level"
          >
            <Icon
              name="material-symbols:arrow-back-ios-rounded"
              class="text-2xl text-text-light dark:text-text-dark"
            />
          </NuxtLink>
          <span class="text-2xl text-text-light dark:text-text-dark">
            Level {{ progressStore.currentLevel }} of
            {{ progressStore.levelCount }}</span
          >
          <NuxtLink
            :to="progressStore.nextLevelString"
            @click="progressStore.incrementLevel"
            title="Next Level"
          >
            <Icon
              name="material-symbols:arrow-forward-ios-rounded"
              class="text-2xl text-text-light dark:text-text-dark"
            />
          </NuxtLink>
        </nav>
        <button type="button" @click="toggleTheme" title="Toggle theme">
          <div class="dark:hidden">
            <Icon
              name="material-symbols:dark-mode-outline"
              class="text-4xl text-text-light dark:hidden"
            />
          </div>
          <div class="hidden dark:block">
            <Icon
              name="material-symbols:wb-sunny-outline"
              class="hidden text-4xl text-text-dark dark:block"
            />
          </div>
        </button>
      </div>

      <div class="ml-12 flex items-center justify-between">
        <NuxtLink
          to="/#about"
          :external="true"
          class="font-heading text-2xl text-text-light underline dark:text-text-dark"
        >
          About us</NuxtLink
        >
        &nbsp;
        <a
          href="https://github.com/A11y-Game/A11y-Game"
          title="View source code on GitHub"
        >
          <Icon
            name="mdi:github"
            class="text-3xl text-text-light dark:text-text-dark"
          />
        </a>
      </div>
    </header>
    <main class="h-0 flex-1 text-text-light dark:text-text-dark">
      <slot />
    </main>
  </div>
</template>
