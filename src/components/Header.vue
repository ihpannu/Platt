<template>
  <header class="pb-10">
    <nav>
      <img
        alt="logo"
        src="../assets/img/logo.png"
      />
      <ul>
        <li>
          <img
            alt="search"
            src="../assets/icons/white/ic_search.png"
          />
        </li>
        <li>
          <img
            alt="cart"
            src="../assets/icons/white/ic_shopping_cart.png"
          />
        </li>
        <li class="relative">
          <img
            alt="person"
            src="../assets/icons/white/ic_person.png"
          />
          <div class="absolute top-0 right-0 w-2 h-2 bg-yellow-500 shadow-primary rounded-full"></div>
        </li>
        <li>
          <img
            alt="menu"
            src="../assets/icons/white/ic_menu.png"
          />
        </li>
      </ul>
    </nav>
    <SearchBar />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SearchBar from "@/components/Search.vue";
export default defineComponent({
  components: { SearchBar },
  setup() {
    const icons = ref([
      "../assets/icons/white/ic_menu.png",
      "../assets/icons/white/ic_person.png",
      "../assets/icons/white/ic_search.png",
      "../assets/icons/white/ic_shopping_cart.png",
    ]);
    return { icons };
  },
});
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  @apply bg-primary p-2;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @apply px-2;
}

header nav img {
  @apply h-8;
}

header nav h2 {
  @apply text-white;
}

header nav ul {
  display: flex;
}

header nav ul {
  display: flex;
  justify-items: center;
  align-items: center;
}

header nav ul li {
  @apply p-2 m-1;
}

header nav ul li img {
  @apply h-6 w-6 lg:h-8 lg:w-8;
}
</style>
