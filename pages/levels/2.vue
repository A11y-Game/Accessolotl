<script lang="ts">
import { defineComponent } from "vue";

const code = `    <div>Axo<span style="color: #c0216b">lotl</span></div>`;

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
    /** returns the alt tag value */
    altValue(): string {
      return (
        this.code.match(/alt="([^">]*)"?/)?.[1] ||
        this.code.match(/alt='([^'>]*)'?/)?.[1] ||
        ""
      );
    },
    isCorrect(): boolean {
      return (
        /alt=["][^"]*axolotl[^"]*["]/i.test(this.code) ||
        /alt=['][^']*axolotl[^']*[']/i.test(this.code) ||
        /alt=\w*axolotl\w*/i.test(this.code)
      );
    },
  },
});
</script>
<template>
  <Level :markdown :task :isCorrect :levelNumber="2">
    <div class="flex h-full w-full flex-col gap-8">
      <ImageSeeHearRead filename="lettering.png" :altValue>
        <div
          class="axolotlLettering flex-1 self-stretch overflow-hidden rounded-2xl bg-contain bg-no-repeat bg-center shadow-small-drop-shadow p-4"
          alt="axolotl in an aquarium"
        ></div>
      </ImageSeeHearRead>
      <SingleLineCodeEditor
        before='<body>
    <img src="axolotl-lettering.png" alt="axolotl lettering">'
        :defaultCode="defaultCode"
        after="</body>"
        hint="    <--! Use a <span>-Tag to style the last part of Axolotl with the color #c0216b -->"
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
