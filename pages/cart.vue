<script setup>

import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const checkingOut = ref(false)

const cartItems = computed(() => {
  return cartStore.items
})

async function checkout () {
  checkingOut.value = true
  await cartStore.takePayment()
}

</script>
<template>
  <Head>
    <Title>Cart - My Shop</Title>
  </Head>
  <div class="px-12 mt-12">
    <div>
      <div class="flex justify-between border-b p-2 font-medium bg-gray-100 items-center">
        <div class="w-1/3">Product Name</div>
        <div class="w-1/3 text-center">Quantity</div>
        <div class="w-1/3">Sub total</div>
      </div>
      <div class="flex justify-between border-b p-2 font-normal" v-for="item in cartItems" :key="item.productId">
        <div class="w-1/3">{{ item.productName }}</div>
        <div class="w-1/3 text-center">{{ item.quantity }}</div>
        <div class="w-1/3">£{{ item.subTotal.toLocaleString() }}</div>
      </div>
      <div v-if="cartItems.length > 0">
        <div class="my-8 flex flex-col items-end justify-center">
          <button
              class="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-indigo-200 rounded-lg"
              v-on:click="checkout"
              :disabled="checkingOut"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
