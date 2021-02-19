<template>
  <section>
    <div
      :key="idx"
      class="card"
      v-for="(item, idx) in items"
    >
      <img
        :alt="item.name"
        :src="item.icon"
        class="w-40 mb-10"
      />
      <h4 class="capitalize">{{item.name}}</h4>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const items = ref([
      {
        name: "super tool day & dynamic data day",
        icon: require("../assets/img/super-tool-day.png"),
      },
      {
        name: "branch locations",
        icon: require("../assets/img/ic_location_b.png"),
      },
      {
        name: "help center",
        icon: require("../assets/img/ic_helpcenter.png"),
      },
      {
        name: "platt university",
        icon: require("../assets/img/ic_platt-u.png"),
      },
    ]);
    return { items };
  },
});
</script>
<style scoped>
section {
  display: grid;
  margin: 0 1.25rem 2.5rem;
  padding-top: 0.5rem;
  gap: 1.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (min-width: 1024px) {
  section {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

section .card {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18rem;
  padding: 1.25rem;
  box-shadow: var(--primary-shadow);
}
</style>