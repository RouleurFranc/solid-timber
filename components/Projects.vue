<script setup>
  import { computed } from "vue";

  const props = defineProps(["data"]);
  const data = computed(() => props.data);
  const hasImage = computed(() => "image" in props.data);
  console.log('test')
</script>

<template>
    <section>
        {{ data.heading }}
        Dit is ee ntest
    </section>
</template>