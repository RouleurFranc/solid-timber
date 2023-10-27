<script setup>
const props = defineProps(['data'])
const data = computed(() => props.data)
</script>

<template>
  <section>
    {{ data.heading }}
    Dit is ee ntest
  </section>
</template>
