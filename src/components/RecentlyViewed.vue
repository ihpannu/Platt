<template>
  <section>
    <div class="recently-viewed-header">
      <h4>Recently Viewed</h4>
      <button>View all</button>
    </div>
    <div class="recently-viewed-products">
      <img
        alt="bag"
        src="../assets/recent/11.png"
      />
      <img
        alt="light"
        src="../assets/recent/22.png"
      />
      <img
        alt="light"
        src="../assets/recent/22.png"
      />
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

<style scoped>
section {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  margin-bottom: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;
  box-shadow: var(--primary-shadow);
}

section .recently-viewed-header {
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0.5rem 1.25rem;
  width: 100%;
}

section .recently-viewed-header button {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary-color);
}

section .recently-viewed-products {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

section .recently-viewed-products img {
  width: 8rem;
}

@media (min-width: 1024px) {
  section .recently-viewed-products {
    gap: 1.5rem;
  }

  section .recently-viewed-products img {
    width: 12rem;
  }
}
</style>