<!-- Add a script to fetch the data -->
<script setup>
const props = defineProps(['data'])
const data = computed(() => props.data)
</script>
<template>
  <section class="relative bg-beige">
    <div class="p-8 md:py-20 lg:py-24">
      <h2
        class="mb-4 text-center text-2xl text-green-dark md:mb-10 md:text-6xl"
      >
        {{ data.title }}
      </h2>
      <div
        class="relative mx-auto max-w-screen-xl items-center gap-8 md:grid md:grid-cols-1 xl:gap-16"
      >
        <img
          :class="data.image_position === 'Right' ? 'order-last' : ''"
          class="absolute right-0 top-0 h-60 w-auto rounded-xl border-2 border-green-light object-cover shadow-[5px_5px_0px_0px_rgba(0,102,94)] transition-all duration-500 hover:shadow-none hover:transition-all hover:duration-500 md:h-144"
          :src="data.image[0]?.url"
          alt="dashboard image"
        />
        <div
          class="mt-8 max-w-[65%] bg-green-dark p-20 pr-40 text-beige-light md:mt-4"
        >
          <p
            class="text-center font-light !leading-8 md:mb-6 md:text-left md:text-lg lg:text-xl"
          >
            {{ data.text }}
          </p>
          <p
            class="text-center font-light !leading-8 md:mb-6 md:text-left md:text-lg lg:text-xl"
          >
            {{ data.text_center }}
          </p>
          <NuxtLink
            to="process"
            class="inline-flex items-center text-xl font-light underline transition-all duration-500 hover:ml-4 hover:no-underline hover:transition-all hover:duration-500"
            >Lees meer
            <svg
              aria-hidden="true"
              class="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path></svg
          ></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
