<script setup lang="ts">
const props = defineProps<{
  contactButton: boolean
}>()

const showContactButton = computed(() => props.contactButton)
</script>
<template>
  <div>
    <div class="mb-2 text-xl md:text-2xl">E-mail</div>
    <a
      href="mailto:info@solidtimber.nl"
      class="text-lg font-light hover:text-brown-dark"
    >
      info@solidtimber.nl
    </a>
    <div class="mb-2 mt-4 text-xl md:mt-10 md:text-2xl">Telefoon</div>
    <a
      href="tel:+310307851767"
      class="text-lg font-light hover:text-brown-dark"
    >
      +31 (0)30 785 17 67
    </a>
    <div class="mb-2 mt-4 text-xl md:mt-10 md:text-2xl">Social</div>
    <div class="flex items-center justify-start">
      <NuxtLink
        to="https://www.youtube.com/channel/UCszF6lIuqipHaG-UkSutYhA"
        title="Solid Timber Youtube"
        aria-label="Solid Timber Youtube"
        class="mr-4 group-hover:opacity-80"
      >
        <Icon
          name="mdi:youtube"
          class="transition-all hover:text-[#ff0000] hover:transition-all"
          size="50"
        />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/company/solid-timber-bv"
        aria-label="Solid Timber Linkedin"
        title="Solid Timber Linkedin"
        class="mr-4 group-hover:opacity-80"
      >
        <Icon
          name="mdi:linkedin"
          class="transition-all hover:text-[#0e76a8] hover:transition-all"
          size="40"
        />
      </NuxtLink>
      <!-- <NuxtLink
        to="https://twitter.com/solidtimbernl"
        aria-label="Solid Timber twitter"
        title="Solid Timber twitter"
        class="mr-4 group-hover:opacity-80"
      >
        <Icon
          name="pajamas:twitter"
          class="text-white transition-all hover:opacity-80 hover:transition-all"
          size="30"
        />
      </NuxtLink> -->
    </div>
    <a
      :class="showContactButton ? 'block' : 'hidden'"
      href="/contact"
      title="Neem contact met ons op"
      class="mt-6 inline-flex max-w-[200px] items-center justify-center rounded-3xl bg-pink px-10 py-4 text-center font-semibold text-licorice hover:bg-pink-light focus:outline-none focus:ring-4 focus:ring-pink-light md:mt-10"
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
</template>
