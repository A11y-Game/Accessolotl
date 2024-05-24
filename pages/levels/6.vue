<script lang="ts">
import { defineComponent } from "vue";
import Level from "~/components/Level.vue";

/*





*/

const code = `    <p class="result"></p>`;

export default defineComponent({
  data() {
    return {
      markdown: `There are some parts of a website, which can't be made accessible by simply using native HTML elements, which you learned about in the previous level. For example, look at this small application for throwing dice digitally. After clicking on the button, screen reader wouldn't be notified that something has changed. They would have manually search the part of the website that has changed. Not very user-friendly.

That's where ARIA comes in. ARIA, which stands for "Accessible Rich Internet Applications", is a web standard, which allows websites to improve their accessibility. For example, it has an \`aria-live\`, which tells screen readers, that this part of the website is going to change, and that those changes should be read out loud. \`aria-live="assertive"\` reads the changes out loud instantly, while \`aria-live="polite"\` waits until the screen reader has finished what it's currently saying.

There are many more ARIA attributes. For more information, check out the links below!

## Links
- [WAI-ARIA basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
- [ARIA Authoring Practices Guide (W3C)](https://www.w3.org/WAI/ARIA/apg/)
- [The full standard, if you're feeling adventurous (W3C)](https://www.w3.org/TR/html-aria/)`,
      task: `Make sure that the result of the dice throw is announced to screen reader users!`,
      code,
      defaultCode: code,
      result: 3,
      results: [3],
    };
  },
  components: {
    Level,
  },
  computed: {
    isCorrect(): boolean {
      // skip on SSR
      if (typeof DOMParser === "undefined") {
        return false;
      }
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.code, "text/html");
      return ["polite", "assertive"].includes(
        doc.querySelector("p")?.getAttribute("aria-live") ?? "",
      );
    },
    screenReader(): string {
      return `"Throw dice" button. ${this.isCorrect ? this.results.join(", ") : '3'}`;
    },
  },
  methods: {
    throwDice() {
      this.result = Math.floor(Math.random() * 6) + 1;
      this.results.push(this.result);
    },
  },
});
</script>

<template>
  <Level :markdown :task :isCorrect :level-number="6">
    <div class="flex h-full w-full flex-col gap-8">
      <div
        class="flex flex-1 flex-row gap-8 rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 pt-6 shadow-small-drop-shadow *:flex *:flex-1 *:flex-col *:items-center *:gap-4 dark:bg-blue-3-dark"
      >
        <div title="What a sighted user sees">
          <h2 class="sr-only">What a sighted user sees</h2>
          <Icon name="mdi:eye-outline" size="2rem" role="presentation" />
          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <div class="flex flex-col items-center gap-4">
              <button
                class="rounded bg-blue-5-dark p-4 text-white dark:bg-blue-5-light dark:text-black"
                @click="throwDice"
              >

                Throw dice <Icon name="ri:dice-fill" size="1rem"></Icon>
              </button>
              <div
                class="grid size-16 place-items-center rounded-full bg-axolotl-light text-3xl font-bold dark:bg-axolotl-dark"
                aria-live="assertive"
              >
                {{ result }}
              </div>
            </div>
          </div>
        </div>

        <div aria-live="polite" aria-relevant="all" aria-atomic="true" title="What users using a screen reader hear">
          <h2 class="sr-only">What users using a screen reader hear"</h2>
          <Icon
            name="material-symbols:hearing"
            size="2rem"
            role="presentation"
          />
          <div
            class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl bg-blue-5-light p-4 text-center shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <p>{{ screenReader }}</p>
          </div>
        </div>
      </div>
      <SingleLineCodeEditor
        before="<body>
    <script>
      function throwDice() {
        const result = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.result').textContent = result;
      }
    </script>
    <button onclick='throwDice()'>Throw dice 🎲</button>"
        :defaultCode="defaultCode"
        after="</body>"
        hint='    <--! Add an "aria-live" tag with the value "polite" to the image -->'
        :isCorrect
        v-model:currentCode="code"
      ></SingleLineCodeEditor>
    </div>
  </Level>
</template>
