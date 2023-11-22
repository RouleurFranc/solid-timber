<script setup lang="ts">
import { GetMenuItems } from '@/queries/getMenuItems'

const props = defineProps<{
  backgroundColor: string
  textColor: string
}>()

const { data } = await useAsyncQuery(GetMenuItems)
const background = computed(() => props.backgroundColor)
const showMenu = ref(false)
const menuItems = data?.value?.MenuItems?.items
</script>
<template>
  <header>
    <nav
      :class="background ? `bg-${background}` : `bg-green-dark`"
      class="left-0 top-0 z-20 w-full border-0"
    >
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:px-8 md:py-6"
      >
        <a
          href="/"
          class="flex items-center"
        >
          <img
            src="../assets/images/logo-solidtimber-wit.png"
            class="ml-2 h-14 md:h-24 -mt-2"
            alt="Solid Timber Logo"
          />
        </a>
        <div
          class="flex md:order-2"
          @click="showMenu = !showMenu"
        >
          <button
            :class="
              showMenu
                ? 'open fixed top-4 right-4 md:top-6 md:right-6'
                : 'close'
            "
            type="button"
            class="z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink p-2 text-sm text-white transition-all hover:scale-110 hover:bg-pink-light hover:transition-all focus:outline-none md:h-16 md:w-16"
          >
            <span class="sr-only">Open menu</span>
            <div
              class="hamburger h-9 w-[34px] text-white md:h-[40px] md:w-[38px]"
              :class="showMenu ? 'open' : 'close'"
              viewbox="0 0 60 40"
            >
              <span
                class="top-[5px] h-[3px] bg-licorice md:top-[7px] md:h-1"
              ></span>
              <span
                class="top-[16px] h-[3px] bg-licorice md:top-[18px] md:h-1"
              ></span>
              <span
                class="top-[16px] h-[3px] bg-licorice md:top-[18px] md:h-1"
              ></span>
              <span
                class="top-[27px] h-[3px] bg-licorice md:top-[29px] md:h-1"
              ></span>
            </div>
          </button>
        </div>
        <div
          :class="showMenu ? 'flex' : 'hidden'"
          class="w-full items-center justify-between md:order-1 md:w-auto"
        >
          <div
            class="fixed left-0 top-0 z-10 flex h-screen min-h-screen w-full flex-col bg-green-light px-10 py-20 md:flex-row md:items-center md:justify-between md:p-20 md:px-48 xl:px-72"
          >
            <ul
              v-if="menuItems"
              class="mb-2 flex flex-col justify-between font-medium text-white md:mb-0"
            >
              <li
                v-for="menuItem in menuItems"
                :key="menuItem._id"
              >
                <NuxtLink
                  v-if="menuItem._slug"
                  :title="menuItem.title"
                  :to="`/${menuItem._slug}`"
                  class="mb-8 block text-2xl text-white md:mb-10 md:text-5xl md:hover:text-pink lg:text-6xl xl:mb-16"
                  @click="showMenu = !showMenu"
                  >{{ menuItem.title }}</NuxtLink
                >
              </li>
            </ul>
            <div class="flex flex-col text-white md:basis-1/3">
              <Social :contact-button="true" />
              <div
                class="absolute inset-x-0 -bottom-2 mx-auto flex h-6 w-10 justify-between text-white"
              >
                <Icon
                  size="14"
                  name="mdi:pine-tree-variant"
                  class="tree"
                />
                <Icon
                  size="18"
                  name="mdi:pine-tree-variant"
                  class="tree treeMiddle"
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
  </header>
</template>

<style>
.hamburger {
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

.treeMiddle {
  animation: MoveUpDown 2s linear infinite;
  position: absolute;
  bottom: 10px;
  left: 10px;
}

@keyframes MoveUpDown {
  0%,
  100% {
    margin-bottom: 0;
  }
  50% {
    margin-bottom: 3px;
  }
}
</style>
