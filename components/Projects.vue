<script setup lang="ts">
const props = defineProps<{
  data: any
  homeProjects: any
  background: string
  amount: number
  isHome: boolean
}>()

const data = computed(() => props.data)
const background = computed(() => props.background)
const homeProjects = computed(() => props.homeProjects)
const projectAmount = props.amount
const projects = homeProjects.value
</script>

<template>
  <section
    :class="background ? `bg-${background}` : `bg-green-light`"
    class="relative"
  >
    <div
      :class="
        isHome
          ? `px-8 py-16 md:py-20 lg:py-24 xl:py-32`
          : `p-8 md:px-8 md:py-12`
      "
      class="relative mx-auto max-w-screen-xl items-center"
    >
      <h2
        v-if="data.heading"
        class="mb-10 text-center text-4xl font-light text-beige md:text-5xl"
      >
        {{ data.heading }}
      </h2>
      <h2 v-if="data.title">
        {{ data.title }}
      </h2>
      <div v-if="projects">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <NuxtLink
            v-for="project in projects.slice(0, projectAmount)"
            :key="project._id"
            :title="project.title"
            :to="`projects/${project._slug}`"
            class="flex flex-col rounded-xl bg-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:transition-all hover:duration-500"
          >
            <NuxtImg
              class="rounded-t-xl"
              :src="project.image?.url"
              :alt="project.image?.name"
              sizes="100vw md:50vw lg:430px"
              loading="lazy"
            />
            <div
              class="flex items-center justify-between px-4 pb-4 pt-6 md:px-8"
            >
              <div class="flex flex-col">
                <small class="text-[#334155]">{{ project.tag }}</small>
                <h3 class="text-2xl">{{ project.title }}</h3>
              </div>
              <div
                class="inline-flex items-center rounded-full bg-coral p-2 text-center font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-coral-dark hover:transition-all focus:outline-none focus:ring-4 focus:ring-coral-dark"
              >
                <svg
                  aria-hidden="true"
                  class="h-5 w-5"
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
          </NuxtLink>
        </div>
        <NuxtLink
          :class="isHome ? `flex` : `hidden`"
          class="mx-auto mt-10 max-w-[300px] items-center justify-center rounded-full bg-coral p-4 text-center text-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-coral-dark hover:transition-all focus:outline-none focus:ring-4 focus:ring-coral-dark md:py-6"
          to="/projects"
          title="Al onze projecten"
          >Al onze projecten
          <svg
            aria-hidden="true"
            class="ml-4 h-5 w-5"
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
  </section>
</template>
