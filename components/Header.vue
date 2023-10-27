<script setup>
import { GetMenuItems } from '@/queries/getMenuItems'

const { data } = await useAsyncQuery(GetMenuItems)
const showMenu = ref(false)
const menuItems = data?.value?.MenuItems?.items
</script>
<template>
  <nav class="left-0 top-0 z-20 w-full border-0 bg-green-dark">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-6"
    >
      <a
        href="/"
        class="flex items-center"
      >
        <img
          src="../assets/images/solidtimber-logo.png"
          class="mr-2 h-20"
          alt="Solid Timber Logo"
        />
        <span
          class="self-center whitespace-nowrap text-4xl font-light text-white"
          >Solid Timber</span
        >
      </a>
      <div
        class="flex md:order-2"
        @click="showMenu = !showMenu"
      >
        <button
          :class="showMenu ? 'open' : 'close'"
          type="button"
          class="z-20 inline-flex h-16 w-16 items-center justify-center rounded-full bg-coral p-2 text-sm text-white transition-all hover:scale-110 hover:bg-coral-dark hover:transition-all focus:outline-none"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <div
            class="hamburger text-white"
            :class="showMenu ? 'open' : 'close'"
            viewbox="0 0 60 40"
          >
            <span class="bg-white"></span>
            <span class="bg-white"></span>
            <span class="bg-white"></span>
            <span class="bg-white"></span>
          </div>
        </button>
      </div>
      <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="w-full items-center justify-between md:order-1 md:w-auto"
      >
        <div
          class="absolute left-0 top-0 flex h-screen w-full flex-col bg-green-light p-20 md:flex-row md:items-center md:justify-between md:p-48"
        >
          <ul
            v-if="menuItems"
            class="flex flex-col justify-between font-medium text-white"
          >
            <li
              v-for="menuItem in menuItems"
              :key="menuItem._id"
            >
              <NuxtLink
                v-if="menuItem._slug"
                :to="`/${menuItem._slug}`"
                class="block py-2 pl-3 pr-4 text-white md:mb-10 md:p-0 md:text-5xl md:hover:text-coral xl:mb-16"
                >{{ menuItem.title }}</NuxtLink
              >
            </li>
          </ul>
          <div class="flex flex-col text-white md:basis-1/3">
            <div class="mb-2 text-2xl">E-mail</div>
            <a
              href="mailto:info@solidtimber.nl"
              class="text-lg font-light"
            >
              info@solidtimber.nl
            </a>
            <div class="mb-2 mt-4 text-2xl md:mt-10">Telefoon</div>
            <a
              href="tel:+310307851767"
              class="text-lg font-light"
            >
              +31 (0)30 785 17 67
            </a>
            <div class="mb-2 mt-4 text-2xl md:mt-10">Social</div>
            <div class="flex items-center justify-start">
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
            <a
              href="#"
              class="mt-4 inline-flex max-w-[200px] items-center justify-center rounded-3xl bg-coral px-10 py-4 text-center font-medium text-white hover:bg-coral-dark focus:outline-none focus:ring-4 focus:ring-coral-dark md:mt-10"
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
            <div
              class="absolute -bottom-2 left-auto right-6 flex h-6 w-10 justify-between text-white"
            >
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
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.tree {
  transition: all 1s ease-out;
  margin-top: -4px;
}

.tree:hover {
  margin-top: -8px;
  transition: all 1s ease-out;
}
.hamburger {
  width: 38px;
  height: 40px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 7px;
}

.hamburger span:nth-child(2),
.hamburger span:nth-child(3) {
  top: 18px;
}

.hamburger span:nth-child(4) {
  top: 29px;
}

.hamburger.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.hamburger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.hamburger.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
