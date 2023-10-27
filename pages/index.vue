
  <script setup>
    import { computed } from "vue";
    import { reactive } from "vue";
    import { GetPageBySlug } from "@/queries/get-page-by-slug";
  
    // Import the components
    import PageHeader from "@/components/PageHeader";
    import ImageAndText from "@/components/ImageAndText";
    import CallToAction from "@/components/CallToAction.vue";
  
    // Set up the components
    const components = [
      { name: "PageHeader", comp: PageHeader },
      { name: "ImageAndText", comp: ImageAndText },
      { name: "CallToAction", comp: CallToAction} , 
    ];
  
    // Assign the components for the stack loop above
    const getComponent = (name) => {
      const component = components.find((component) => component.name === name);
      return component ? component.comp : null;
    };
  
    const { data, error } = await useAsyncQuery(
      GetPageBySlug,
      {
        slug: "home",
      }
    );

    const page = data?.value?.Page;
    const stack = computed(() => {
      return page?.stack;
    });
    </script>

<template>
  <Header />
  <!--Loop through elements in the queried stack and set the data variable to the components you want -->
    <component
      v-if="stack"
      v-for="element in stack"
      :key="element._id"
      :is="getComponent(element.__typename)"
      :data="element"
    ></component>
  <Footer/> 
</template>
  