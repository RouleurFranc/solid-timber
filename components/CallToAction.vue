<!-- Add a script to fetch the data -->
<script setup>
const props = defineProps(['data'])
const data = computed(() => props.data)
const stack = data?.value?.stack
const ctaContent = data.value.content
console.log(ctaContent)
</script>
<template>
  <section class="relative bg-beige-light">
    <div
      class="relative mx-auto max-w-screen-xl items-center gap-8 px-8 py-10 md:grid md:py-20 lg:px-8 lg:py-24 xl:py-32"
    >
      <img
        src="../assets/images/solidtimber-groen.png"
        class="absolute left-[-13%] top-[-3%] hidden scale-[0.4] md:block"
        alt="Solid Timber beeldmerk groen"
      />
      <div class="md:mt-4">
        <div class="mb-10 text-licorice md:mb-20">
          <h2
            class="mb-4 text-center text-xl font-normal tracking-tight text-licorice md:text-5xl"
          >
            {{ data.heading }}
          </h2>
          <p class="text-center font-light md:mb-6 md:text-xl">
            {{ data.description }}
          </p>
          <div class="max-w-screen-md m-auto"
            v-for="content in ctaContent"
            :key="content._id"
          >
            <div class="text-center" v-html="content.body"></div>
          </div>
        </div>

        <div class="mt-10 flex flex-col">
          <div
            v-for="element in stack"
            :key="element._id"
            class="mb-8 rounded-3xl bg-green-accent p-8 md:mb-12 md:px-14 md:py-12"
          >
            <div class="flex flex-col items-center justify-between md:flex-row">
              <div
                :class="
                  element.image_position === 'Right' ? 'md:order-last' : ''
                "
                class="mask2 transition-all duration-200 hover:scale-105 hover:transition-all md:basis-1/4"
              >
                <img
                  :src="element.image[0]?.url"
                  class="object-cover"
                />
              </div>

              <div
                :class="
                  element.image_position === 'Right' ? 'md:mr-10' : 'md:ml-10'
                "
                class="mt-6 flex min-h-[150px] max-w-[1070px] flex-col text-green-dark md:mt-0"
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

h4 {
  @apply mt-10 text-green-dark font-semibold
}
</style>
