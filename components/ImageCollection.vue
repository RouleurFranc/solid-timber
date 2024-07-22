<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
  data: any
  isHome: boolean
  background: string
}>()

const data = computed(() => props.data)
const images = data?.value?.images
const showImageFullscreen = ref(false)
const imageRef = ref(null)
const imageSource = ref('')
const imageTitle = ref('')

const showImageModal = (source: string, name: string) => {
  if (showImageFullscreen.value === false) {
    showImageFullscreen.value = true
  }
  if (source) {
    imageSource.value = source
    imageTitle.value = name
  }
}

onClickOutside(imageRef, () => {
  showImageFullscreen.value = false
})
</script>
<template>
  <div
    class="bg-beige-light p-8 md:py-20"
  >
    <div
      class="mx-auto grid w-full max-w-screen-xl auto-rows-[1fr] grid-cols-2 gap-4 md:grid-cols-4 md:gap-8"
    >
      <NuxtImg
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
        :alt="image.name"
        sizes="100vw sm:200 md:320"
        format="webp"
        width="320"
        height="320"
        loading="lazy"
        class="max-h-[100px] cursor-zoom-in items-center rounded-xl object-cover transition-all duration-200 ease-in-out hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out md:max-h-[320px] md:min-h-[320px]"
        @click="showImageModal(image.url, image.name)"
      />

      <div
        :class="showImageFullscreen ? 'block' : 'hidden'"
        class="fixed left-0 top-0 z-20 flex h-screen w-full flex-col overflow-hidden bg-green-dark bg-opacity-90"
      >
        <span
          class="absolute right-8 top-8 text-6xl text-white transition-all hover:scale-105 hover:transition-all"
          @click="showImageFullscreen = false"
          >&times;</span
        >
        <NuxtImg
          v-if="imageSource"
          ref="imageRef"
          :src="imageSource"
          :alt="imageTitle"
          format="webp"
          sizes="100vw sm:200 md:900"
          width="900"
          height="600"
          class="absolute inset-x-0 bottom-16 top-0 m-auto block max-h-[600px] w-4/5 max-w-[900px] object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
