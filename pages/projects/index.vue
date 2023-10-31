<script setup lang="ts">
import GET_PROJECTS from '../getProjects.graphql'

const { data, error } = await useAsyncQuery(GET_PROJECTS, {})
const projects = data?.value?.Projects.items
</script>
<template>
  <section class="relative bg-beige">
    <h1 class="text-3xl md:text-4xl">Projecten</h1>
    <div class="relative mx-auto max-w-screen-xl px-4 py-16 md:py-20 lg:px-6">
      <div v-if="error">{{ error }}</div>
      <div v-else-if="projects && projects.length">
        <p>Bij Solid Timber zijn we trots op onderstaande projecten!</p>
        <p v-if="!projects || !projects.length">
          Er zijn op dit moment geen actuele projecten.
        </p>
        <Projects
          background="beige"
          :data="projects"
          :home-projects="projects"
          :amount="99"
        />
      </div>
    </div>
  </section>
</template>
