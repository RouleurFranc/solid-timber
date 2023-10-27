<script setup>
import { GetPageBySlug } from '@/queries/get-page-by-slug'

// Import the components
import CallToAction from '@/components/CallToAction.vue'
import Projects from '@/components/Projects.vue'
import PageHeader from '@/components/PageHeader'
import ImageAndText from '@/components/ImageAndText'

// Set up the components
const components = [
  { name: 'PageHeader', comp: PageHeader },
  { name: 'ImageAndText', comp: ImageAndText },
  { name: 'CallToAction', comp: CallToAction },
  { name: 'Projects', comp: Projects },
]

// Assign the components for the stack loop above
const getComponent = (name) => {
  const component = components.find((component) => component.name === name)
  return component ? component.comp : null
}

const { data } = await useAsyncQuery(GetPageBySlug, {
  slug: 'home',
})

const page = data?.value?.Page
const stack = computed(() => page?.stack)
</script>

<template>
  <Header />
  <!--Loop through elements in the queried stack and set the data variable to the components you want -->
  <component
    :is="getComponent(element.__typename)"
    v-for="element in stack"
    :key="element._id"
    :data="element"
  ></component>
  <Footer />
</template>
