<script lang="ts" setup>
import { GetUsps } from '@/queries/getUsps'

const { data } = await useAsyncQuery(GetUsps)
const uspItems = data?.value?.Usps?.items
</script>
<template>
  <section class="bg-beige-light">
    <div
      class="relative mx-auto max-w-screen-xl items-center p-8 md:py-20 lg:px-12 xl:px-24 xxl:gap-16"
    >
      <div
        class="grid grid-cols-2 items-center justify-between gap-8 md:flex"
      ></div>
      <ul
        v-if="uspItems"
        class="grid grid-cols-2 items-start pt-4 font-medium md:flex md:justify-between md:pt-0"
      >
        <li
          v-for="uspItem in uspItems"
          :key="uspItem._id"
          class="mb-8 flex flex-col items-center justify-center text-center hover:text-green-dark"
        >
          <Icon
            v-if="uspItem.icon"
            :name="uspItem.icon"
            class="text-green-light transition-all hover:transition-all"
            size="40"
          />
          <div
            v-if="uspItem.text"
            class="mt-4 text-green-dark md:text-xl lg:text-2xl"
          >
            {{ uspItem.text }}
          </div>
        </li>
      </ul>
      <div class="my-4 flex flex-col text-center md:my-10">
        <h4 class="text-3xl text-green-light md:text-4xl">
          Ambitie in houtbouw?
        </h4>
        <div class="mb-6 mt-2 md:text-xl">
          Neem dan contact met ons op! Dan kijken we mee naar de kansen in uw
          bouwproject.
        </div>
        <a
          href="/contact"
          class="mx-auto inline-flex max-w-[200px] items-center justify-center rounded-3xl bg-pink px-10 py-4 text-center font-medium text-white hover:bg-pink-light focus:outline-none focus:ring-4 focus:ring-pink-light"
        >
          Contact
          <svg
            aria-hidden="true"
            class="-mr-1 ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
