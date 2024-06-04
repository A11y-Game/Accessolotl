<script>
import { useThemeChanger } from "~/composables/themeChanger";
import { useProgressStore } from "../stores/ProgressStore";
import { mapStores } from "pinia";

export default {
  mounted() {
    if (!this.themeInitialized()) {
      this.initialize();
    }

    if (/mobile/i.test(navigator.userAgent) && useRoute().fullPath != "/") {
      alert(
        "We are sorry to inform you that this game is not optimized for mobile devices. Please use a desktop browser.",
      );
      this.$router.push("/");
    }

    if (!this.progressStore.initialized) {
      this.progressStore.init();
    }
  },
  methods: {
    ...useThemeChanger(),
  },

  computed: {
    ...mapStores(useProgressStore),
  },
  setup() {
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - accessolotl` : "accessolotl";
      },
    });
  },
};
</script>

<template>
  <div class="flex h-screen flex-col">
    <main class="h-0 flex-1 text-text-light dark:text-text-dark">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>
