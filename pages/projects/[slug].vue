<script setup lang="ts">
import GET_PROJECT from './getProject.graphql'

const route = useRoute()
const variables = {
  slug: route.params.slug,
}
const { error, data } = await useAsyncQuery(
  GET_PROJECT,
  variables,
  `getProject_${route.params.slug}`,
)
const project = data?.value?.Project
const projectContent = project.content
const projectDetails = project.details
const seoTitle = project.seo.seo_title
const seoDescription = project.seo.seo_description
const imageSlider = project.image_slider

definePageMeta({
  layout: 'project',
})

const router = useRouter()
</script>
<template>
  <div>
    <head>
      <Title>{{ seoTitle }}</Title>
      <Meta
        v-if="seoDescription"
        name="description"
        :content="seoDescription"
      />
    </head>
    <section class="relative bg-beige-light">
      <div v-if="error">{{ error }}</div>
      <div
        v-else-if="project"
        class="relative"
      >
        <div class="bg-green-dark">
          <div
            class="mx-auto max-w-screen-xl px-8 text-right xl:-mb-16 xl:pt-12"
          ></div>
          <div
            class="relative mx-auto flex max-w-screen-xl flex-col items-center px-6 pb-6 pt-4 md:flex-row md:px-8 md:pb-16 md:pt-10 xl:pb-24"
          >
            <NuxtImg
              class="block max-w-[800px] basis-1/2 rounded-xl object-cover md:rounded-l-xl lg:min-h-[500px] xl:min-h-[600px]"
              :src="project.image.url"
              :alt="project.image.name"
              loading="lazy"
            />
            <div class="mt-8 flex w-full flex-col md:ml-8">
              <button
                class="absolute right-8 top-10 justify-start self-start rounded-full bg-green-light px-8 py-2 text-white transition-all hover:scale-105 hover:bg-beige hover:text-black hover:transition-all"
                @click="router.back()"
              >
                Terug
              </button>
              <h1
                class="mt-8 border-b border-solid border-white pb-8 text-center text-3xl text-white md:text-5xl"
              >
                {{ project.title }}
              </h1>
              <!-- eslint-disable vue/no-v-html -->
              <div
                v-for="detail in projectDetails"
                :key="detail._id"
                class="details pt-8 text-white"
                v-html="detail.html"
              />
              <div
                class="py-8 text-center text-white"
                v-html="project.intro"
              ></div>
              <!-- eslint-enable -->
            </div>
          </div>
        </div>
        <div
          class="mx-auto flex max-w-screen-xl items-center justify-center bg-beige-light py-8"
        >
          <img
            src="../../assets/images/solidtimber-groen.png"
            class="mr-12 w-32 lg:float-left lg:mx-0 lg:mb-0 lg:w-48"
            sizes="100vw sm:50vw md:400px"
            alt="Solid Timber beeldmerk groen"
          />
          <div
            v-if="project.attributes"
            class="attributes pt-12 lg:ml-20"
          >
            <h2 class="mb-4 text-3xl text-green-dark">PROJECT PARTNERS</h2>
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="project.attributes" />
            <!-- eslint-enable -->
          </div>
        </div>
        <div
          v-if="imageSlider"
          class="bg-beige-light px-8 pb-12 text-white"
        >
          <Carousel
            :items-to-show="1"
            :wrap-around="true"
            class="mx-auto max-w-[1200px]"
          >
            <Slide
              v-for="(slide, i) in imageSlider"
              :key="slide"
            >
              <NuxtImg
                :src="imageSlider[i].url"
                class="w-full object-cover"
                :alt="imageSlider[i].name"
                sizes="100vw sm:50vw md:700px"
                width="1000"
                height="600"
                loading="lazy"
              />
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
        <div
          class="mx-auto max-w-screen-lg bg-beige-light py-8 leading-8 text-licorice"
        >
          <div
            v-for="content in projectContent"
            :key="content._id"
          >
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="content.html"></div>
            <!-- eslint-enable -->
          </div>
        </div>
      </div>
      <p v-if="!project">Er zijn op dit moment geen actuele projecten.</p>
      <Usps />
    </section>
  </div>
</template>
