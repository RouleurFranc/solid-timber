  <!-- Add a script to fetch the data -->
  <script setup>

  import { computed } from "vue";
  
  // Pass the data as props to the page
  const props = defineProps(["data"]);
  const data = computed(() => props.data);
  
  </script>
  <template>
        <section class="bg-beige relative">
          <div
            class="items-center relative max-w-screen-xl gap-8 px-4 py-8 mx-auto  md:grid sm:py-16 lg:px-6"
          >
            <div class="mt-8 md:mt-4">
              <h2
                class="mb-4 text-xl font-extrabold tracking-tight text-center text-gray-900 md:text-4xl"
              >
              {{ data.heading }}
              </h2>
              <p
                class="font-light text-center text-gray-500  md:mb-6 md:text-lg"
              >
              {{ data.description }}
              </p>

              <div></div>
            </div>
          </div>
        </section>
    </template>