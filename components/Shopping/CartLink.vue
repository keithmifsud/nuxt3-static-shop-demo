<script setup>
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()
const cartItems = computed(() => {
  return cartStore.items
})

</script>
<template>
  <nuxt-link
      to="/cart"
      class=""
      :class="{ disabled: cartItems.length < 1 }"
  >
    <div class="relative">
      <div
          class="absolute -top-2 -right-2 bg-indigo-600 text-indigo-100 rounded-full text-xs h-5 w-5 text-center flex justify-center justify-content-center flex-col"
          v-if="cartItems.length > 0"
      >
        {{ cartItems.length }}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
      </svg>

    </div>
  </nuxt-link>
</template>

<style scoped>
.disabled {
  pointer-events: none;
}
</style>
