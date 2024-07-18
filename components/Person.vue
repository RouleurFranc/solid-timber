<script setup lang="ts">
const props = defineProps<{
  data: any
  isAboutUs: boolean
  background: string
}>()

const data = computed(() => props.data)
const persons = data?.value
</script>
<template>
  <div
    :class="background ? `bg-${background}` : 'bg-beige-light'"
    class="grid grid-cols-2 justify-between gap-4 md:gap-8 md:py-8"
  >
    <div
      v-for="person in persons"
      :key="person._id"
      class="mx-auto flex w-full max-w-screen-xl flex-col rounded-2xl bg-green-light p-8 text-center text-white md:p-12"
    >
      <NuxtImg
        :src="person.profile_pic[0].url"
        :alt="person.profile_pic[0].name"
        class="mb-8"
      />
      <h3 class="m-0">{{ person.full_name }}</h3>
      <h5>CEO</h5>
      <NuxtLink
        :to="person.url"
        :title="`LinkedIn profiel ${person.full_name}`"
        class="mt-2 flex flex-row items-center justify-center text-lg font-semibold text-brown-dark transition-all hover:cursor-pointer hover:text-brown hover:transition-all"
      >
        <Icon
          name="mdi:linkedin"
          class="mr-1"
          size="20"
        />
        LinkedIn
      </NuxtLink>
    </div>
  </div>
</template>
