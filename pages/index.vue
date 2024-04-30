<template>
  <div class="homepage-gradient flex h-screen flex-col overflow-scroll p-16">
    <div class="flex place-content-between items-center">
      <picture class="h-11 dark:hidden">
        <source srcset="~\assets\img\icons\light\accessolotllogo-light.svg" />
        <img src="assets\img\icons\light\accessolotllogo-light.png" />
      </picture>
      <picture class="hidden h-11 dark:block">
        <source srcset="assets\img\icons\dark\accessolotllogo-dark.svg" />
        <img src="assets\img\icons\dark\accessolotllogo-dark.png" />
      </picture>
      <button type="button" class="ml-auto mr-8" @click="toggleTheme()">
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
      <NuxtLink
        to="levels/1"
        class="flex h-11 w-64 items-center justify-center rounded-2xl bg-button-active p-1 font-heading text-2xl font-semibold"
      >
        Play
      </NuxtLink>
    </div>
    <div class="mt-32 flex-1 justify-center text-center text-6xl">
      <p class="font-heading">Welcome to</p>
      <div class="mb-8 mt-12 flex justify-center">
        <picture class="h-36 dark:hidden">
          <source srcset="~\assets\img\icons\light\accessolotllogo-light.svg" />
          <img src="assets\img\icons\light\accessolotllogo-light.png" />
        </picture>
        <picture class="hidden h-36 dark:block">
          <source
            srcset="assets\img\icons\dark\homepage-accessolotllogo-dark.svg"
          />
          <img src="assets\img\icons\dark\homepage-accessolotllogo-dark.png" />
        </picture>
      </div>
      <p class="mb-12 text-3xl font-semibold">
        your place to learn web-accessibility
      </p>
      <div class="flex justify-center">
        <picture class="hidden h-36 dark:block">
          <source
            srcset="assets\img\icons\dark\homepage-arrow-accessibility-dark.svg"
          />
          <img
            src="assets\img\icons\dark\homepage-arrow-accessibility-dark.png"
          />
        </picture>
        <NuxtLink
          to="levels/1"
          class="mx-48 mt-6 flex h-16 w-96 items-center justify-center rounded-2xl bg-button-active p-1 font-heading text-3xl font-semibold shadow-content-box-drop-shadow"
        >
          Play
        </NuxtLink>
        <picture class="hidden h-36 dark:block">
          <source
            srcset="assets\img\icons\dark\homepage-arrow-axolotl-dark.svg"
          />
          <img src="assets\img\icons\dark\homepage-arrow-axolotl-dark.png" />
        </picture>
      </div>
      <div class="row mb-48 flex place-content-around font-heading">
        <p class="w-96">accessibility</p>
        <p class="w-96 text-axolotl-light">axolotl</p>
      </div>
      <div class="mx-52 border-b-4 border-solid border-blue-4 p-5 text-3xl">
        <p class="text-4xl font-bold">What are we doing?</p>
        <p>
          Our Project aims to teach society how important web-accessibility is.
          We want to show what an accessible website means to disabled people
          and how it can improve their experience. Our mascot, axolotl, is
          helping users to understand the importance of implementing
          accessibility features.
        </p>
        <div class="my-8 flex justify-center">
          <picture class="">
            <source srcset="assets\img\icons\accessolotl-logo.svg" />
            <img src="assets\img\icons\accessolotl-logo.png" />
          </picture>
        </div>
        <p class="text-4xl font-bold">What is WCAG?</p>
        <p>
          We follow the Web Content Accessibility Guidelines (WCAG) 2.1 to make
          content for our website more accessible to a wider range of people
          with disabilities. Additionally, we strive to meet Level AA
          conformance for our own website.
        </p>
        <a
          href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1"
          class="underline decoration-solid"
          >Get more information here!</a
        >
      </div>
      <div class="my-16 text-4xl font-bold underline decoration-solid">
        <p>About us</p>
      </div>
      <div class="flex place-content-evenly text-2xl">
        <div>
          <div
            class="mb-4 h-[250px] w-[250px] rounded-full bg-[url('assets/img/axolotl-portrait-marco.jpg')] bg-cover bg-center hover:bg-[url('assets/img/marco.jpg')]"
          ></div>
          <p class="font-semibold">Marco Janderka</p>
          <p>Product Owner</p>
        </div>
        <div>
          <div
            class="mb-4 h-[250px] w-[250px] rounded-full bg-[url('assets/img/axolotl-portrait-lisa.jpg')] bg-cover bg-center hover:bg-[url('assets/img/lisa.jpg')]"
          ></div>
          <p class="font-semibold">Lisa-Marie Hörmann</p>
          <p>Scrum Master</p>
        </div>
        <div>
          <div
            class="mb-4 h-[250px] w-[250px] rounded-full bg-[url('assets/img/axolotl-portrait-felix.jpg')] bg-cover bg-center hover:bg-[url('assets/img/felix.jpg')]"
          ></div>
          <p class="font-semibold">Felix Wollmann</p>
          <p>Projektmitglied</p>
        </div>
      </div>
      <div class="mt-16 text-2xl underline decoration-solid">
        <p>Impressum</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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

<style>
.homepage-gradient {
  background: linear-gradient(rgb(51, 78, 153), rgb(35, 51, 92));
}
</style>
