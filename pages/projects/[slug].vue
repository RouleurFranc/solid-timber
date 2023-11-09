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

definePageMeta({
  layout: 'project',
})
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
        class="relative bg-green-accent"
      >
        <div
          class="flex flex-col items-center px-6 pb-6 pt-4 md:flex-row md:px-8 md:pb-16 md:pt-10"
        >
          <img
            class="block basis-1/2 rounded-t-xl object-cover md:rounded-l-xl lg:min-h-[500px]"
            :src="project.image.url"
          />
          <div class="mt-8 w-full md:ml-8">
            <h1
              class="border-b border-solid border-b-green-dark pb-12 text-center text-3xl text-green-dark md:text-5xl"
            >
              {{ project.title }}
            </h1>
            <div
              v-for="detail in projectDetails"
              :key="detail._id"
              class="details pt-8 text-white"
              v-html="detail.html"
            ></div>
          </div>
        </div>

        <div
          class="mx-auto max-w-screen-xl items-center bg-beige px-8 py-10 md:p-16"
        >
          <div
            v-for="content in projectContent"
            :key="content._id"
          >
            <div v-html="content.html"></div>
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
  @apply bg-green-light mb-2 md:mb-6 py-2 px-4 inline-block rounded-full text-center min-w-[180px] md:min-w-0;
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
</style>
