import { ref } from "vue";
import useApi from "./useApi";
export interface Planets {
  count: number;
  next: string;
  previous: null;
  results: Planet[];
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export default async function usePlanets(query: string) {
  const url = `https://swapi.dev/api/planets/?search=${query}`;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const { response, request } = useApi<Planet[]>(url);
  const loaded = ref(false);
  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }
  return { planets: response.value.results };
}
