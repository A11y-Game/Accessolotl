<template>
  <div class="flex flex-col bg-button-active">
    <div class="flex items-center pr-9">
      <picture class="h-11 dark:hidden">
        <source srcset="~\assets\img\icons\light\accessolotllogo-light.svg" />
        <img src="assets\img\icons\light\accessolotllogo-light.png" />
      </picture>
      <picture class="hidden h-11 dark:block">
        <source srcset="assets\img\icons\dark\accessolotllogo-dark.svg" />
        <img src="assets\img\icons\dark\accessolotllogo-dark.png" />
      </picture>
    </div>
    <div class="flex h-16 grow items-center rounded-2xl">
      <button type="button" class="invisible ml-12">
        <Icon name="material-symbols:wb-sunny-outline" class="text-4xl" />
      </button>

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

    <NuxtLink to="levels/1">
      <div
        class="ml-8 mr-16 flex flex-1 items-stretch justify-center rounded-2xl bg-button-active p-1"
      >
        Play
      </div>
    </NuxtLink>
    <div
      class="flex-1flex h-0 flex-col items-center text-text-light dark:text-text-dark"
    >
      <div class="text-4xl">
        <p>Welcome to</p>
      </div>
      <div class="flex items-center pr-9">
        <picture class="h-11 dark:hidden">
          <source srcset="~\assets\img\icons\light\accessolotllogo-light.svg" />
          <img src="assets\img\icons\light\accessolotllogo-light.png" />
        </picture>
        <picture class="hidden h-11 dark:block">
          <source srcset="assets\img\icons\dark\accessolotllogo-dark.svg" />
          <img src="assets\img\icons\dark\accessolotllogo-dark.png" />
        </picture>
      </div>
      <div class="text-xl">
        <p>your place to learn web accessibility</p>
      </div>
    </div>
    <div>
      <picture class="">
        <img
          src="assets\img\icons\dark\homepage-arrow-accessibility-dark.png"
          alt="white arrow point from the logo accessolotl to the word accessibility to indicate, that accessibility is included in the name of the website"
        />
      </picture>
      <picture class="">
        <img
          src="assets\img\icons\dark\homepage-arrow-axolotl-dark.png"
          alt="pink arrow point from the logo accessolotl to the word axolotl to indicate, that axolotl is included in the name of the website"
        />
      </picture>
    </div>
  </div>
  <div class="text-2xl">
    <p>accessibility</p>
  </div>
  <div class="text-2xl text-axolotl-light">
    <p>axolotl</p>
  </div>
  <p></p>
</template>

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
  },
};
</script>

<style></style>
