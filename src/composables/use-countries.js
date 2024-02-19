import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { API_BASE_URL, REGION_KEY, SEARCH_KEY } from '../const';

const useCountries = () => {
  const route = useRoute();
  const page = ref(12);
  const data = ref();

  const fetchData = async () => {
    const endpoint = `${API_BASE_URL}/all`;
    const response = await fetch(endpoint).then((res) => res.json());
    data.value = response;
  };

  fetchData();

  const countries = computed(() =>
    data.value
      ?.slice(0)
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
  );
  const onLoadMore = () => {
    page.value = page.value * 2;
  };
  const searchQuery = computed(() => route.query.search);
  const search = null;
  const region = null;
  const filterByCountry = (country) =>
    search
      ? country.name.common.toLowerCase().startsWith(search.toLowerCase())
      : country;
  const filterByRegion = (country) =>
    region ? country.region === region : country;
  const filteredCountries = computed(() =>
    countries.value?.filter(filterByRegion)?.filter(filterByCountry)
  );
  const visibleCountries = computed(() =>
    filteredCountries.value?.slice(0, page.value)
  );
  const countryCount = computed(() => filteredCountries.value?.length ?? 0);
  const showMore = computed(
    () => countryCount.value > visibleCountries.value?.length
  );

  return {
    countries: visibleCountries,
    countryCount,
    onLoadMore,
    showMore
  };
};

export default useCountries;
