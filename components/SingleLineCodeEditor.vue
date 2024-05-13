<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showHint: false,
    };
  },
  methods: {
    toggleHint() {
      this.showHint = !this.showHint;
    },
    reset() {
      this.code = this.defaultCode;
      this.showHint = false;
    },
  },
  computed: {
    code: {
      get() {
        return this.currentCode;
      },
      set(value: string) {
        this.$emit("update:currentCode", value);
      },
    },
  },
  props: {
    before: {
      type: String,
      required: true,
    },
    defaultCode: {
      type: String,
      required: true,
    },
    after: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
    currentCode: {
      type: String,
      required: true,
    },
  },
  emits: ["update:currentCode"],
});
</script>
<template>
  <div
    class="flex flex-none gap-2 rounded-2xl bg-blue-3-light p-3 shadow-large-drop-shadow dark:bg-blue-5-dark forced-colors:outline forced-colors:outline-offset-[-2px]"
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
        aria-label="Code input field"
        :class="{
          'bg-input-correct-highlight': isCorrect,
          'bg-hint-highlight-light dark:bg-hint-highlight-dark': !isCorrect,
        }"
      />
      <div class="whitespace-pre-wrap">{{ after }}</div>
    </div>
    <div class="flex flex-col justify-center gap-3">
      <button
        @click="toggleHint"
        class="size-12 rounded-lg bg-axolotl-light shadow-small-drop-shadow hover:bg-axolotl-dark dark:bg-axolotl-dark hover:dark:bg-axolotl-light forced-colors:text-[ButtonText] forced-colors:outline forced-colors:outline-[ButtonBorder]"
        :title="showHint ? `Hide hint` : `Show hint`"
      >
        <Icon name="lucide:lightbulb" class="size-8" />
      </button>
      <button
        @click="reset"
        class="size-12 rounded-lg bg-blue-5-light shadow-small-drop-shadow hover:bg-blue-5-dark dark:bg-blue-4 hover:dark:bg-blue-2-dark forced-colors:text-[ButtonText] forced-colors:outline forced-colors:outline-[ButtonBorder]"
        title="Reset code to inital state"
      >
        <Icon name="lucide:rotate-ccw" class="size-7" />
      </button>
    </div>
  </div>
</template>
<style></style>
