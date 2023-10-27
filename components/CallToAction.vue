<!-- Add a script to fetch the data -->
<script setup>
const props = defineProps(['data'])
const data = computed(() => props.data)
const stack = data?.value?.stack
</script>
<template>
  <section class="relative bg-beige">
    <div
      class="relative mx-auto max-w-screen-xl items-center gap-8 px-4 md:grid lg:px-6"
    >
      <img
        src="../assets/images/pine-cone.png"
        class="absolute left-[-13%] top-[-3%] rotate-12 scale-[0.2]"
      />
      <div class="mt-8 md:mt-4">
        <div class="my-32 text-licorice">
          <h2
            class="mb-4 text-center text-xl font-extrabold tracking-tight text-licorice md:text-5xl"
          >
            {{ data.heading }}
          </h2>
          <p class="text-center font-light md:mb-6 md:text-xl">
            {{ data.description }}
          </p>
        </div>

        <div class="my-10 flex flex-col">
          <div
            v-for="element in stack"
            :key="element._id"
            :data="element"
            class="mb-10 rounded-3xl bg-green-accent p-6 md:px-14 md:py-10"
          >
            <div class="flex items-center justify-between">
              <div
                :class="element.image_position === 'Right' ? 'order-last' : ''"
                class="mask2 basis-1/4 transition-all duration-200 hover:scale-105 hover:transition-all"
              >
                <img
                  :src="element.image[0]?.url"
                  class="object-cover"
                />
              </div>

              <div
                :class="element.image_position === 'Right' ? 'mr-10' : 'ml-10'"
                class="flex min-h-[150px] max-w-[1070px] flex-col text-green-dark"
              >
                <h3 class="mb-4 text-3xl">{{ element.title }}</h3>
                <div class="text-lg leading-8">{{ element.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.mask2 {
  -webkit-mask-image: url('../assets/images/mask-image.svg');
  mask-image: url('../assets/images/mask-image.svg');
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
</style>
