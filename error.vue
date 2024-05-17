<template>
  <div
    class="place-items-center h-screen bg-[url('~/assets/img/error-page-background.svg')] bg-repeat"
  >
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
  mounted() {
    this.alertAndRedirect();
  },
  methods: {
    alertAndRedirect() {
      alert(this.error.message + "\nWe will direct you to the home page.");
      this.$nuxt.$router.push("/");
    },
  },
};
</script>
