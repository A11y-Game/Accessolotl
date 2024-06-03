<script lang="ts">
import { defineComponent } from "vue";

const code = `    <div onClick="switchButtonColor()">Click me!</div>`;

export default defineComponent({
  data: () => {
    return {
      markdown: `What’s the deal with POSH? POSH stands for 'Plain Old Semantic HTML'. It basically means you should use the right HTML elements for their intended purpose, like using a button element for a clickable button instead of a div element.

But why is it so important to use the right element?
Firstly, it makes it easier for people to navigate with a keyboard or screen reader if the technology can recognise what it’s navigating to. Secondly, it’s also smaller in file size and easier to make responsive when developing for mobile phones. Lastly, why would you make an effort to make everything accessible, but then not use the built-in accessibility from plain HTML elements?
## Links
- [HTML and accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)`,

      code,
      defaultCode: code,
      task: "Help – I can’t navigate!",
      buttonIsColored: false,
    };
  },
  computed: {
    isCorrect(): boolean {
      return /<button onClick="switchButtonColor\(\)"\s*>\s*Click me!\s*<\/button>/.test(
        this.code,
      );
    },
    isButtonRegexCorrect(): boolean {
      return /<button\s*[^>]*>([^<]*)<\/button>/.test(this.code);
    },
  },
  methods: {
    switchButtonColor() {
      this.buttonIsColored = !this.buttonIsColored;
    },
    getButtonContent() {
      return this.code.substring(
        this.code.indexOf(">") + 1,
        this.code.lastIndexOf("<"),
      );
    },
  },
});
</script>

<template>
  <Level :markdown :task :isCorrect :levelNumber="5">
    <div class="flex h-full w-full flex-col gap-8">
      <div
        class="flex flex-1 flex-row gap-8 rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 pt-6 shadow-small-drop-shadow *:flex *:flex-1 *:flex-col *:items-center *:gap-4 dark:bg-blue-3-dark"
      >
        <div title="Wrong use of HTML elements">
          <Icon name="dashicons:no" size="2rem" />
          <div
            class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl bg-blue-5-light p-4 text-center shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <div
              @click="switchButtonColor"
              class="truncate rounded-xl border-2 border-text-light p-4 text-xl dark:border-text-dark"
              :class="{
                'bg-axolotl-light': buttonIsColored,
                'dark:bg-axolotl-dark': buttonIsColored,
              }"
            >
              Click me!
            </div>
          </div>
        </div>
        <div title="Intended use of HTML elements">
          <Icon name="dashicons:yes" size="2rem" />
          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 text-center shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <div
              class="w-full truncate py-4 text-xl [&_button]:rounded-xl [&_button]:border-2 [&_button]:border-text-light [&_button]:p-4 [&_button]:dark:border-text-dark"
              :class="{
                '[&_button]:bg-axolotl-light': buttonIsColored,
                '[&_button]:dark:bg-axolotl-dark': buttonIsColored,
              }"
              v-if="isButtonRegexCorrect"
            >
              <button
                @click="switchButtonColor"
                class="hover:outline hover:outline-offset-4 focus:outline focus:outline-offset-4"
                v-html="getButtonContent()"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SingleLineCodeEditor
          before="<body>"
          ,
          :defaultCode="defaultCode"
          after="</body>"
          hint="    <--! Use a <button> instead of the <div> -->"
          :isCorrect
          v-model:currentCode="code"
        ></SingleLineCodeEditor>
      </div>
    </div>
  </Level>
</template>
