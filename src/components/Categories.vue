<template>
  <section class="mb-10 pt-2 px-5 lg:hidden">
    <ul class="flex justify-evenly">
      <li
        :key="idx"
        class="flex flex-col items-center justify-center"
        v-for="(item, idx) in items"
      >
        <div class="flex items-center justify-center bg-white rounded-full w-24 h-24">
          <img
            :alt="item.name"
            :src="item.icon"
            class="w-12 h-12 p-2"
          />
        </div>
        <h4 class="font-normal capitalize">{{ item.name }}</h4>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const items = ref([
      {
        name: "categories",
        icon: require("../assets/icons/green/ic_line_style.png"),
      },
      {
        name: "search",
        icon: require("../assets/icons/green/ic_search.png"),
      },
      {
        name: "scan",
        icon: require("../assets/icons/green/ic_scanner.png"),
      },
    ]);
    return { items };
  },
});
</script>
