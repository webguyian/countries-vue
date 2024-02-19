import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { REGION_KEY, ROUTES, SEARCH_KEY } from '../const';

const useSearchFilter = () => {
  const route = useRoute();
  const router = useRouter();
  const regionQuery = ref(route.query[REGION_KEY]);
  const searchQuery = ref(route.query[SEARCH_KEY]);
  const query = computed(() => ({
    [REGION_KEY]: regionQuery.value,
    [SEARCH_KEY]: searchQuery.value
  }));
  const dropdown = ref(null);
  const expanded = ref(false);
  const dropdownClass = computed(() =>
    expanded.value ? 'absolute' : 'hidden'
  );

  const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
      toggleDropdown();
    }
  };
  const toggleDropdown = () => {
    expanded.value = !expanded.value;

    if (expanded.value) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  };
  const updateQuery = () =>
    router.push({ name: ROUTES.home.name, query: query.value });

  const onResetRegion = () => {
    regionQuery.value = undefined;
    toggleDropdown();
    updateQuery();
  };
  const onResetSearch = () => {
    searchQuery.value = undefined;
    updateQuery();
  };
  const onSelect = (event) => {
    const region = event.target.textContent;
    regionQuery.value = region;

    toggleDropdown();
    updateQuery();
  };

  return {
    dropdown,
    dropdownClass,
    expanded,
    onResetRegion,
    onResetSearch,
    onSelect,
    onToggle: toggleDropdown,
    regionQuery,
    searchQuery
  };
};

export default useSearchFilter;
