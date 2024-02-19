<template>
  <router-link
    class="appearance-none w-[250px] bg-white border border-gray-200 shadow dark:bg-gray-700 dark:border-gray-600"
    :to="{ name: ROUTES.detail.name, params: { id: country.cca3 } }"
  >
    <div
      class="border-b border-gray-300 h-40 bg-no-repeat bg-cover bg-center dark:border-gray-700"
      :style="{ backgroundImage: `url(${country.flags?.svg})` }"
    ></div>
    <div class="p-5 text-left">
      <h2
        class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ country.name?.common }}
      </h2>
      <dl class="text-sm grid grid-cols-2">
        <dt class="font-bold">Capital:</dt>
        <dd>{{ country.capital?.[0] ?? 'N/A' }}</dd>
        <dt class="font-bold">Region:</dt>
        <dd>{{ country.region }}</dd>
        <dt class="font-bold">Population:</dt>
        <dd>{{ country.population?.toLocaleString('en-us') }}</dd>
      </dl>
    </div>
  </router-link>
</template>

<script setup>
import { ROUTES } from '../const';

const props = defineProps({
  country: { type: Object, required: true }
});
</script>
