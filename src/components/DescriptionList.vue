<template>
  <dl class="text-sm">
    <div v-for="item in items" :key="item.key" class="flex mb-2">
      <template v-if="item.value">
        <dt class="font-bold mr-2">{{ item.key }}:</dt>
        <dd>{{ item.value }}</dd>
      </template>
    </div>
  </dl>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, required: true }
});
</script>
