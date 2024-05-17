<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";

const code = `    <p><span class="axolotlText"></span></p>`;
const pool = ref([
  {
    name: "Heading 1",
    id: "1",
  },
  {
    name: "Heading 2",
    id: "2",
  },
  {
    name: "Title 1",
    id: "3",
  },
  {
    name: "Title 2",
    id: "4",
  },
]);
const titles = ref([]);
const headings = ref([]);

export default defineComponent({
  data: () => {
    return {
      markdown: `Title or heading, what should I use?

In web development, there is an important difference between headings and titles. A title is meant to inform users about the current location of the page, without them requiring to read the page content. On the other hand, headings help users find specific content within the page.

You could say, user agents (e.g. Browsers like Chrome or Firefox) display titles as the name of the tab containing the page, while browsers often allow to navigate from heading to heading within a page.

Titles also help with SEO, if used correctly. Here's a little checklist what your title should look like:

- Include Keyword
- Use Keyword At the Beginning of page title
- Click-worthy title
- Use Business Name
- Optimize Length

## Links
- [Providing titles for Web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G88)
- [Providing headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130.html)
- [Writing better titles](https://contentcreation.ai/writing-better-titles/)`,

      code,
      defaultCode: code,
      task: "Is it a title or a heading?",
      pool,
      titles,
      headings,
    };
  },
  computed: {
    isCorrect(): boolean {
      return /<p>\s*Axo<span class=(('axolotlText')|("axolotlText"))>lotl\s*<\/span>\s*<\/p>/.test(
        this.code,
      );
    },
  },
  components: {
    VueDraggable,
  },
});
</script>
<template>
  <Level :markdown :task :isCorrect :levelNumber="3">
    <div class="flex h-full w-full flex-col gap-8">
      <div
        class="flex flex-1 flex-row gap-8 rounded-2xl border-2 border-blue-4 bg-blue-3-light p-8 pt-6 shadow-small-drop-shadow *:flex *:flex-1 *:flex-col *:items-center *:gap-4 dark:bg-blue-3-dark"
      >
        <div title="Sort titles here">
          <p>Titles</p>
          <div
            class="grid flex-1 place-items-center self-stretch text-pretty rounded-2xl bg-blue-5-light p-4 text-center shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <VueDraggable
              class="flex h-full w-full flex-col gap-2 overflow-auto rounded p-4 text-center"
              v-model="titles"
              :animation="150"
              group="people"
              ghostClass="ghost"
            >
              <div
                v-for="item in titles"
                :key="item.id"
                class="h-30 cursor-move rounded bg-blue-3-light p-3 dark:bg-blue-4"
              >
                {{ item.name }}
              </div>
            </VueDraggable>
          </div>
        </div>
        <div title="Sort headings here">
          <p>Headings</p>
          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <VueDraggable
              class="flex h-full w-full flex-col gap-2 overflow-auto rounded p-4 text-center"
              v-model="headings"
              :animation="150"
              group="people"
              ghostClass="ghost"
            >
              <div
                v-for="item in headings"
                :key="item.id"
                class="h-30 cursor-move rounded bg-blue-3-light p-3 dark:bg-blue-4"
              >
                {{ item.name }}
              </div>
            </VueDraggable>
          </div>
        </div>
        <div title="Take the textboxes out of the pool and sort them">
          <p>Pool</p>
          <div
            class="grid flex-1 place-items-center self-stretch rounded-2xl bg-blue-5-light p-4 shadow-small-drop-shadow dark:bg-blue-5-dark forced-colors:outline"
          >
            <VueDraggable
              class="m-auto flex h-full w-full flex-col gap-2 overflow-auto rounded p-4 text-center"
              v-model="pool"
              :animation="150"
              group="people"
              ghostClass="ghost"
            >
              <div
                v-for="item in pool"
                :key="item.id"
                class="h-30 cursor-move rounded bg-blue-3-light p-3 dark:bg-blue-4"
              >
                {{ item.name }}
              </div>
            </VueDraggable>
          </div>
        </div>
      </div>
    </div>
  </Level>
</template>
