import { computed, onUpdated, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { API_BASE_URL } from '../const';

const useCountry = () => {
  const route = useRoute();
  const borderCountries = ref();
  const country = ref();
  const borderKeys = computed(() => Object.keys(borderCountries.value));
  const currencies = computed(() =>
    Object.values(country.value.currencies ?? {})
      .map((c) => c.name)
      .join(', ')
  );
  const languages = computed(() =>
    Object.values(country.value.languages ?? {}).join(', ')
  );
  const population = computed(() =>
    country.value.population?.toLocaleString('en-us')
  );

  const fetchData = async (id) => {
    const response = await fetch(`${API_BASE_URL}/alpha/${id}`).then((res) =>
      res.json()
    );

    country.value = response[0];
  };

  const fetchBorderData = async (country) => {
    const response = await fetch(
      `${API_BASE_URL}/alpha?codes=${country.borders.join()}&fields=name,cca3`
    ).then((res) => res.json());

    if (response) {
      const countries = response.reduce((acc, cur) => {
        acc[cur.cca3] = cur.name.common;
        return acc;
      }, {});

      borderCountries.value = countries;
    }
  };

  watch(country, (countryValue) => {
    if (countryValue.borders) {
      fetchBorderData(countryValue);
    }
  });

  onBeforeRouteUpdate(async (to, from) => {
    if (to.params.id !== from.params.id) {
      fetchData(to.params.id);
    }
  });

  onUpdated(() => {
    window.scrollTo({ top: 0 });
  });

  fetchData(route.params.id);

  return {
    borderCountries,
    borderKeys,
    country,
    currencies,
    languages,
    population
  };
};

export default useCountry;
