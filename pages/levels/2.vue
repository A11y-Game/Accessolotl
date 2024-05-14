<script lang="ts">
import { defineComponent } from "vue";

const code = `    <p><span class="axolotlText"></span></p>`;

export default defineComponent({
  data: () => {
    return {
      markdown: `What's up with images of text? 

You might be tempted to use them but in Web-Accessibility their use is a no-go. While embedding text as images seems like an easy way to style it, it creates problems for users with visual impairments. Screen readers, used by many such users, can't interpret text within images, leaving them unable to access the content. 

Also keep in mind that some of these users often rely on enlarging text for better reading, but images are more likely to distort and pixelate when resized. Additionally, options to adjust contrast or font size for better readability don't work with text in images. Translation tools also can't handle text embedded in images, creating another barrier for users who rely on them.

## Links
- [Images in Text in Images Tutorial](https://www.w3.org/WAI/tutorials/images/textual/)`,

      code,
      defaultCode: code,
      task: "Oh no! That's not how you use pictures!",
    };
  },
  computed: {
    isCorrect(): boolean {
      return (
        /<p>\s*Axo<span class="axolotlText">lotl\s*<\/span>\s*<\/p>/i.test(
          this.code,
        ) ||
        /<p>\s*Axo<span class='axolotlText'>lotl\s*<\/span>\s*<\/p>/i.test(
          this.code,
        )
      );
    },
  },
});
</script>
<template>
  <Level :markdown :task :isCorrect :levelNumber="2">
    <div class="flex h-full w-full flex-col gap-8">
      <div
        class="flex flex-1 flex-row gap-8 rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 pt-6 shadow-small-drop-shadow *:flex *:flex-1 *:flex-col *:items-center *:gap-4 dark:bg-blue-3-dark"
      >
        <div title="What a sighted user sees">
          <Icon name="mdi:image" size="2rem" />
          <div
            class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl bg-blue-5-light p-4 text-center shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <img
              src="~/assets/img/axolotl-lettering-2-light.svg"
              alt="text 'axolotl' with the first 3 letters in usual text color and the remaining 4 in dark pink"
              class="w-full object-cover p-20 dark:hidden"
            />
            <img
              src="~/assets/img/axolotl-lettering-2-dark.svg"
              alt="text 'axolotl' with the first 3 letters in usual text color and the remaining 4 in light pink"
              class="hidden w-full object-cover p-20 dark:block"
            />
          </div>
        </div>
        <div title="What is accessible for the screen reader " class="">
          <Icon name="mdi:code" size="2rem" />
          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <div
              v-html="code"
              class="w-full truncate text-center font-heading text-8xl [&_span]:text-axolotl-dark dark:[&_span]:text-axolotl-light"
            ></div>
          </div>
        </div>
      </div>
      <div>
        <SingleLineCodeEditor
          before='<body>
    <img src="axolotl-lettering.png" alt="axolotl lettering">'
          :defaultCode="defaultCode"
          after="</body>"
          hint="    <--! Write 'Axo' before the <span>-Tag and 'lotl' inside to color it -->"
          :isCorrect
          v-model:currentCode="code"
        ></SingleLineCodeEditor>
      </div>
    </div>
  </Level>
</template>
