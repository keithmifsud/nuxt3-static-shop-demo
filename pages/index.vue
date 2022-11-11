<script setup>

import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()

const products = computed(() => {
  return productsStore.products
})

async function retrieveProducts() {
  await productsStore.retrieveProducts()
}

await retrieveProducts()
</script>

<template>
  <div>
    <div>
      <h1 class="text-blue-400 text-2xl">Welcome to My Shop</h1>
      <p class="mt-4"><strong>Please don't touch</strong>, all breakages must be paid!</p>
    </div>
    <div class="flex justify-around mt-20" v-if="products">
      <div v-for="product in products" :key="product.id">
        <ProductsPreview :product="product"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
