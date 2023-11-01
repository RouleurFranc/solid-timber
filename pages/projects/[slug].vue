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

console.log(projectContent)
</script>
<template>
  <section class="relative bg-beige">
    <div class="mx-auto max-w-screen-xl items-center px-8 py-10">
      <div v-if="error">{{ error }}</div>
      <div v-else-if="project">
        <h1 class="text-center text-3xl text-licorice md:text-4xl">
          {{ project.title }}
        </h1>
        <img class="w-full object-cover max-h-144" :src="project.image.url"/>
        <p v-for="content in projectContent">
          <div :key="content._id" v-html="content.html" />
        </p>
      </div>
      <p v-if="!project">Er zijn op dit moment geen actuele projecten.</p>
    </div>
  </section>
</template>
