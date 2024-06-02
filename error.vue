<template>
  <div
    class="h-screen place-items-center bg-[url('~/assets/img/error-page-background.svg')] bg-repeat"
  ></div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: false,
    });
  },
  props: ["error"],
  mounted() {
    alert(this.error.message + "\nWe will direct you to the home page.");
    this.$nuxt.$router.push("/");
  },
};
</script>
