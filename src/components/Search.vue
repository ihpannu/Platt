
<template>
  <form
    @focusout="hideSearchList"
    @submit.prevent="submit"
  >
    <div class="form-input">
      <input
        @input="submit"
        autocomplete
        name="query"
        placeholder="Try typing Naboo"
        type="text"
        v-model="query"
      />
      <span>
        <button
          @click="clear"
          v-if="query.length"
        >
          <img
            alt="search_icon"
            class="w-6 h-6"
            src="../assets/icons/black/ic_close.png"
          />
        </button>
        <button
          type="submit"
          v-else
        >
          <img
            alt="search_icon"
            class="w-6 h-6"
            src="../assets/icons/black/ic_search.png"
          />
        </button>
      </span>
    </div>
    <ul v-if="show">
      <li
        :key="idx"
        @click="selectValue(planet)"
        v-for="(planet, idx) in planets"
      >
        <span class="font-normal">{{ planet.name }}</span>
        <span>Population {{ planet.population }}</span>
      </li>
    </ul>
    <ul v-else-if="loading">
      <li>Loading...</li>
    </ul>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import usePlanets from "@/hooks/usePlanets";
import { Planet } from "@/hooks/usePlanets";
import { debounce } from "throttle-debounce";

export default defineComponent({
  setup() {
    const query = ref("");
    const show = ref(false);
    const loading = ref(false);
    const error = ref(null);
    const planets = ref<Planet[]>([]);

    const selectValue = (value: Planet) => {
      const currentPlanet = planets.value.find(
        (planet) => planet.name === value.name
      );
      query.value = currentPlanet?.name || query.value;
      show.value = false;
    };

    const search = async () => {
      loading.value = true;
      try {
        const { planets: responsePlanets } = await usePlanets(query.value);
        planets.value = responsePlanets;
      } catch (error) {
        error.value = error;
      }
      loading.value = false;
      show.value = true;
    };

    const clear = () => {
      query.value = "";
      planets.value = [];
      show.value = false;
    };

    const hideSearchList = debounce(500, () => {
      show.value = false;
    });

    const submit = debounce(500, search);

    return {
      query,
      submit,
      loading,
      error,
      planets,
      selectValue,
      show,
      hideSearchList,
      clear,
    };
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;
}

form .form-input {
  background-color: var(--white);
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  max-width: 1280px;
  position: relative;
  width: 100%;
}

form .form-input input {
  padding: 0.75rem;
  padding-right: 2.5rem;
  position: absolute;
  width: 100%;
  border-radius: 0.375rem;
  height: 100%;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
:focus {
  outline: none;
}

form .form-input span {
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
}

form .form-input button {
  padding: 0.25rem;
  margin: 0 0.75rem;
}
:focus {
  outline: none;
}

form ul {
  background-color: var(--white);
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  max-width: 1280px;
  overflow-y: scroll;
  position: absolute;
  top: 5rem;
  box-shadow: var(--primary-shadow);
  width: 100%;
}

form ul li {
  border-bottom-width: 1px;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem 0.75rem;
}

form ul li:last-child {
  border: 0;
}
</style>
