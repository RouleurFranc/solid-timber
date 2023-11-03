<script lang="ts" setup>
import { GetMetadata } from '@/queries/getMetadata'

const props = defineProps<{
  seoSlug: {}
}>()

const { data } = await useAsyncQuery(GetMetadata, {
  slug: props.seoSlug,
})

const seoData = data?.value?.Page.seo
const noIndex = seoData?.seo_allow
// const socialImage = data?.value?.Page.seo_social_media_image?.url
</script>
<template>
  <Head>
    <Title>{{ seoData.seo_title }} - Solid Timber</Title>
    <Meta
      name="description"
      :content="seoData.seo_description"
    />
    <Meta
      v-if="!noIndex"
      name="robots"
      content="noindex,nofollow"
    />
    <!-- <Meta
      v-if="socialImage"
      property="og:image"
      :content="socialImage"
    /> -->
  </Head>
</template>
