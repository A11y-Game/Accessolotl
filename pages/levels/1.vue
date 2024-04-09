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
      return `Axolotls are listed as critically endangered in the wild. Image: ${this.altValue || "axolotl.jpg"}`;
    },
  },
};
</script>
<template>
  <div class="flex h-full flex-row">
    <div class="flex h-full flex-col flex-auto w-2/3">
      <div class="flex flex-col justify-stretch">
        <div class="border-2 text-xl">
          The image:
          <img
            src="~/assets/img/axolotl-1.jpg"
            alt="axolotl in an aquarium"
            rounded
          />
        </div>

        <div>
          <h2 class="font-sansa">What a visually impaired user hears</h2>
          <p>{{ screenReader }}</p>
        </div>
        <div>
          <h2>What a user with slow internet connection sees</h2>
          <Icon name="material-symbols:broken-image-rounded" color="gray" />
          {{ altValue || "" }}
        </div>
      </div>

      <div class="border-2">
          <div class="border-2 font-mono">
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
        </div>

    </div>

  
    <div class="prose dark:prose-invert rounded border-2 border-accent bg-bg-light p-8 overflow-y-auto text-base flex-auto w-1/3 dark:bg-[#293e74]">
        <ContentDoc path="/alt-1" />
    </div>
  </div>
</template>
