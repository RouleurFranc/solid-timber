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
    <section class="relative bg-beige">
      <div v-if="error">{{ error }}</div>
      <div
        v-else-if="project"
        class="relative"
      >
        <div class="bg-green-accent">
          <div
            class="mx-auto max-w-screen-xl px-8 text-right xl:-mb-16 xl:pt-12"
          ></div>
          <div
            class="relative mx-auto flex max-w-screen-xl flex-col items-center px-6 pb-6 pt-4 md:flex-row md:px-8 md:pb-16 md:pt-10"
          >
            <NuxtImg
              class="block basis-1/2 rounded-t-xl object-cover md:rounded-l-xl md:rounded-tr-none lg:min-h-[500px] xl:min-h-[600px]"
              :src="project.image.url"
              :alt="project.image.name"
              loading="lazy"
            />
            <div class="mt-8 flex w-full flex-col md:ml-8">
              <button
                class="absolute right-8 top-10 justify-start self-start rounded-full bg-green-light px-8 py-2 text-white transition-all hover:scale-105 hover:bg-green-dark hover:transition-all"
                @click="router.back()"
              >
                Terug
              </button>
              <h1
                class="mt-8 border-b border-solid border-b-green-dark pb-12 text-center text-3xl text-green-dark md:text-5xl"
              >
                {{ project.title }}
              </h1>
              <div
                v-for="detail in projectDetails"
                :key="detail._id"
                class="details pt-8 text-white"
                v-html="detail.html"
              ></div>
              <div
                class="p-8 text-green-dark text-center text-lg"
                v-html="project.intro"
              ></div>
            </div>
          </div>
        </div>

        <div
          v-if="imageSlider"
          class="bg-green-dark px-8 py-16 text-white"
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
                class="carousel__item w-full object-cover"
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
        <div class="bg-beige">
          <div class="mx-auto max-w-screen-xl items-center">
            <div class="mb-6 bg-beige px-8 py-10 md:py-16">
              <div
                v-for="content in projectContent"
                :key="content._id"
              >
                <div v-html="content.html"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-if="!project">Er zijn op dit moment geen actuele projecten.</p>
    </section>
  </div>
</template>

<style>
.details ul {
  @apply flex flex-col md:flex-row justify-center items-center md:justify-around;
}

.details li {
  @apply border-2 border-green-dark font-medium text-green-dark mb-2 md:mb-6 py-2 px-4 inline-block text-center min-w-[180px] md:min-w-0;
}

.details li {
  opacity: 0;
  animation: fadeIn 0.5s ease-in both;
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.carousel__icon {
  @apply text-green-dark bg-white min-w-[36px] transition-all;
}

.carousel__icon:hover {
  @apply text-white bg-green-dark transition-all;
}

.carousel__pagination-button:after {
  @apply bg-green-light;
}

.carousel__pagination-button--active:after {
  @apply bg-beige;
}

.carousel__pagination-button:after:hover {
  @apply bg-beige;
}
</style>
