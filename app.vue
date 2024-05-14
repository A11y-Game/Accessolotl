<script>
export default {
  setup() {
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - accessolotl` : "accessolotl";
      },
    });
  }
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
