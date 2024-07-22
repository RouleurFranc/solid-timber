<!-- Add a script to fetch the data -->
<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
const stack = props.data?.stack
const ctaContent = props.data.content
</script>
<template>
  <section class="relative bg-beige-light">
    <div
      class="relative mx-auto max-w-screen-xl items-center gap-8 px-8 py-10 md:grid md:py-20 lg:px-8 lg:pt-24 lg:pb-10"
    >
      <div class="md:mt-4">
        <div class="mb-10 text-licorice md:mb-20">
          <img
            src="../assets/images/solidtimber-groen.png"
            class="mx-auto mb-8 w-32 lg:float-left lg:mx-0 lg:mb-0"
            sizes="100vw sm:50vw md:200px"
            alt="Solid Timber beeldmerk groen"
          />
          <h2
            class="mb-4 text-center text-2xl font-normal tracking-tight text-green md:text-5xl"
          >
            {{ data.heading }}
          </h2>
          <p class="text-center font-light text-green md:mb-6 md:text-2xl">
            {{ data.description }}
          </p>
          <div
            v-for="content in ctaContent"
            :key="content._id"
            class="m-auto max-w-screen-md"
          >
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="text-center"
              v-html="content.body"
            ></div>
            <!-- eslint-enable -->
          </div>
        </div>

        <div class="mt-10 flex flex-col lg:flex-row justify-between shrink-0">
          <div
            v-for="element in stack"
            :key="element._id"
            class="mb-8 mr-10 rounded-3xl max-w-[400px] bg-green-dark text-beige"
          >
            <div class="flex flex-col items-center justify-between">
              <NuxtImg
                :src="element.image[0]?.url"
                sizes="100vw sm:50vw md:900px"
                :class="
                  element.image_position === 'Right' ? 'md:order-first' : ''
                "
                class="mb-10 object-cover w-full rounded-t-xl transition-all duration-200 hover:scale-95 hover:transition-all"
                :alt="element.image[0].name"
                loading="lazy"
              />

              <div
                :class="
                  element.image_position === 'Right' ? 'md:mb-10' : 'md:mb-10'
                "
                class="mt-6 flex min-h-[150px] max-w-[1070px] flex-col md:mt-0 pt-0 px-8 pb-8 md:px-14"
              >
                <h4 class="mb-4 text-3xl">{{ element.title }}</h4>
                <div class="leading-8">{{ element.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
h3 {
  @apply mt-10 text-green-dark font-semibold;
}
</style>
