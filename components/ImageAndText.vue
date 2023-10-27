<!-- Add a script to fetch the data -->
<script setup>
const props = defineProps(['data'])
const data = computed(() => props.data)
</script>
<template>
  <section class="relative bg-green-light">
    <div
      class="relative mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
    >
      <img
        :class="data.image_position === 'Right' ? 'order-last' : ''"
        class="h-60 w-full rounded-lg object-cover shadow-xl md:h-96"
        :src="data.image[0]?.url"
        alt="dashboard image"
      />
      <div class="mt-8 md:mt-4">
        <h2
          class="mb-4 text-center text-xl font-extrabold tracking-tight md:text-left md:text-4xl"
        >
          {{ data.title }}
        </h2>
        <p class="text-center font-light md:mb-6 md:text-left md:text-lg">
          {{ data.text }}
        </p>
      </div>
    </div>
  </section>
</template>
