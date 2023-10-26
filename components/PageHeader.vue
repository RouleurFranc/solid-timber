<script setup>
  import { computed } from "vue";

  const props = defineProps(["data"]);
  const data = computed(() => props.data);
  const hasImage = computed(() => "image" in props.data);
</script>
<template>
    <section class="relative flex bg-green-dark items-center justify-center">
    <div class="flex items-center justify-between">
      <div class="mask1 mx-auto md:basis-1/2 mr-8">
      <img
      class="max-h-[660px]"
          :src="data.image[0]?.url"
        alt="dashboard image"
      />
      </div>  
      <div class="max-w-[700px] mt-[-20px] container md:px-0 md:basis-1/2">
        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            {{ data.heading }}
        </h1>
        <p class="mb-8 text-base font-normal text-white md:text-lg lg:text-xl">
          {{ data.text }}
        </p>
        <a href="#" class="inline-flex items-center px-10 py-4 text-md font-medium rounded-3xl text-center text-white bg-coral hover:bg-coral-dark focus:ring-4 focus:outline-none focus:ring-coral-dark">
             {{ data.cta_label }}
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
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
  -webkit-mask-size: 90%;
  mask-size: 90%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;    
}
</style>