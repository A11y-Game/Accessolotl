<script lang="ts">
import { defineComponent } from "vue";

const code = `    <p><span style="color: #c0216b"></span></p>`;

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
        /<p>\s*Axo<span style="color: #c0216b">lotl\s*<\/span>\s*<\/p>/i.test(
          this.code,
        ) ||
        /<p>\s*Axo<span style='color: #c0216b'>lotl\s*<\/span>\s*<\/p>/i.test(
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
        <div>
          <Icon name="mdi:image" size="2rem" />
          <div
            class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl bg-blue-5-light p-4 text-center shadow-small-drop-shadow dark:bg-blue-5-dark"
          >
            <img
              src="~/assets/img/axolotl-lettering-2.svg"
              alt="axolotl in an aquarium"
      class="w-full object-cover p-20"
            />
          </div>
        </div>
        <div>
          <Icon name="mdi:code" size="2rem" />
          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 shadow-small-drop-shadow dark:bg-blue-5-dark"
          >
            <div v-html="code" class="font-heading text-8xl"></div>
          </div>
        </div>
      </div>
      <SingleLineCodeEditor
        before='<body>
    img src="axolotl-lettering.png" alt="axolotl lettering">'
        :defaultCode="defaultCode"
        after="</body>"
        hint="    <--! Write 'Axo' before the <span>-Tag and 'lotl' inside to color it -->"
        :isCorrect
        v-model:currentCode="code"
      ></SingleLineCodeEditor>
    </div>
  </Level>
</template>

<style scoped>
.axolotlLettering {
  background-image: url("~/assets/img/axolotl-lettering-2.svg");
}
</style>
