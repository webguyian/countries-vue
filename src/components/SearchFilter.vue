<template>
  <div class="flex flex-col md:flex-row justify-between mb-8">
    <form
      class="w-full md:max-w-72 mb-5 md:mb-0"
      method="GET"
      :action="ROUTES.home.path"
    >
      <label
        for="search-filter"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          id="search-filter"
          v-model="search"
          class="peer block w-full py-3 ps-12 pe-8 text-sm text-gray-900 shadow rounded bg-white dark:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-200 dark:placeholder-gray-400 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="search"
          placeholder="Search for a country..."
          type="search"
          required
        />
        <button
          class="absolute inset-y-0 end-4 peer-invalid:hidden"
          title="Clear search"
          type="reset"
          @click="handleResetSearch"
        >
          <svg
            class="w-4 h-4 text-gray-300 hover:text-gray-400 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>
        </button>
      </div>
      <input v-if="region" type="hidden" name="region" :value="region" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { REGION_KEY, ROUTES, SEARCH_KEY } from '../const';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const region = ref(route.query[REGION_KEY]);
const search = ref(route.query[SEARCH_KEY]);
const handleResetSearch = () => {
  router.push({ name: ROUTES.home.name, query: {} });
};
</script>
