<template lang="">
    <div>
      <nav
            class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
            data-te-navbar-ref>
            <div class="flex w-full flex-wrap items-center justify-between px-3">

                <div>
    <!-- Hamburger button for mobile view -->
            <button
            class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            @click="toggleDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <!-- Hamburger icon -->
            <span class="[&>svg]:w-7">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7">
                <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
            </span>
            </button>

            <!-- Dropdown menu -->
            <div v-if="isDropdownOpen" class="lg:hidden" id="navbarSupportedContent4">
            <ul class="text-neutral-500 text-md">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Work Experience</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
            </div>
        </div>
                
                <!-- Hamburger button for mobile view -->
               

                <!-- Collapsible navbar container -->
                <div
                class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent4"
                data-te-collapse-item>
                <!-- Left links -->
                <ul
                    class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                    data-te-navbar-nav-ref>
                    <!-- Home link -->
                    <li
                    class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                    data-te-nav-item-ref>
                    <a
                        class="text-4xl uppercase font-bold  text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-12 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 text-xl"
                        aria-current="page"
                        href="#"
                        data-te-nav-link-ref 
                        
                        >Timothy . </a
                    >
                    </li>
                </ul>

                <div class="flex items-center">
                    <a href="#projects1" 
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                    Projects</a>

                    <div class="flex items-center">
                   <a href="#experience1" 
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                    Work Experience</a>
                    </div>

                    <div class="flex items-center">
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                        Resume
                    </button>
                    </div>
                
                
                
                <div class="relative ml-4" data-te-dropdown-ref>
                <a
                    class="mr-4 flex items-center text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 motion-reduce:transition-none"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false">
                    <span
                    class="relative inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                    <span
                        class="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                    </span>
                    <span class="w-2 pl-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                    </span>
                </a>
                <ul
                    class="absolute left-0 right-auto z-[1000] float-left m-0 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
                    aria-labelledby="navbarDropdown"
                    data-te-dropdown-menu-ref>
                    <li>
                    <a
                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                        href="#"
                        data-te-dropdown-item-ref>
                        <span
                        class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                        <span
                            class="inline-block h-[11px] w-4 content-[''] [background-position:-36px_-26px_!important] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px]"></span>
                        </span>
                        <span class="mr-4">English</span>
                        <span
                        class="inline-block fill-green-600 dark:fill-gray-200 [&>svg]:h-3.5 [&>svg]:w-3.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                            d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        </span>
                    </a>
                    </li>
                    <li><hr class="my-2" /></li>
                    <li>
                    <a
                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                        href="#"
                        data-te-dropdown-item-ref>
                        <span
                        class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                        <span
                            class="inline-block h-[11px] w-4 content-[''] [background:url(https://tecdn.b-cdn.net/img/svg/flags.png)_no-repeat_-108px_-1976px] [background-position:-72px_-572px_!important]"></span>
                        </span>
                        Svenska</a
                    >
                    </li>
                    
                </ul>
                </div>
                </div>
                </div>
            </div>
</nav>
    </div>
</template>
<script>
export default {
    data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
</script>
<style lang="">
    
</style>