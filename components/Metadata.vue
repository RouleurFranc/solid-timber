<script lang="ts" setup>
const props = defineProps<{
  data: any
}>()
const data = computed(() => props.data)
const metadata = data.value
const noIndex = metadata.seo_allow
const socialImage = metadata.seo_social_media_image.url
</script>
<template>
  <Head>
    <Title>{{ metadata.seo_title }} - Solid Timber</Title>
    <Meta
      name="description"
      :content="metadata.seo_description"
    />
    <Meta
      v-if="!noIndex"
      name="robots"
      content="noindex,nofollow"
    />
    <Meta
      v-if="socialImage"
      property="og:image"
      :content="socialImage"
    />
  </Head>
</template>
