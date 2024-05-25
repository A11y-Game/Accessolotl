<script>
import { defineComponent } from "vue";
import { useThemeChanger } from "~/composables/themeChanger";
import ColorPickerContrastDisplay from "~/components/ColorPickerContrastDisplay.vue";

const code = `    <p><span class="axolotlText"></span></p>`;

export default defineComponent({
  data: () => {
    return {
      markdown: `Enhance Your Website's Readability: The Power of Contrast!

Achieving a strong contrast between font and background colors is essential for optimal legibility, especially for users with visual impairments or color vision deficiencies.

Therefore, you should choose your color scheme thoughtfully, ensuring a minimum contrast ratio of 4.5 : 1 for standard text and 3 : 1 for larger text sizes (larger than 18 pt or 14 pt for bold text). Aim for even higher ratios for maximum legibility.

Keep in mind that purely decorative text (without any specific function) or text within pictures (i.e., photographs) is typically exempt as long as these aren’t images of text as described in Level 1.

Let’s finish off with a quote from the MDN web docs:

> It is good to have a cool design on your website, but the design is worthless if your users can't read your content.

## Links
- [Color contrast - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Ensuring a contrast ratio of at least 4.5:1](https://www.w3.org/WAI/WCAG22/Techniques/general/G18)`,

      code,
      defaultCode: code,
      task: "Make the text stand out!",
      headerBgColor: "",
      pBgColor: "",
      headerColor: "",
      pColor: "",
      showHint: false,
      headerContrastOk: false,
      pContrastOk: false,
    };
  },
  computed: {
    isCorrect() {
      return this.headerContrastOk && this.pContrastOk;
    },
  },

  methods: {
    getRandomColor(hue, hex = false) {
      const saturation = Math.random() * 80 + 20;
      const luminanceLight = Math.random() * 50 + 45;
      const luminanceDark = 100 - luminanceLight;

      if (hex) {
        return this.HSLToHex(
          hue,
          saturation,
          this.getTheme() === "light" ? luminanceLight : luminanceDark,
        );
      }
      return `hsl(${hue}, ${saturation}%, ${this.getTheme() === "light" ? luminanceLight : luminanceDark}%)`;
    },
    HSLToHex(h, s, l) {
      s /= 100;
      l /= 100;

      let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = "0",
        g = "0",
        b = "0";

      if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = "0";
      } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
      } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
      }

      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);

      if (r.length == 1) r = "0" + r;
      if (g.length == 1) g = "0" + g;
      if (b.length == 1) b = "0" + b;

      return "#" + r + g + b;
    },

    initializeColors() {
      this.headerBgColor = this.getRandomColor(221, true);
      this.pBgColor = this.getRandomColor(219, true);

      this.headerColor = this.getRandomColor(217, true);
      this.pColor = this.getRandomColor(215, true);
    },

    toggleHint() {
      this.showHint = !this.showHint;
    },
    ...useThemeChanger(),
  },
  mounted() {
    this.initializeColors();
  },
  components: {
    ColorPickerContrastDisplay,
  },
});
</script>
<template>
  <Level :markdown :task :isCorrect :levelNumber="4">
    <div class="flex h-full w-full flex-col gap-8">
      <div
        class="flex flex-1 flex-col justify-start gap-4 rounded-2xl border-2 border-blue-4 p-8 pt-4 shadow-small-drop-shadow *:flex *:flex-1 *:flex-col *:items-center *:gap-4"
        :style="{ backgroundColor: headerBgColor }">
        <h1 class="font-heading text-3xl" :style="{
    color: headerColor,
  }">
          About Axolotls
        </h1>
        <div title="A short text about axolotls and accessibility"
          class="flex-1 place-items-center self-stretch text-pretty rounded-2xl p-4 text-center shadow-small-drop-shadow forced-colors:outline"
          :style="{ backgroundColor: pBgColor }">
          <p class="text-left" :style="{
    color: pColor,
  }">
            The axolotl is a unique amphibian species native to Mexico. It is
            known for its regenerative abilities and its cute appearance.
            Axolotls have become popular pets due to their fascinating
            characteristics.
          </p>
          <p class="text-left" :style="{
    color: pColor,
  }">
            However, as humans, we don't possess the same regenerative abilities
            as axolotls. That's why it's important to ensure that individuals
            with disabilities can live the same life as us. Accessibility plays
            a crucial role in making this possible.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col gap-2 rounded-2xl bg-blue-3-light p-3 shadow-large-drop-shadow dark:bg-blue-5-dark forced-colors:outline forced-colors:outline-offset-[-2px]">
        <div class="flex items-center justify-around gap-2">
          <ColorPickerContrastDisplay headerText="Header" :colorPickerColor="headerColor"
            @update:color="(color) => (this.headerColor = color)" @correctContrast="(contrastCorrect) => (headerContrastOk = contrastCorrect)
    " :bgColor="headerBgColor" contrastRestriction="3" />

          <ColorPickerContrastDisplay headerText="Paragraph" :bgColor="pBgColor" :colorPickerColor="pColor"
            @update:color="(color) => (this.pColor = color)" @correctContrast="(contrastCorrect) => (pContrastOk = contrastCorrect)
    " contrastRestriction="4.5" />

          <div class="flex flex-row justify-center gap-3">
            <button @click="toggleHint"
              class="size-12 rounded-lg bg-axolotl-light shadow-small-drop-shadow hover:bg-axolotl-dark dark:bg-axolotl-dark hover:dark:bg-axolotl-light forced-colors:text-[ButtonText] forced-colors:outline forced-colors:outline-[ButtonBorder]"
              :title="showHint ? `Hide hint` : `Show hint`">
              <Icon name="lucide:lightbulb" class="size-8" />
            </button>
            <button @click="initializeColors"
              class="size-12 rounded-lg bg-blue-5-light shadow-small-drop-shadow hover:bg-blue-5-dark dark:bg-blue-4 hover:dark:bg-blue-2-dark forced-colors:text-[ButtonText] forced-colors:outline forced-colors:outline-[ButtonBorder]"
              title="Reset colors">
              <Icon name="lucide:rotate-ccw" class="size-7" />
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-4" v-if="showHint">
          <p class="text-center">
            <b>Hint:</b> The paragraph should have a contrast ratio of at least
            4.5 : 1, the header of at least 3 : 1.<br />
            Use the color pickers to adjust the colors.
          </p>
        </div>
      </div>
    </div>
  </Level>
</template>
