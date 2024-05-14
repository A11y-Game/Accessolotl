<script lang="ts">
import VueMarkdown from "vue-markdown-render";

import { defineComponent } from "vue";
import { useProgressStore } from '../stores/ProgressStore';
import { mapStores } from 'pinia';


export default defineComponent({
  props: {
    markdown: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
    levelNumber: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  components: {
    VueMarkdown,
  },
  methods: {
    nextLevel() {
      this.progressStore.incrementLevel();
      this.$router.push(this.progressStore.nextLevelString);
    },
  },
  computed: {
    ...mapStores(useProgressStore),
  },
  watch: {
    isCorrect(newValue) {
      if (newValue) {
        const progressStore = useProgressStore();
        progressStore.levelUp();
      }
    },
  },
});
</script>
<template>
  <Title>Level {{ levelNumber }}</Title>
  <div class="flex h-full flex-1 flex-row items-stretch gap-8 px-16 pb-16">
    <div
      class="flex flex-[3] flex-col items-stretch gap-8 overflow-y-auto pb-3 text-base"
    >
      <div
        class="flex-none rounded-2xl border-2 border-blue-4 bg-blue-3-light p-4 text-center font-heading text-xl font-semibold shadow-large-drop-shadow dark:bg-blue-3-dark"
      >
        <p>{{ task }}</p>
      </div>
      <div class="flex-1">
        <slot></slot>
      </div>
    </div>

    <div class="flex flex-1 flex-col items-stretch gap-8 pb-3">
      <div
        class="prose flex-1 overflow-y-auto rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 shadow-large-drop-shadow dark:prose-invert first:*:*:mt-0 dark:bg-blue-3-dark"
      >
        <VueMarkdown :source="markdown" />
      </div>

      <button
        class="flex justify-center rounded-2xl p-1 dark:text-blue-1-dark forced-colors:outline"
        :disabled="!isCorrect"
        @click="nextLevel"
        :title="
          isCorrect
            ? 'Go to next level'
            : 'Going to next level disallowed: Solve the task first'
        "
        :class="{
          'bg-button-active dark:bg-button-active': isCorrect,
          'cursor-not-allowed bg-button-disabled dark:bg-button-disabled':
            !isCorrect,
        }"
      >
        <Icon name="ic:round-navigate-next" class="size-12" />
      </button>
    </div>
  </div>
</template>

<style></style>
