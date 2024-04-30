<script lang="ts">
import VueMarkdown from "vue-markdown-render";

import { defineComponent } from "vue";

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
});
</script>
<template>
  <div class="flex h-full flex-1 flex-row items-stretch gap-8 px-16 pb-16">
    <div
      class="flex flex-[3] flex-col items-stretch gap-8 overflow-y-auto text-lg"
    >
      <div
        class="flex-none rounded-2xl border-2 border-blue-4 bg-blue-3-light p-4 text-center font-heading text-2xl font-semibold shadow-content-box-drop-shadow dark:bg-blue-3-dark"
      >
        <p>{{ task }}</p>
      </div>
      <div class="flex-1">
        <slot>
          <div class="w-full h-full flex-col flex gap-8">
            <!-- Sehen, Hören, Schwaches Internet -->
            <div
              class="flex flex-1 flex-row gap-8 rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 pt-6 shadow-content-box-drop-shadow *:flex *:flex-1 *:flex-col *:items-center *:gap-4 dark:bg-blue-3-dark"
            >
              <div class="">
                <Icon name="mdi:eye-outline" size="2rem" />
                <img
                  src="~/assets/img/axolotl-1.jpg"
                  alt="axolotl in an aquarium"
                  class="flex-1 self-stretch rounded-2xl object-cover"
                />
              </div>

              <div>
                <Icon name="material-symbols:hearing" size="2rem" />
                <div
                  class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl bg-blue-5-light p-4 text-center dark:bg-blue-5-dark"
                >
                  <p>{{ "screenReader" }}</p>
                </div>
              </div>

              <div>
                <Icon name="ic:twotone-wifi-off" size="2rem" />

                <div
                  class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 dark:bg-blue-5-dark"
                >
                  <p>
                    <Icon name="material-symbols:broken-image-rounded" />
                    {{ "altValue" || "" }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Code Editor -->
            <div
              class="flex flex-none gap-2 rounded-2xl bg-blue-3-light p-3 dark:bg-blue-5-dark shadow-content-box-drop-shadow"
            >
              <div
                class="flex-1 rounded-2xl bg-blue-5-light p-2 font-mono dark:bg-blue-4"
              >
                <div class="whitespace-pre-wrap">{{ "before" }}</div>
                <div
                  class="whitespace-pre-wrap bg-hint-highlight-light dark:bg-hint-highlight-dark"
                >
                  {{ "hint" }}
                </div>
                <input
                  type="text"
                  autofocus
                  autocapitalize="none"
                  spellcheck="false"
                  class="w-full resize-none outline-none transition-colors duration-200"
                  :class="{
                    'bg-input-correct-highlight': isCorrect,
                    'bg-hint-highlight-light dark:bg-hint-highlight-dark':
                      !isCorrect,
                  }"
                />
                <div class="whitespace-pre-wrap">{{ "after" }}</div>
              </div>
              <div class="flex flex-col justify-center gap-3">
                <button
                  click="toggleHint"
                  class="size-12 rounded-lg bg-axolotl-light shadow-content-box-drop-shadow hover:bg-axolotl-dark dark:bg-axolotl-dark hover:dark:bg-axolotl-light"
                >
                  <Icon name="lucide:lightbulb" class="size-8" />
                </button>
                <button
                  click="reset"
                  class="size-12 rounded-lg bg-blue-5-light shadow-content-box-drop-shadow hover:bg-blue-5-dark dark:bg-blue-4 hover:dark:bg-blue-2-dark"
                >
                  <Icon name="lucide:rotate-ccw" class="size-7" />
                </button>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>

    <div class="flex flex-1 flex-col items-stretch gap-8">
      <div
        class="prose prose-lg flex-1 overflow-y-auto rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 shadow-content-box-drop-shadow dark:prose-invert dark:bg-blue-3-dark first:*:*:mt-0"
      >
        <VueMarkdown :source="markdown" />
      </div>

      <!-- TODO: link + button -->
      <NuxtLink :to="(levelNumber + 1).toString()" is>
        <div
          class="flex justify-center rounded-2xl p-1 dark:text-blue-1-dark"
          :class="{
            'bg-button-active dark:bg-button-active': isCorrect,
            'bg-button-disabled dark:bg-button-disabled pointer-events-none cursor-not-allowed': !isCorrect,
          }"
        >
          <Icon name="ic:round-navigate-next" class="size-12" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style></style>
