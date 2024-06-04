<script lang="ts">
import VueMarkdown from "vue-markdown-render";

import { defineComponent } from "vue";
import { useProgressStore } from "../stores/ProgressStore";
import { mapStores } from "pinia";
import confetti from "canvas-confetti";

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
      if (this.isLastLevel) {
        this.fireConfetti();
      } else {
        this.$router.push(this.progressStore.nextLevelString);
        this.progressStore.incrementLevel();
      }
    },
    fireConfetti() {
      const count = 200;
      const defaults = {
        origin: { x: 0.85, y: 0.8 },
      };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          angle: 90 + Math.random() * 45,
          particleCount: Math.floor(count * particleRatio),
          disableForReducedMotion: true,
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    },
  },
  computed: {
    ...mapStores(useProgressStore),
    isLastLevel() {
      return this.progressStore.currentLevel === this.progressStore.levelCount;
    },
  },
  watch: {
    isCorrect(newValue) {
      if (newValue && this.isLastLevel) {
        this.fireConfetti();
        setTimeout(() => {
          alert(
            "🎉 Congratulations, you did it! 🎉\nYou've completed all levels! 🥳🎊\n\nDon't forget to refer to the resources on our welcome page to dive even deeper into web accessibility! 📚💻",
          );
        }, 50);
      } else if (newValue) {
        this.progressStore.levelUp();
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
        aria-live="polite"
        class="flex justify-center rounded-2xl p-1 hover:opacity-90 active:opacity-60 dark:text-blue-1-dark forced-colors:outline"
        :disabled="!isCorrect"
        @click="nextLevel"
        :title="
          isCorrect
            ? isLastLevel
              ? 'Fire confetti!'
              : 'Go to next level'
            : 'Going to next level disallowed: Solve the task first'
        "
        :class="{
          'bg-button-active dark:bg-button-active': isCorrect,
          'cursor-not-allowed bg-button-disabled dark:bg-button-disabled':
            !isCorrect,
        }"
      >
        <Icon
          :name="isLastLevel ? 'noto:party-popper' : 'ic:round-navigate-next'"
          class="size-12"
          :class="{
            'opacity-70 grayscale': !isCorrect && isLastLevel,
          }"
        />
      </button>
    </div>
  </div>
</template>

<style></style>
