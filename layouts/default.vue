<script setup>
</script>
<template>
  <div class="min-h-screen">
    <header>
      <div class="flex w-screen bg-gray-100 h-16 px-4 text-gray-800 items-center">
        <NuxtLink to="/">My Shop</NuxtLink>
      </div>
    </header>
    <main class="p-4">
      <slot></slot>
    </main>
    <footer class="fixed bottom-0 text-center w-full text-gray-700 p-2 text-xs">
      &copy; My shop - 2022
    </footer>
  </div>
</template>

<style scoped>
</style>
