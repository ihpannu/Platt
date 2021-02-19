<template>
  <section class="overflow-hidden hidden lg:block mb-10 mx-5 pt-2 lg:pt-0">
    <div class="text-center">
      <h2 class="mb-8">Product Markets</h2>
      <div class="grid grid-cols-6 gap-5 mb-8">
        <div
          :key="idx"
          class="bg-white w-full max-w-xs shadow-primary"
          v-for="(item, idx) in items"
        >
          <img
            :alt="item.name"
            :src="item.icon"
            class="w-full max-w-xs object-fill"
          />
          <h4 class="capitalize py-4">{{item.name}}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const items = ref([
      {
        name: "DataComm",
        icon: require("../assets/img/datacomm.png"),
      },
      {
        name: "HVAC",
        icon: require("../assets/img/hvac.png"),
      },
      {
        name: "Industrial",
        icon: require("../assets/img/industrial.png"),
      },
      {
        name: "Lighting",
        icon: require("../assets/img/lighting.png"),
      },
      {
        name: "Energy Efficiency",
        icon: require("../assets/img/lighting.png"),
      },
      {
        name: "Utility",
        icon: require("../assets/img/utility.png"),
      },
    ]);
    return { items };
  },
});
</script>