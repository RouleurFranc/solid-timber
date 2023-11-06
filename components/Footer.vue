<template>
  <footer class="z-0 bg-gradient-to-b from-coral to-coral-dark align-bottom">
    <div
      class="relative mx-auto max-w-screen-xl items-center p-8 md:py-20 lg:pb-20 lg:pt-24 xl:gap-16"
    >
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          class="mr-2 flex flex-col items-center justify-center pb-4 pt-10 text-xl text-beige md:border-r-4 md:border-solid md:border-coral md:text-2xl"
        >
          Tijd voor de duurzame stap <br />
          Kies nu voor houtbouw!
          <a
            href="#"
            class="mt-4 inline-flex max-w-[200px] items-center justify-center rounded-3xl bg-green-light px-10 py-4 text-center text-lg font-medium text-beige-light hover:bg-green-dark focus:outline-none focus:ring-4 focus:ring-coral-dark md:mt-6"
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
          alt="Solid Timber logo wit"
        />
        <div
          class="flex flex-col pt-6 text-center text-xl text-beige md:border-l-4 md:border-coral md:p-10"
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
      class="mx-auto my-6 flex flex-col items-center justify-between text-beige-light md:my-10 md:max-w-[680px] md:flex-row"
    >
      <div class="text-3xl md:text-4xl">Solid Timber</div>
      <div class="xclass text-4xl font-extralight text-green-light">x</div>
      <img
        class="mb-4 flex max-w-[120px] items-center justify-center md:m-0 md:max-w-[200px]"
        src="../assets/images/Element-logo-wit-300x82.png"
        alt="Element logo wit"
      />
      <img
        class="flex max-w-[80px] items-center justify-center md:max-w-[160px]"
        src="../assets/images/wilen-trahus-logo-wit-300x121.png"
        alt="Wilen Trahus logo wit"
      />
    </div>
    <div
      class="mx-auto mt-12 flex flex-col items-center justify-center text-beige-light md:mt-16"
    >
      <div class="text-[10px] md:text-sm">
        © Copyright 2023 | Solid Timber BV | KvK: 75331020
      </div>
      <div class="mt-4 flex h-6 w-10 items-center justify-center">
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
    </div>
  </footer>
</template>

<style>
.xclass {
  animation: color-change 10s infinite;
}

@keyframes color-change {
  0% {
    color: rgb(244 238 224);
  }
  25% {
    color: rgb(0 102 94);
  }
  50% {
    color: rgb(0 62 57);
  }
  75% {
    color: rgb(0 102 94);
  }
  100% {
    color: rgb(244 238 224);
  }
}
</style>
