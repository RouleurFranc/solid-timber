<script setup>
import { GetMenuItems } from "@/queries/getMenuItems";

const { data } = await useAsyncQuery(GetMenuItems);
const showMenu = ref(false)
const menuItems = data?.value?.MenuItems?.items;
</script>
<template>
    <nav class="bg-green-dark dark:bg-gray-900 w-full border-0 z-20 top-0 left-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
            <a href="/" class="flex items-center">
                <img src="../assets/images/solidtimber-logo.png" class="h-20 mr-2" alt="Solid Timber Logo">
                <span class="self-center text-4xl font-light whitespace-nowrap text-white">Solid Timber</span>
            </a>
            <div @click="showMenu = !showMenu" class="flex md:order-2">
                <button :class="showMenu ? 'open' : 'close'" type="button" class="bg-coral hover:bg-coral-dark z-20 text-white inline-flex items-center p-2 w-16 h-16 justify-center text-sm text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <div class="hamburger text-white" :class="showMenu ? 'open' : 'close'" viewbox="0 0 60 40">
                        <span class="bg-white"></span>
                        <span class="bg-white"></span>
                        <span class="bg-white"></span>
                        <span class="bg-white"></span>
                    </div>
                </button>
            </div>
            <div :class="showMenu ? 'flex' : 'hidden'" class="items-center justify-between w-full md:w-auto md:order-1">
                <div class="flex flex-col p-20 md:flex-row md:justify-between md:p-48 w-full top-0 left-0 absolute h-screen bg-green-light md:items-center">
                    <ul class="flex text-white font-medium flex-col justify-between">
                        <li  v-if="menuItems" :data="menuItems" v-for="(menuItem, index) in menuItems" :key="menuItem._id">
                            <NuxtLink :to="`/${menuItem._slug}`" class="block py-2 pl-3 pr-4 text-white md:text-5xl md:mb-10 xl:mb-16 md:hover:text-coral md:p-0">{{ menuItem.title }}</NuxtLink>
                        </li>
                    </ul>
                    <div class="flex flex-col text-white md:basis-1/3">
                        <div class="text-2xl mb-2">
                            E-mail
                        </div>
                        <a href="mailto:info@solidtimber.nl" class="font-light text-lg">
                          info@solidtimber.nl
                        </a> 
                        <div class="text-2xl mt-4 md:mt-10 mb-2">
                            Telefoon
                        </div>
                        <a href="tel:+310307851767" class="font-light text-lg">  
                          +31 (0)30 785 17 67
                        </a>
                        <div class="text-2xl mt-4 md:mt-10 mb-2">
                            Social  
                        </div>
                        <div class="flex justify-start items-center">
                          <a href="https://www.youtube.com/channel/UCszF6lIuqipHaG-UkSutYhA" class="group-hover:opacity-80 mr-4">
                            <Icon name="mdi:youtube" class="hover:opacity-80 transition-all hover:transition-all" size="50"/>
                          </a>
                          <a href="https://www.linkedin.com/company/solid-timber-bv" class="group-hover:opacity-80 mr-4">
                            <Icon name="mdi:linkedin" class="hover:opacity-80 transition-all hover:transition-all" size="40"/>
                          </a>
                          <a href="https://twitter.com/solidtimbernl" class="group-hover:opacity-80 mr-4">
                            <Icon name="pajamas:twitter" class="text-white hover:opacity-80 transition-all hover:transition-all" size="30"/>
                          </a>
                        </div>                
                        <a href="#" class="inline-flex items-center mt-4 md:mt-10 max-w-[200px] text-center px-10 py-4 text-md font-medium rounded-3xl justify-center text-white bg-coral hover:bg-coral-dark focus:ring-4 focus:outline-none focus:ring-coral-dark">
                          Contact
                       <svg
                         aria-hidden="true"
                         class="w-5 h-5 ml-2 -mr-1"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                       ><path
                           fill-rule="evenodd"
                           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                           clip-rule="evenodd" 
                         ></path>
                       </svg>
                     </a>
                    </div>                 
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
.hamburger {
    width: 38px;
    height: 40px;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  
.hamburger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }


  .hamburger span:nth-child(1) {
    top: 7px;
  }
  
  .hamburger span:nth-child(2),.hamburger span:nth-child(3) {
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