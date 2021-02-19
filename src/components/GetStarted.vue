<template>
  <section
    class="mb-10 mx-5 pt-2 pb-10 shadow-primary bg-white flex flex-col lg:flex-row justify-center lg:justify-around items-center"
  >
    <img
      alt="platt-plus"
      class="py-10 w-full max-w-lg"
      src="../assets/img/platt-plus.png"
    />

    <div class="text-center">
      <h2 class="capitalize mb-2">Get started today</h2>
      <h3 class="capitalize mb-8">
        Become a
        <span class="text-primary">Platt Plus</span> Memeber.
      </h3>

      <button
        class="w-full max-w-xs h-16 text-2xl font-bold bg-gray-300 rounded-full mb-8"
      >Learn More</button>
    </div>
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

<style scoped></style>
