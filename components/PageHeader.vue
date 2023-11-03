<script setup>
const props = defineProps(['data'])
const data = computed(() => props.data)
</script>
<template>
  <section class="relative flex items-center justify-center bg-green-dark">
    <div
      class="flex flex-col items-center justify-between pt-4 md:flex-row md:pt-10"
    >
      <div class="mask1 mx-auto md:mr-8 md:basis-1/2">
        <img
          class="max-h-[360px] md:max-h-[750px]"
          :src="data.image[0]?.url"
          alt="dashboard image"
        />
      </div>
      <div class="mt-[-20px] max-w-[700px] px-8 pb-10 md:basis-1/2 md:p-0">
        <h1 class="mb-4 text-3xl font-light text-white md:text-5xl lg:text-7xl">
          {{ data.heading }}
        </h1>
        <p
          class="mb-8 text-base font-light leading-10 text-white md:text-lg lg:text-xl"
        >
          {{ data.text }}
        </p>
        <a
          href="#"
          class="inline-flex items-center rounded-3xl bg-coral px-10 py-4 text-center font-medium text-white hover:bg-coral-dark focus:outline-none focus:ring-4 focus:ring-coral-dark"
        >
          {{ data.cta_label }}
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
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.mask1 {
  -webkit-mask-image: url('../assets/images/mask-image.svg');
  mask-image: url('../assets/images/mask-image.svg');
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

@media (min-width: 768px) {
  .mask1 {
    -webkit-mask-size: 90%;
    mask-size: 90%;
  }
}
</style>
