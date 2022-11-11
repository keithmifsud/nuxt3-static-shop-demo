<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const image = useAssets(`/assets/images/products/${props.product.image}`)

</script>
<template>
  <div>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#" text-center>
        <img class="rounded-t-lg h-80 w-96 object-cover"
             :src="image"
             :alt="`${product.name}'s image`"
        >
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ product.name }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          £ {{product.price}}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
