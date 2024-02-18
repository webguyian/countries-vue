<template>
  <div
    class="flex flex-col h-full text-[#111517] bg-[#fafafa] dark:text-white dark:bg-[#202c37]"
  >
    <NavBar />
    <main className="flex flex-col min-h-screen h-full p-8 text-center">
      <Suspense>
        <router-view />
        <template #fallback>Loading...</template>
      </Suspense>
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>
