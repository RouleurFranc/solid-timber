
<script setup>
  import { computed } from "vue";
  import { reactive } from "vue";
  import { GetPageBySlug } from "@/queries/getPageBySlug";
  import PageHeader from "@/components/PageHeader";
  import ImageAndText from "@/components/ImageAndText";

  const components = [
    { name: "PageHeader", comp: PageHeader },
    { name: "ImageAndText", comp: ImageAndText },
  ];

  const getComponent = (name) => {
    const component = components.find((component) => component.name === name);
    return component ? component.comp : null;
  };

  const { data } = await useAsyncQuery(
    GetPageBySlug,
    {
      slug: "home",
    }
  );

  const page = data.value.Page;
  const stack = computed(() => {
    return page.stack;     
  });
  </script>

<template>
  <Header/>
  <component
    v-if="stack"
    v-for="element in stack"
    :key="element._id"
    :is="getComponent(element.__typename)"
    :data="element"
  ></component>
  <Footer/>
</template>
