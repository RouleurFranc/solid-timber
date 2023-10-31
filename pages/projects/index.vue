<script setup lang="ts">
import GET_PROJECTS from '../getProjects.graphql'

const { data, error } = await useAsyncQuery(GET_PROJECTS, {})
const projects = data?.value?.Projects.items
</script>
<template>
  <section class="relative bg-beige">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="projects && projects.length">
      <div class="mx-auto max-w-screen-xl items-center px-8 pt-10">
        <h1 class="text-3xl md:text-4xl">Projecten</h1>
        <p>Bij Solid Timber zijn we trots op onderstaande projecten!</p>
      </div>
      <p v-if="!projects || !projects.length">
        Er zijn op dit moment geen actuele projecten.
      </p>
      <Projects
        background="beige"
        :data="projects"
        :home-projects="projects"
        :amount="99"
        :is-home="false"
      />
    </div>
  </section>
</template>
