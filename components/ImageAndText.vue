<script setup lang="ts">
const props = defineProps<{
  data: any
}>()

const data = computed(() => props.data)
</script>
<template>
  <section class="relative bg-beige">
    <div class="p-8 md:py-20 lg:py-24 xl:pb-44 xl:pt-36">
      <h2
        class="mb-4 text-center text-4xl text-green-dark md:mb-10 md:text-5xl"
      >
        {{ data.title }}
      </h2>
      <div
        class="relative mx-auto flex max-w-screen-xl flex-col items-center gap-8 md:grid md:grid-cols-1 xl:gap-16"
      >
        <NuxtImg
          :class="data.image_position === 'Right' ? 'md:order-last' : ''"
          class="z-10 h-80 w-auto rounded-xl border-2 border-green-light object-cover shadow-[5px_5px_0px_0px_rgba(0,102,94)] transition-all duration-500 hover:shadow-none hover:transition-all hover:duration-500 md:absolute md:right-0 md:top-0 md:h-144"
          :src="data.image[0]?.url"
          :alt="data.image[0]?.name"
          sizes="100vw sm:50vw md:520px"
        />
        <div
          class="-mt-16 bg-green-dark p-8 pt-16 text-beige-light md:mt-4 md:max-w-[65%] md:p-20 md:pr-32 lg:pr-40"
        >
          <p class="mb-6 text-lg font-light !leading-8 lg:text-xl">
            {{ data.text }}
          </p>
          <p
            class="mb-6 hidden text-lg font-light !leading-8 md:block lg:text-xl"
          >
            {{ data.text_center }}
          </p>
          <NuxtLink
            to="process"
            title="Lees meer"
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
