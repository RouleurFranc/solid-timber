<template>
  <section class="bg-coral-dark align-bottom">
    <div
      class="relative mx-auto max-w-screen-xl items-center px-4 py-16 md:py-20 lg:px-8 lg:py-24 xl:gap-16 xl:py-32"
    >
      <div class="gap-8 md:grid md:grid-cols-3">
        <div
          class="mr-2 flex flex-col justify-center border-r-2 border-solid border-coral pb-4 pt-10 text-xl text-beige md:text-2xl"
        >
          Tijd voor de duurzame stap <br />
          Kies nu voor houtbouw!
          <a
            href="#"
            class="mt-4 inline-flex max-w-[200px] items-center justify-center rounded-3xl bg-green-light px-10 py-4 text-center text-lg font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-4 focus:ring-coral-dark md:mt-6"
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
          <div class="mt-6 flex items-center justify-start">
            <a
              href="https://www.youtube.com/channel/UCszF6lIuqipHaG-UkSutYhA"
              class="mr-4 group-hover:opacity-80"
            >
              <Icon
                name="mdi:youtube"
                class="transition-all hover:opacity-80 hover:transition-all"
                size="50"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/solid-timber-bv"
              class="mr-4 group-hover:opacity-80"
            >
              <Icon
                name="mdi:linkedin"
                class="transition-all hover:opacity-80 hover:transition-all"
                size="40"
              />
            </a>
            <a
              href="https://twitter.com/solidtimbernl"
              class="mr-4 group-hover:opacity-80"
            >
              <Icon
                name="pajamas:twitter"
                class="text-white transition-all hover:opacity-80 hover:transition-all"
                size="30"
              />
            </a>
          </div>
        </div>
        <img
          class="m-auto flex max-h-[200px] items-center justify-center"
          src="../assets/images/solidtimber-wit.png"
        />
        <div
          class="flex flex-col border-l-2 border-coral p-10 text-right text-xl text-beige"
        >
          <NuxtLink
            class="mb-6 underline transition-all duration-500 hover:mr-4 hover:no-underline hover:transition-all hover:duration-500"
            >Videos</NuxtLink
          >
          <NuxtLink
            class="mb-6 underline transition-all duration-500 hover:mr-4 hover:no-underline hover:transition-all hover:duration-500"
            >Projects</NuxtLink
          >
          <NuxtLink
            class="mb-6 underline transition-all duration-500 hover:mr-4 hover:no-underline hover:transition-all hover:duration-500"
            >Partners</NuxtLink
          >
          <NuxtLink
            class="mb-6 underline transition-all duration-500 hover:mr-4 hover:no-underline hover:transition-all hover:duration-500"
            >Contact</NuxtLink
          >
          <NuxtLink
            class="mb-6 underline transition-all duration-500 hover:mr-4 hover:no-underline hover:transition-all hover:duration-500"
            >Sitemap</NuxtLink
          >
        </div>
      </div>
    </div>
    <div
      class="m-auto my-10 flex max-w-screen-lg items-center justify-between text-beige"
    >
      <div class="text-4xl">Solid Timber</div>
      <div class="ml-4 text-4xl text-green-light">x</div>
      <img
        class="flex max-w-[200px] items-center justify-center"
        src="../assets/images/Element-logo-wit-300x82.png"
      />
      <img
        class="flex max-w-[160px] items-center justify-center"
        src="../assets/images/wilen-trahus-logo-wit-300x121.png"
      />
    </div>
    <div class="m-auto flex h-6 w-10 items-center justify-center text-beige">
      <Icon
        size="14"
        name="mdi:pine-tree-variant"
        class="tree"
      />
      <Icon
        size="18"
        name="mdi:pine-tree-variant"
        class="tree"
      />
      <Icon
        size="14"
        name="mdi:pine-tree-variant"
        class="tree"
      />
    </div>
  </section>
</template>
