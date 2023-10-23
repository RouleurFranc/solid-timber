  <script setup>
    import { computed } from "vue";
    import { reactive } from "vue";
    import { GetPageBySlug } from "@/queries/get-page-by-slug";
  
    // Import the components
    import PageHeader from "@/components/PageHeader";
    import ImageAndText from "@/components/ImageAndText";
  
    // Set up the components
    const components = [
      { name: "PageHeader", comp: PageHeader },
      { name: "ImageAndText", comp: ImageAndText },
    ];
  
    // Assign the components for the stack loop above
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
  
    // Assign the page and stack variables with the queried results
    const page = data.value.Page;
    const stack = computed(() => {
      return page.stack;
    });
    </script>
  
  <template>
    <Header/>
    <component
      v-for="element in stack"
      :key="element._id"
      :is="getComponent(element.__typename)"
      :data="element"
    ></component>
    <Footer/>
  </template>