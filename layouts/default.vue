<script setup>
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()

async function retrieveProducts() {
  await productsStore.retrieveProducts()
}

await retrieveProducts()
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
    <footer class="fixed bottom-0 text-center w-full text-gray-700 p-2 text-xs z-10 bg-white py-4 border-t">
      &copy; My shop - 2022
    </footer>
  </div>
</template>

<style scoped>
</style>
