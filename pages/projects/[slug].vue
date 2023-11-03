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
</script>
<template>
  <section class="relative bg-beige">
    <div v-if="error">{{ error }}</div>
    <div
      v-else-if="project"
      class="relative bg-green-accent"
    >
      <h1
        class="pt-16 text-center text-3xl text-green-dark md:text-4xl lg:text-5xl"
      >
        {{ project.title }}
      </h1>
      <img
        class="block rounded-2xl px-16 pb-16 pt-10"
        :src="project.image.url"
      />
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
</template>
