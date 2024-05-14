<script lang="ts">
import { defineComponent } from "vue";

const code = `    <img src="axolotl.jpg"></img>`;

export default defineComponent({
  data: () => {
    return {
      markdown: `\`alt\`-tags, what are they for, again? Right, they exist to provide some form of “alternative text”. But what’s that for?

It turns out that not everybody can simply look at an image on a webpage to understand what it is about. Visually impaired users use screen-readers, that, well, read out loud what’s on the screen, more or less. And a screen reader – a stupid algorithm – doesn’t understand what the image is about without our help: an \`alt\`-tag.

\`alt\`-tags not only help the visually impaired: Imagine you’re in the countryside visiting your slightly annoying uncle living in the back of beyond, and your internet connection is unfathomably slow. You might not be able to load the image! But with the help of an \`alt\`-tag you can still understand what the image is about. The same also applies to search engines!

## Links
- [Images Tutorial at Web Accessibility Initiative](https://www.w3.org/WAI/tutorials/images/)`,

      code,
      defaultCode: code,
      task: "Oh no! The 'alt'-tag is missing!",
    };
  },
  computed: {
    /** returns the alt tag value */
    altValue(): string | undefined {
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.code, "text/html");
      return doc.querySelector("img")?.getAttribute("alt") ?? undefined;
    },
    isCorrect(): boolean {
      return (this.altValue?.includes("axolotl") && !this.altValue?.includes("src")) || false;
    },
  },
});
</script>

<template>
  <Level :markdown :task :isCorrect :levelNumber="1">
    <div class="flex h-full w-full flex-col gap-8">
      <ImageSeeHearRead filename="axolotl.jpg" :altValue>
        <div
          class="axolotlImage flex-1 self-stretch overflow-hidden rounded-2xl bg-cover bg-center shadow-small-drop-shadow"
          role="img"
          aria-label="axolotl in an aquarium"
          title="axolotl in an aquarium"
        ></div>
      </ImageSeeHearRead>
      <SingleLineCodeEditor
        before="<body>
    <p>Axolotls are listed as critically endangered in the wild.</p>"
        :defaultCode="defaultCode"
        after="</body>"
        hint="    <--! Add an 'alt'-tag of “axolotl in an aquarium” to the image -->"
        :isCorrect
        v-model:currentCode="code"
      ></SingleLineCodeEditor>
    </div>
  </Level>
</template>

<style scoped>
.axolotlImage {
  background-image: url("~/assets/img/axolotl-1.jpg");
}
</style>
