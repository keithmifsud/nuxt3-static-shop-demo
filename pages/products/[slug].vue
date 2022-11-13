<script setup>
import { useProductsStore } from '../../stores/products'
import { useCartStore } from '../../stores/cart'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const route = useRoute()

const product = computed(() => {
  return productsStore.products.find(product => {
    return product.slug === route.params.slug
  })
})

const image = useAssets(`/assets/images/products/${product.value.image}`)

async function addToCart() {
  await cartStore.addToCart({
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    currency: 'gbp',
    stripePriceId: product.value.stripePriceId,
  })
}

</script>
<template>
  <div>
    <div class="flex mt-12 p-4">
      <div class="w-1/2">
        <div>
          <img
              class="rounded-3xl border border-indigo-200 hover:animate-pulse"
              :src="image"
              :alt="`${product.name}'s image`"
          >
        </div>
      </div>
      <div class="w-1/2 flex flex-col items-center justify-center">
        <div><h2 class="text-5xl text-indigo-700 ">{{ product.name }}</h2></div>
        <div class="my-8 flex flex-col items-center justify-center">
          <button
              class="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-indigo-200 rounded-lg"
              v-on:click="addToCart"
          >
            Add to Cart @ £{{ product.price }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
