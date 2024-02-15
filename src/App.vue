<script setup>
//src="https://cdn.tailwindcss.com";
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import Article from './components/article.vue';

// Initialization for ES Users
import {
  Collapse,
  initTE,
} from "tw-elements";

initTE({ Collapse });




const mobileMenuActive = ref(false);
const route = useRoute();

const isMobileDevice = ref(window.innerWidth <= 800);
const mobileClass = ref(isMobileDevice.value ? 'mobile' : 'desktop');

const toggleMobileMenu = () => {
  mobileMenuActive.value = !mobileMenuActive.value;
};

const handleLinkClick = () => {
  mobileMenuActive.value = false;
};

const updateMobileStatus = () => {
  isMobileDevice.value = window.innerWidth <= 800;
  mobileClass.value = isMobileDevice.value ? 'mobile' : 'desktop';
};

onMounted(() => {
  window.addEventListener('resize', updateMobileStatus);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMobileStatus);
});

watch(() => window.innerWidth, () => {
  updateMobileStatus();
});

const showTopContainer = computed(() => {
  return isMobileDevice.value ? (route.path === '/') : true;
});


const MyComponent = {
  data() {
    return {
      showMore: false
    };
  },
  methods: {
    toggleMore() {
      this.showMore = !this.showMore;
    }
  }
};

</script>

<template>


<nav
  class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
  data-te-navbar-ref>
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    
    <!-- Hamburger button for mobile view -->
    <button
      class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent4"
      aria-controls="navbarSupportedContent4"
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
            class="text-xxl text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-12 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 text-xl"
            aria-current="page"
            href="#"
            data-te-nav-link-ref 
            
            >Timothy. </a
          >
        </li>
      </ul>

      <div class="flex items-center">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
          Projects
        </button>
        <div class="flex items-center">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
          Work Expirience
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



  <div class="grid grid-cols-4 ">
    <!-- First Row -->
    <div class="bg-[#151B54] border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 ">
      <div class="w-full">
        <div :class="[mobileClass]" v-if="showTopContainer"
        class="px-6 sm:px-5 md:px-10 lg:px-14 pb-5  ">
        <div class="flex flex-col items-center">
          <img src="./assets/profile.png "
            class="h-[80px] w-[80px]  rounded-[120px]  ">
          <h2 class="mt-6 mb-2 text-3xl font-semi-bold text-white">Timothy Juma</h2>
          <p class="text-white text-l font-light mb-[5px] uppercase">Norrköping, Sweden</p>
        
          <span class="mb-4 text-[#A6A6A6] inline-block px-5 py-1.5 rounded-lg  ">Javascript Full-Stack Developer</span>
        </div>
        <div class="flex socail_icon justify-center">
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"><a
              href="https://www.instagram.com/lunatic_naresh1?igsh=cGVwZmIxdjU5bjJv" target="_blank"
              class="text-[#1773EA]"><i class="fa-brands fa-instagram"></i></a></button>
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"><a
              href="https://x.com/Lunatic_Naresh?t=fCjBUwjalqrTpLxgy2BTYA&s=09" target="_blank" class="text-[#1C9CEA]"><i
                class="fa-brands fa-twitter"></i></a></button>
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"> <a
              href="https://github.com/naresh515?fbclid=PAAaZUwv63b3s-1QU2oKR5eoYGZJzcNUHih6vupC6vAN5lON1OK3Lb_eG75p8"
              target="_blank" class="text-[#e14a84]"><i class="fa-brands fa-github"></i></a></button>
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"><a
              href="https://www.linkedin.com/in/naresh-tak-90b9a9209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank" class="text-[#0072b1]"><i class="fa-brands fa-linkedin"></i></a></button>
        </div>
        <div class="contact_info  p-2 lg:p-7 rounded-2xl my-7">
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Phone</span>
              <span><a href="tel:8279214452" class="text-white hover:text-[#FA5252]">0729496871</a></span>
            </div>
          </div>
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-location-dot text-[#6AB5B8]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white"><p>Available for hire:
                
              </p></span>
              <span><a class="text-white">Norrkoping, Sweden</a></span>
            </div>
          </div>
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-envelope text-[#FD7590]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Email</span>
              <span><a href="mailto:taknaresh515@gmail.com"
                  class="text-white hover:text-[#FA5252]">mmbasujuma@gmail.com</a></span>
            </div>
          </div>
          <div class="flex py-2.5 gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-calendar-days text-[#C17CEB]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Birthday</span>
              <span><a class="text-white">October 18, 1989</a></span>
            </div>
          </div>
        </div>
      </div>

       
      </div>
    </div>

    <!-- Second Row (2x wider) -->
    <div class="bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 col-span-2">
        <div class=" w-full ">
          <h1 class="text-black text-2xl lg:text-4xl font-semi-bold leading-10">Introduction</h1>
        <p class="text-gray-600 text-sm leading-7 pt-6 pb-12 ">I'm a Full Stack Application Developer with extensive experience in JavaScript/TypeScript application development. Over the years, I've had the opportunity to work with professional teams globally and have developed large-scale applications such as Management Systems, Point of Sales, E-commerce applications, and more. My passion lies in crafting efficient, reliable, and user-friendly applications that cater to the needs of businesses and end-users alike. I'm always on the lookout for new and exciting projects to work on, so feel free to connect with me to discuss any potential opportunities.
          
        </p>

        
        <div class="w-full border-t border-gray-300"></div>
        
       
      </div>
      <br />
      <!-- Skills -->

      <h1 class="text-black text-2xl lg:text-4xl font-semi-bold leading-10">Skills </h1>  <br />
      

        <div class="text-sm text-slate-600 p-4 leading-6 flex flex-row flex-wrap gap-2">
        <span class="pill">JavaScript Frameworks</span>
        <span class="pill">Front End Frameworks</span>
        <span class="pill">CSS Preprocessors</span>
        <span class="pill">RESTful Services/APIs</span>
        <span class="pill">Git/Version Control</span>
        <span class="pill">Content Management Systems</span>
        <span class="pill">Cross-Browser Development</span>
        <span class="pill">Testing/Debugging</span>
        <span class="pill">Problem-Solving</span>
       
        
  
      </div>


      <br />
      <div class="w-full border-t border-gray-300"></div>
     
      <br />
      <h1 class="text-black text-2xl lg:text-4xl font-semi-bold leading-10">Recent projects</h1>  <br />

        <div data-toggle="modal" data-target="#projectDetailsModal" class="profile-project">
          <!--fragment#3367150f7#head-->
          <img fragment="3367150f7" src="./img/react-cert-africa.png" alt="Dental 99"> 
          <div fragment="3367150f7" class="background-tint"></div> 
          <span fragment="3367150f7" class="button-group" style="display: none;"><a href="#">Edit</a> /
                <a href="#" data-toggle="modal" data-target="#modalProjectDelete8">Remove</a></span> 
                <h4 fragment="3367150f7"><span>React Cert Africa</span></h4> 
                <p fragment="3367150f7" class="project-role">Full stack Developer</p> 
                <p fragment="3367150f7" class="project-stack">React,Bootstrap</p> 
                <!--fragment#3367150f7#tail-->
          </div>
          <div data-toggle="modal" data-target="#projectDetailsModal" class="profile-project">
          <!--fragment#3367150f7#head-->
          <img fragment="3367150f7" src="./img/ruwaza.png" alt="Dental 99"> 
          <div fragment="3367150f7" class="background-tint"></div> 
          <span fragment="3367150f7" class="button-group" style="display: none;"><a href="#">Edit</a> /
                <a href="#" data-toggle="modal" data-target="#modalProjectDelete8">Remove</a></span> 
                <h4 fragment="3367150f7"><span>Ruwaza</span></h4> 
                <p fragment="3367150f7" class="project-role">Full stack Developer</p> 
                <p fragment="3367150f7" class="project-stack">React,PHP</p> 
                <!--fragment#3367150f7#tail-->
          </div>
          <div data-toggle="modal" data-target="#projectDetailsModal" class="profile-project">
          <!--fragment#3367150f7#head-->
          <img fragment="3367150f7" src="./img/mazerabbit.png" alt="Dental 99"> 
          <div fragment="3367150f7" class="background-tint"></div> 
          <span fragment="3367150f7" class="button-group" style="display: none;"><a href="#">Edit</a> /
                <a href="#" data-toggle="modal" data-target="#modalProjectDelete8">Remove</a></span> 
                <h4 fragment="3367150f7"><span>Maze Game</span></h4> 
                <p fragment="3367150f7" class="project-role">Full stack Developer</p> 
                <p fragment="3367150f7" class="project-stack">React</p> 
                <!--fragment#3367150f7#tail-->
          </div>

          <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />
      <h1 class="text-black text-2xl lg:text-4xl font-semi-bold leading-10">Recent Roles</h1>  <br />
      
      


      <div id="app">
        <Article />
      </div>



      

        



      
        
       
   

      
      
    </div>

    <!-- Third Row -->
    <div class=" bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14">
      <h1 class="text-black text-2xl lg:text-4xl font-semi-bold leading-10">Tools / Frameworks</h1>
      <div class="flex justify-between grid grid-cols-2 gap-2 m-5 mb-10">
            <!-- START Card component -->
            <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/react-js-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>React.js</h5>
                <p>5 Year exp</p>
            </article>

            </div>
          
  

            <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/nodejs.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Node.js</h5>
                <p>5 Year exp</p>
            </article>

            </div>
            <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/vuejs-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Vue.js</h5>
                <p>5 Year exp</p>
            </article>

            </div><div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/figma-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Figma</h5>
                <p>5 Year exp</p>
            </article>

            </div><div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/amazon_aws-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>AWS</h5>
                <p>5 Year exp</p>
            </article>

            </div><div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/getbootstrap-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Bootstrap</h5>
                <p>5 Year exp</p>
            </article>
            
            </div>

             <!-- START Card component -->
             <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/tailwindcss-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Tailwind CSS</h5>
                <p>5 Year exp</p>
            </article>
          </div>
          <!-- START Card component -->
          <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/nextjs01.png" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Next.js</h5>
                <p>5 Year exp</p>
            </article>
          </div>
        </div>
        <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />

      <h1 class="text-black text-2xl lg:text-4xl font-semi-bold leading-10">Languages</h1>
      <div class="flex justify-between grid grid-cols-2 gap-2 m-5 mb-10">
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/javascript-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>JavaScript</h5>
                <p>5 Year exp</p>
            </article>
          </div>
          <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/typescriptlang-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>TypeScript</h5>
                <p>5 Year exp</p>
            </article>
        </div>
         <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/lOGO_c_sharp.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>C#</h5>
                <p>5 Year exp</p>
            </article>
        </div>
         <!-- START Card component -->
         <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="./img/logos/python-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Python</h5>
                <p>5 Year exp</p>
            </article>
        </div>

        
      </div>
      <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />
      <h1 class="text-black text-2xl lg:text-4xl font-semi-bold leading-10">Education</h1>
      <div class="flex justify-between grid grid-cols-1 gap-2 m-5 mb-10"> 
         <!-- START Card component -->
         <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-justify-left bg-white shadow-2xl p-20 ">
                <img src="./img/logos/python-icon.svg" alt="ReactJS Logo" class="h-[50px] w-[50px] rounded-50px">
                <h5>Jomo Kenyatta University</h5>
                <p>Diploma in Infrmation Technology</p>
            </article>
        </div>

      </div>

    </div>
      
        

     </div>

       
           
</template>

<style>
body {
  background-image: url(./assets/bgtwo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.socail_icon button:hover,
.contact_info button:hover .main_container .tabs button:hover {
  background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
  transition: all .5s ease-in-out;
}

.socail_icon button:hover a,
.contact_info button:hover i {
  color: white !important;
  transition: all .3s ease-in-out;
}

.router-link-active button {
  background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
}

.active .line1 {
  transform: translateY(10px) rotate(50deg);
}

.active .line2 {
  opacity: 0;
  transition: all 0.2s ease-out;
}

.active .line3 {
  transform: translateY(-8px) rotate(-45deg);
}


.heading h1:after {
    content: "";
    left: 13rem;
    width: 12rem;
    position: absolute;
    top: 50%;
    height: 0.125rem;
    transform: translateY(-50%);
    border-radius: 0.375rem;
    background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
}

@media screen and (max-width: 800px) {
    .heading h1:after {
        left: 7rem;
        width: 10rem;
    }
}



@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .pill {
        @apply  px-1 py-0.5 bg-gray-100 rounded-md text-gray-700 text-xs border border-gray-300 ;
    }
}















</style>
