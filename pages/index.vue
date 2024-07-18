<script setup>
import { GetPageBySlug } from '@/queries/getPageBySlug'
import CallToAction from '@/components/CallToAction.vue'
import Projects from '@/components/Projects.vue'
import Usps from '@/components/Usps.vue'
import PageHeader from '@/components/PageHeader'
import ImageAndText from '@/components/ImageAndText'
import ImageCollection from '@/components/ImageCollection'

const components = [
  { name: 'PageHeader', comp: PageHeader },
  { name: 'ImageAndText', comp: ImageAndText },
  { name: 'CallToAction', comp: CallToAction },
  { name: 'ProjectCollection', comp: Projects },
  { name: 'Usps', comp: Usps },
  { name: 'ImageCollection', comp: ImageCollection },
]

const getComponent = (name) => {
  // eslint-disable-next-line no-shadow
  const component = components.find((component) => component.name === name)
  return component ? component.comp : null
}

const { data } = await useAsyncQuery(GetPageBySlug, {
  slug: 'home',
})

const page = data?.value?.Page
const stack = computed(() => page?.stack)
const { projects } = stack.value[2]
console.log(projects)
</script>

<template>
  <div>
    <Metadata :seo-slug="page._slug"></Metadata>
    <component
      :is="getComponent(element.__typename)"
      v-for="element in stack"
      :key="element._id"
      :data="element"
      :home-projects="projects"
      :amount="9"
      :is-home="true"
      background="green-light"
      :image-small="false"
    ></component>
    <Usps />
  </div>
</template>
