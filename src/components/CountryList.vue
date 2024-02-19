<template>
  <div>
    <div class="grid grid-cols-fluid justify-items-center gap-10 mb-8">
      <CountryCard
        v-for="country in countries"
        :key="country.cca3"
        :country="country"
      />
    </div>
    <p v-if="!countryCount">No matching countries found.</p>
    <button
      v-if="showMore"
      class="py-2.5 px-8 me-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
      @click="onLoadMore"
    >
      Load more
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import useCountries from '../composables/use-countries';
import CountryCard from './CountryCard.vue';

const route = useRoute();
const { countries, countryCount, onLoadMore, showMore } = useCountries(route);
</script>
