<script>
import { useProgressStore } from "../stores/ProgressStore";
import { mapStores } from "pinia";
import { useThemeChanger } from "~/composables/themeChanger";

export default {
  mounted() {
    if (!this.themeInitialized()) {
      this.initialize();
    }

    if (!this.progressStore.initialized) {
      this.progressStore.init();
    }
  },
  methods: {
    ...useThemeChanger(),
  },
  setup() {
    definePageMeta({
      layout: false,
    });
  },
  computed: {
    ...mapStores(useProgressStore),
  },
};
</script>

<template>
  <div
    class="flex h-screen flex-col overflow-y-scroll bg-gradient-to-b from-blue-1-light to-blue-5-light p-16 dark:bg-gradient-to-b dark:from-blue-4 dark:to-blue-1-dark"
  >
    <div class="flex justify-between">
      <NuxtLink to="/">
        <img
          src="~\assets\img\icons\light\accessolotllogo-light.svg"
          class="h-11 dark:hidden"
        />
        <img
          src="~\assets\img\icons\dark\accessolotllogo-dark.svg"
          class="hidden h-11 dark:block"
        />
      </NuxtLink>
      <div class="row flex gap-8">
        <button type="button" @click="toggleTheme">
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
        <button
          @click="
            progressStore.jumpToLevel(progressStore.currentLevel, $router)
          "
          class="flex h-11 w-64 items-center justify-center rounded-2xl bg-button-active p-1 font-heading text-2xl font-semibold"
        >
          Play
        </button>
      </div>
    </div>
    <div class="mt-32 flex-1 justify-center text-center text-6xl">
      <p class="font-heading">Welcome to</p>
      <div class="mb-8 mt-12 flex justify-center">
        <img
          src="~\assets\img\icons\light\accessolotllogo-light.svg"
          class="h-36 dark:hidden"
        />
        <img
          src="~\assets\img\icons\dark\accessolotllogo-dark.svg"
          class="hidden h-36 dark:block"
        />
      </div>
      <p class="mb-12 text-3xl font-semibold">
        your place to learn web-accessibility
      </p>
      <div class="flex justify-center">
        <img
          src="
              ~\assets\img\icons\light\homepage-arrow-accessibility-light.svg
            "
          class="h-36 dark:hidden"
        />
        <img
          src="~\assets\img\icons\dark\homepage-arrow-accessibility-dark.svg"
          class="hidden h-36 dark:block"
        />
        <button
          @click="
            progressStore.jumpToLevel(progressStore.currentLevel, $router)
          "
          class="shadow-content-box-drop-shadow mx-32 mt-6 flex h-16 w-96 items-center justify-center rounded-2xl bg-button-active p-1 font-heading text-3xl font-semibold"
        >
          Play
        </button>
        <img
          src="~\assets\img\icons\light\homepage-arrow-axolotl-light.svg"
          class="h-36 dark:hidden"
        />
        <img
          src="~\assets\img\icons\dark\homepage-arrow-axolotl-dark.svg"
          class="hidden h-36 dark:block"
        />
      </div>
      <div class="row mb-48 mt-4 flex place-content-around font-heading">
        <p class="w-96">accessibility</p>
        <p class="w-96 text-axolotl-dark dark:text-axolotl-light">axolotl</p>
      </div>
      <div
        class="mx-52 border-b-4 border-solid border-blue-4 p-5 text-3xl leading-tight"
      >
        <p class="text-4xl font-bold">What are we doing?</p>
        <p class="text-justify indent-6">
          Our Project aims to teach society how important web-accessibility is.
          We want to show what an accessible website means to disabled people
          and how it can improve their experience. Our mascot, axolotl, is
          helping users to understand the importance of implementing
          accessibility features.
        </p>
        <div class="my-8 flex justify-center">
          <img src="~\assets\img\icons\accessolotl-logo.svg" />
        </div>
        <p class="text-4xl font-bold">What is WCAG?</p>
        <p class="text-justify indent-6">
          We follow the Web Content Accessibility Guidelines (WCAG) 2.1 to make
          content for our website more accessible to a wider range of people
          with disabilities. Additionally, we strive to meet Level A conformance
          for our own website.
        </p>
        <p>
          <NuxtLink
            to="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1"
            target="_blank"
            class="underline decoration-solid underline-offset-4"
            >Get more information here!</NuxtLink
          >
        </p>
      </div>
      <div class="my-16 text-4xl font-bold" id="about">
        <p>About us</p>
      </div>
      <div class="flex place-content-evenly text-2xl">
        <div>
          <div
            class="mb-4 h-[250px] w-[250px] rounded-full bg-[url('~/assets/img/teammitglied_marco.jpg')] bg-cover"
          ></div>
          <p class="font-semibold">Marco Janderka</p>
          <p>Product Owner</p>
        </div>
        <div>
          <div
            class="mb-4 h-[250px] w-[250px] rounded-full bg-[url('~/assets/img/teammitglied_lisa.jpg')] bg-cover"
          ></div>
          <p class="font-semibold">Lisa-Marie Hörmann</p>
          <p>Scrum Master</p>
        </div>
        <div>
          <div
            class="mb-4 h-[250px] w-[250px] rounded-full bg-[url('~/assets/img/teammitglied_felix.jpg')] bg-cover"
          ></div>
          <p class="font-semibold">Felix Wollmann</p>
          <p>Team Member</p>
        </div>
      </div>
    </div>
    <div class="mt-24 flex items-center justify-center">
      <NuxtLink to="imprint" class="p-3 text-2xl" id="imprint">
        <p>Imprint</p>
      </NuxtLink>
      <NuxtLink to="https://github.com/A11y-Game/A11y-Game" target="_blank">
        <Icon
          name="mdi:github"
          class="text-3xl text-text-light dark:text-text-dark"
        />
      </NuxtLink>
    </div>
  </div>
</template>
