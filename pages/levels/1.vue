<script>
import VueMarkdown from "vue-markdown-render";

const md = `\`alt\`-tags, what are they for, again? Right, they exist to provide some form of “alternative text”. But what’s that for?

It turns out that not everybody can simply look at an image on a webpage to understand what it is about. Visually impaired users use screen-readers, that, well, read out loud what’s on the screen, more or less. And a screen reader – a stupid algorithm – doesn’t understand what the image is about without our help: an \`alt\`-tag.

\`alt\`-tags not only help the visually impaired: Imagine you’re in the countryside visiting your slightly annoying uncle living in the back of beyond, and your internet connection is unfathomably slow. You might not be able to load the image! But with the help of an \`alt\`-tag you can still understand what the image is about. The same also applies to search engines!

## Links
- [Images Tutorial at Web Accessibility Initiative](https://www.w3.org/WAI/tutorials/images/)`;

export default {
  data() {
    return {
      before: `<body>
    <p>Axolotls are listed as critically endangered in the wild.</p>`,
      code: `    <img src="axolotl.jpg"></img>`,
      after: `</body>`,
      md,
      showHint: false,
      hint: `    <--! Add an \'alt\'-tag of “axolotl in an aquarium” to the image -->`,
    };
  },
  computed: {
    /** returns the alt tag value */
    altValue() {
      return (
        this.code.match(/alt="([^">]*)"?/)?.[1] ||
        this.code.match(/alt='([^'>]*)'?/)?.[1] ||
        ""
      );
    },

    altTagIsPresent() {
      return this.code.includes('alt="') || this.code.includes("alt='");
    },

    correct() {
      return (
        this.code.match(/alt=["].*axolotl.*["]/) ||
        this.code.match(/alt=['].*axolotl.*[']/)
      );
    },

    screenReader() {
      return `Image: ${this.altValue || "axolotl.jpg"}`;
    },
  },
  components: {
    VueMarkdown,
  },
  methods: {
    toggleHint() {
      this.showHint = !this.showHint;
    },
    reset() {
      this.code = `    <img src="axolotl.jpg"></img>`;
      this.showHint = false;
    },
  },
};
</script>
<template>
  <div class="flex h-full flex-1 flex-row items-stretch gap-8 px-16 pb-12">
    <div
      class="flex flex-[3] flex-col items-stretch gap-8 overflow-y-auto pb-3 text-base"
    >
      <div
        class="flex-none rounded-2xl border-2 border-blue-4 bg-blue-3-light p-4 text-center font-heading text-xl font-semibold shadow-large-drop-shadow dark:bg-blue-3-dark"
      >
        <p>Oh no! The 'alt'-tag is missing!</p>
      </div>
      <div
        class="flex flex-1 flex-row gap-8 rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 pt-6 shadow-large-drop-shadow *:flex *:flex-1 *:flex-col *:items-center *:gap-4 dark:bg-blue-3-dark"
      >
        <div class="">
          <Icon name="mdi:eye-outline" size="2rem" />
          <div
            class="axolotlImage flex-1 self-stretch overflow-hidden rounded-2xl bg-cover bg-center shadow-small-drop-shadow"
          ></div>
        </div>

        <div>
          <Icon name="material-symbols:hearing" size="2rem" />
          <div
            class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl bg-blue-5-light p-4 text-center shadow-small-drop-shadow dark:bg-blue-5-dark"
          >
            <p>{{ screenReader }}</p>
          </div>
        </div>

        <div>
          <Icon name="ic:twotone-wifi-off" size="2rem" />

          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 shadow-small-drop-shadow dark:bg-blue-5-dark"
          >
            <p>
              <Icon name="material-symbols:broken-image-rounded" />
              {{ altValue || "" }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-none gap-2 rounded-2xl bg-blue-3-light p-3 shadow-large-drop-shadow dark:bg-blue-5-dark"
      >
        <div
          class="flex-1 rounded-2xl bg-blue-5-light p-2 font-mono dark:bg-blue-4"
        >
          <div class="whitespace-pre-wrap">{{ before }}</div>
          <div
            v-if="showHint"
            class="whitespace-pre-wrap bg-hint-highlight-light dark:bg-hint-highlight-dark"
          >
            {{ hint }}
          </div>
          <input
            type="text"
            v-model="code"
            autofocus
            autocapitalize="none"
            spellcheck="false"
            class="w-full resize-none outline-none transition-colors duration-200"
            :class="{
              'bg-input-correct-highlight': correct,
              'bg-hint-highlight-light dark:bg-hint-highlight-dark': !correct,
            }"
          />
          <div class="whitespace-pre-wrap">{{ after }}</div>
        </div>
        <div class="flex flex-col justify-center gap-3">
          <button
            @click="toggleHint"
            class="size-12 rounded-lg bg-axolotl-light shadow-small-drop-shadow hover:bg-axolotl-dark dark:bg-axolotl-dark hover:dark:bg-axolotl-light"
          >
            <Icon name="lucide:lightbulb" class="size-8" />
          </button>
          <button
            @click="reset"
            class="size-12 rounded-lg bg-blue-5-light shadow-small-drop-shadow hover:bg-blue-5-dark dark:bg-blue-4 hover:dark:bg-blue-2-dark"
          >
            <Icon name="lucide:rotate-ccw" class="size-7" />
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col items-stretch gap-8 pb-3">
      <div
        class="prose prose-base flex-1 overflow-y-auto rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 pt-1 shadow-large-drop-shadow dark:prose-invert dark:bg-blue-3-dark"
      >
        <VueMarkdown :source="md" />
      </div>

      <NuxtLink to="2">
        <div
          class="flex justify-center rounded-2xl p-1 dark:text-blue-1-dark"
          :class="{
            'bg-button-active dark:bg-button-active': correct,
            'bg-button-disabled dark:bg-button-disabled': !correct,
          }"
        >
          <Icon name="ic:round-navigate-next" class="size-12" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.axolotlImage {
  background-image: url("~/assets/img/axolotl-1.jpg");
}
</style>
