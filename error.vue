<script setup>
const error = useError()
const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <div class="bg-beige p-4 md:p-8">
    <div v-if="error.statusCode === '404'">
      <h1 class="mb-4 text-3xl md:text-4xl">{{ error.statusCode }}</h1>
      <p>Oeps de pagina die je zoekt bestaat helaas niet.</p>
    </div>
    <div v-else>
      <h1 class="mb-4 text-2xl">{{ error.statusCode }}</h1>
      <p>Oeps er lijkt iets fout te zijn gegaan.</p>
    </div>
    <div>
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <div
        class="mx-auto mt-10 flex max-w-[400px] cursor-pointer items-center justify-center rounded-full bg-brown p-4 text-center font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-brown-dark hover:transition-all focus:outline-none focus:ring-4 focus:ring-brown-dark"
        @click="handleError"
      >
        Naar de homepage
        <svg
          aria-hidden="true"
          class="ml-4 size-5"
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
      </div>
    </div>
  </div>
</template>
