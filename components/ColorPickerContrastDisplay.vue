<script lang="ts">
export default {
  props: {
    colorPickerColor: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    headerText: {
      type: String,
      required: true,
    },
    contrastRestriction: {
      type: Number,
      required: true,
    },
  },
  computed: {
    contrast() {
      return this.getContrast(this.bgColor, this.colorPickerColor);
    },
    isCorrect() {
      return this.contrast.passes;
    },
  },
  watch: {
    isCorrect(newValue) {
      this.$emit("correctContrast", newValue);
    },
  },

  methods: {
    setColor(event: any) {
      this.$emit("update:color", event.target.value);
    },
    getContrast(hex1: string, hex2: string) {
      function hexToRgb(hex: string) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
            }
          : {
              r: 0,
              g: 0,
              b: 0,
            };
      }

      function luminance(r = 0, g = 0, b = 0) {
        let a = [r, g, b].map(function (v) {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      }

      const color1rgb = hexToRgb(hex1);
      const color2rgb = hexToRgb(hex2);

      const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
      const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);

      const ratioOneTo =
        color1luminance < color2luminance
          ? (color2luminance + 0.05) / (color1luminance + 0.05)
          : (color1luminance + 0.05) / (color2luminance + 0.05);

      return {
        ratio:
          color1luminance > color2luminance
            ? (color2luminance + 0.05) / (color1luminance + 0.05)
            : (color1luminance + 0.05) / (color2luminance + 0.05),
        ratioOneTo: ratioOneTo.toFixed(2),
        passes: ratioOneTo >= this.$props.contrastRestriction,
      };
    },
  },
  emits: ["correctContrast", "update:color"],
};
</script>

<template>
  <div class="flex items-start gap-2 p-1">
    <div
      :title="
        headerText + ' contrast' + (contrast.passes ? ' success' : ' fail')
      "
    >
      <Icon
        :name="contrast.passes ? 'hugeicons:tick-01' : 'oui:cross'"
        class="text-3xl text-text-light dark:text-text-dark"
      />
    </div>

    <div class="flex flex-col">
      <div class="flex items-center justify-between">
        <h2 class="font-heading text-xl">{{ headerText }}</h2>
      </div>

      <div class="flex items-center gap-2">
        <input
          type="color"
          :value="colorPickerColor"
          @input="setColor"
          :id="headerText + 'ColorPicker'"
          class="h-9 w-8 cursor-pointer bg-transparent"
          :title="headerText + ' color picker'"
        />
        <label :for="headerText + 'ColorPicker'" class="cursor-pointer">{{
          colorPickerColor
        }}</label>
      </div>

      <p>
        Contrast ratio: <strong>{{ contrast.ratioOneTo }} : 1</strong>
      </p>
    </div>
  </div>
</template>
