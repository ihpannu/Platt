<template>
  <footer class="mb-10 py-10 px-5 lg:px-0">
    <div class="mb-8">
      <h3 class="mb-8">Support Center</h3>
      <h3 class="mb-1">800-25-Platt</h3>
      <h6 class="font-base">800-257-5288</h6>
    </div>
    <div class="text-gray-300 mb-8">
      <h3 class="mb-1">4 a.m. - 12 a.m. (pst)</h3>
      <h3>7 Days a week</h3>
    </div>
    <button
      class="w-full max-w-xs h-16 text-2xl font-bold bg-white text-black rounded-full mb-8"
    >Live Help</button>

    <div class="flex justify-between px-5">
      <button class="text-xl font-bold">Contact Us</button>
      <button class="text-xl font-bold">What's New</button>
      <button class="text-xl font-bold">FAQ's</button>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    return {};
  },
});
</script>

<style scoped>
footer {
  color: var(--white);
  background-color: var(--primary-gray);
  @apply text-center;
}
</style>