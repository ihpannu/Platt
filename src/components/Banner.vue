<template>
  <section class="mb-10 mx-5 flex flex-col justify-center items-center shadow-primary">
    <div class="banner-img"></div>
    <h5 class="w-full p-6 truncate bg-white text-center">Shop better, download the Platt App today</h5>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.banner-img {
  background-image: url(../assets/panel/app-get-banner-mobile.png);
  @apply w-full h-60 bg-center bg-cover bg-no-repeat;
}

@media (min-width: 768px) {
  .banner-img {
    background-image: url(../assets/panel/app-get-banner.png);
    @apply h-72;
  }
}
</style>