  <!-- Add a script to fetch the data -->
  <script setup>
  import { computed } from "vue";
  const props = defineProps(["data"]);
  const data = computed(() => props.data);
  const stack = data?.value?.stack
  </script>
  <template>
    <section class="bg-beige relative">
      <div
        class="items-center relative max-w-screen-xl gap-8 px-4 mx-auto md:grid lg:px-6"
      >
      <img src="../assets/images/pine-cone.png" class="absolute left-[-13%] top-[-3%] rotate-12 scale-[0.2]"/>
        <div class="mt-8 md:mt-4">
          <div class="my-32 text-licorice">

            <h2
            class="mb-4 text-xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl"
          >
          {{ data.heading }}
          </h2>
          <p
            class="font-light text-center text-gray-500 md:mb-6 md:text-xl"
          >
          {{ data.description }}
          </p>
          </div>

          <div class="flex flex-col my-10">
            <div
              v-for="element in stack"
              :key="element._id"
              :data="element"
              class="mb-10 p-6 md:py-10 md:px-14 bg-green-accent rounded-3xl"
              >
              <div class="flex justify-between items-center">
                <div :class="element.image_position === 'Right' ? 'order-last' : ''" class="mask2 basis-1/4 hover:scale-105 transition-all hover:transition-all duration-200">
                  <img :src="element.image[0]?.url" class="object-cover">
                </div>
                
                <div :class="element.image_position === 'Right' ? 'mr-10' : 'ml-10'" class="flex flex-col text-green-dark min-h-[150px] max-w-[1070px]">
                  <h3 class="text-3xl mb-4">{{  element.title }}</h3>
                  <div class="text-lg leading-8">{{ element.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>
</template>
<style>
  .mask2 {
    -webkit-mask-image: url('../assets/images/mask-image.svg');
    mask-image: url('../assets/images/mask-image.svg');
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;    
  }
</style>