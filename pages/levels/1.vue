<script lang="ts">
export default {
  data() {
    return {
      before: `<body>
    <p>Axolotls are listed as critically endangered in the wild.</p>`,
      code: `    <img src="axolotl.jpg"></img>`,
      after: `</body>`,
    };
  },
  computed: {
    /** returns the alt tag value */
    altValue() {
      return (
        this.code.match(/alt="([^">]*)"?/)?.[1] ||
        this.code.match(/alt='([^'>]*)'?/)?.[1] ||
        ""
      );
    },

    altTagIsPresent() {
      return this.code.includes('alt="') || this.code.includes("alt='");
    },

    correct() {
      return (
        this.code.includes('alt="axolotl in an aquarium"') ||
        this.code.includes("alt='axolotl in an aquarium'")
      );
    },
    screenReader() {
      return `Image: ${this.altValue || "axolotl.jpg"}`;
    },
  },
};
</script>
<template>
  <div class="flex h-full flex-1 flex-row items-stretch gap-8 px-16 pb-16">
    <div class="flex flex-[3] flex-col items-stretch gap-8 overflow-y-auto">
      <div
        class="flex-none rounded-2xl border-2 p-4 text-center font-heading text-xl font-semibold"
      >
        <p>Oh no! The 'alt'-tag is missing!</p>
      </div>
      <div
        class="flex flex-1 flex-row gap-8 rounded-2xl border-2 p-8 pt-6 *:flex *:flex-1 *:flex-col *:items-center *:gap-4"
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
            class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl border-2 p-4 text-center"
          >
            <p>{{ screenReader }}</p>
          </div>
        </div>

        <div>
          <Icon name="ic:twotone-wifi-off" size="2rem" />

          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl border-2 p-4"
          >
            <p>
              <Icon name="material-symbols:broken-image-rounded" />
              {{ altValue || "" }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-none gap-2 rounded-2xl border-2 p-2">
        <div class="flex-1 rounded-2xl border-2 p-2 font-mono">
          <div class="whitespace-pre-wrap">{{ before }}</div>
          <input
            type="text"
            v-model="code"
            autofocus
            autocapitalize="none"
            spellcheck="false"
            class="w-full resize-none bg-amber-100 outline-none transition-colors duration-200"
            :class="{
              'bg-green-100': correct,
            }"
          />
          <div class="whitespace-pre-wrap">{{ after }}</div>
        </div>
        <div class="flex flex-col justify-center gap-2">
          <button class="size-12 rounded-lg border-2">
            <Icon name="lucide:lightbulb" class="size-8" />
          </button>
          <button class="size-12 rounded-lg border-2">
            <Icon name="lucide:rotate-ccw" class="size-7" />
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col items-stretch gap-8">
      <div
        class="prose prose-sm flex-1 overflow-y-auto rounded-2xl border-2 bg-bg-light p-8 text-base dark:prose-invert dark:bg-[#293e74]"
      >
        <ContentDoc path="/alt-1" />
      </div>
      <button class="rounded-2xl border-2 p-1">
        <Icon name="ic:round-navigate-next" class="size-12" />
      </button>
    </div>
  </div>
</template>
