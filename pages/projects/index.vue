<script setup lang="ts">
import GET_PROJECTS from '../getProjects.graphql'

const { data, error } = await useAsyncQuery(GET_PROJECTS, {})
const projects = data?.value?.Projects.items
const seoSlug = 'projects'
const projectsContent = data?.value?.Page?.content
</script>
<template>
  <section class="relative bg-beige">
    <Metadata :seo-slug="seoSlug"></Metadata>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="projects && projects.length">
      <div
        class="mx-auto max-w-screen-xl items-center px-8 pt-10 text-center md:pt-16"
      >
        <h1 class="text-3xl text-green-dark md:text-4xl">Projecten</h1>
        <p class="text-lg">
          <strong>We build</strong> a new generation of timber buildings
        </p>
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
      <div
        v-for="content in projectsContent"
        :key="content._id"
        class="mx-auto mb-20 mt-12 max-w-screen-lg items-center border-y border-y-green-dark px-8 py-10 text-center text-lg leading-8 text-green-dark"
      >
        <div v-html="content.html"></div>
      </div>
      <Usps />
    </div>
  </section>
</template>
