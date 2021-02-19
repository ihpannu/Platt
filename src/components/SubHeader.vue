<template>
  <section class="mb-10 pt-2 px-5 lg:px-0 bg-white">
    <div
      class="w-full h-24 px-3 py-2 flex justify-between lg:justify-center items-center border-b-2"
    >
      <div class="flex justify-start items-center py-2">
        <img
          alt="check"
          class="w-8 mr-5"
          src="../assets/icons/black/ic_categories.png"
        />
        <h4>Shop all categories</h4>
      </div>
      <img
        alt="arrow-forward"
        class="w-8 lg:hidden"
        src="../assets/icons/black/ic_arrow_forward.png"
      />
    </div>
    <ul
      class="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-start items-center"
    >
      <li
        :key="item.name"
        class="w-full h-20 p-3 lg:p-5 lg:w-1/3 flex justify-between lg:justify-center items-center border-b-2 lg:border-r-2"
        v-for="item in items"
      >
        <div class="flex justify-left lg:justify-center items-center py-2">
          <img
            :alt="item.name"
            :src="item.icon"
            class="w-8 mr-5"
          />
          <h4 class="font-normal capitalize">{{ item.name }}</h4>
        </div>
        <img
          alt="arrow-forward"
          class="w-8 lg:hidden"
          src="../assets/icons/black/ic_arrow_forward.png"
        />
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
        name: "my catalog",
        icon: require("../assets/icons/black/ic_playlist_add_check.png"),
      },
      {
        name: "my list",
        icon: require("../assets/icons/black/ic_list.png"),
      },
      {
        name: "live help",
        icon: require("../assets/icons/green/ic_chat-active.png"),
      },
      {
        name: "pim",
        icon: require("../assets/icons/black/ic_check_circle.png"),
      },
      {
        name: "account",
        icon: require("../assets/icons/black/ic-person-64.png"),
      },
      {
        name: "branch locations",
        icon: require("../assets/icons/black/ic_place.png"),
      },
    ]);

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        items.value = items.value.map((item) => {
          if (item.name === "live help") {
            item.icon = require("../assets/icons/black/ic_comment.png");
          }
          return item;
        });
      } else {
        items.value = items.value.map((item) => {
          if (item.name === "live help") {
            item.icon = require("../assets/icons/green/ic_chat-active.png");
          }
          return item;
        });
      }
    });

    return { items };
  },
});
</script>

<style scoped>
ul li:last-child {
  @apply border-b-0;
}

@media (min-width: 1024px) {
  ul li:last-child {
    @apply border-b-2;
  }
}
</style>
