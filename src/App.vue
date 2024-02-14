<script setup>
//src="https://cdn.tailwindcss.com";
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useRoute } from 'vue-router';




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



</script>

<template>

  <div class="grid grid-cols-4 ">
    <!-- First Row -->
    <div class="bg-[#151B54] border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 ">
      <div class="w-full">
        <div :class="[mobileClass]" v-if="showTopContainer"
        class="px-6 sm:px-5 md:px-10 lg:px-14 pb-5  ">
        <div class="flex flex-col items-center">
          <img src="./assets/profile.png"
            class="h-[140px] w-[140px]  rounded-[120px] top-0 object-cover ">
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
      
      <div class="flex justify-between grid grid-cols-7 mb-10">
    
            <!-- START Card component -->
            <div  class="flex justify-center items-center ">
              <article class=" rounded-md bg-gray-50 px-2 py-1 text-s font-semi-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
                <h7 class=" text-xs font-bold text-center" >Version Control</h7>
                <ul>
                  <li class="text-xs">Git</li>
                </ul>
              
            </article>
          </div>
            <!-- START Card component -->
            <div class="flex justify-center items-center">
            <article class="rounded-md bg-gray-50 px-2 py-1 text-s font-semi-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <h7 class="text-xs font-bold text-center">Languages</h7>
                <ul class="text-xs ">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>CSS3</li>
                  <li>SASS</li>
                </ul>
            </article>
          </div>
              <!-- START Card component -->
              <div class="flex justify-center items-center">
            <article class="rounded-md bg-gray-50 px-2 py-1 text-s font-semi-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <h7 class="text-xs font-bold text-center">Frameworks</h7>
                <ul class="text-xs ">
                  <li>React</li>
                  <li>Node.js </li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                </ul>
            </article>
          </div>
          <!-- START Card component -->
          <div class="flex justify-center items-center">
            <article class="rounded-md bg-gray-50 px-2 py-1 text-s font-semi-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <h7 class="text-xs font-bold text-center">Scripting</h7>
                <ul class="text-xs ">
                  <li>Python</li>
                  <li>Bash</li>
                  <li>Powershell</li>
                </ul>
            </article>
          </div>
          <!-- START Card component -->
          <div class="flex justify-center items-center">
            <article class="rounded-md bg-gray-50 px-2 py-1 text-s font-semi-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <h7 class="text-xs font-bold text-center">Operaring/S</h7>
                <ul class="text-xs ">
                  <li>Linux</li>
                  <li>Windows</li>
                </ul>
            </article>
          </div>

          <!-- START Card component -->
          <div class="flex justify-center items-center">
            <article class="rounded-md bg-gray-50 px-2 py-1 text-s font-semi-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <h7 class="text-xs font-bold text-center">Containerization</h7>
                <ul class="text-xs ">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  
                </ul>
            </article>
          </div>
          <!-- START Card component -->
          <div class="flex justify-center items-center">
            <article class="rounded-md bg-gray-50 px-2 py-1 text-s font-semi-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <h7 class="text-xs font-bold text-center">CI/CD</h7>
                <ul class="text-xs ">
                  <li>GitLab CI</li>
                  <li>GitHub Actions</li>
                  
                </ul>
            </article>
          </div>
    
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
      
      <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="./img/logos/smhi-logo-120.png" alt="Dental 99"> 
        <p  class="project-role text-center">SMHI</p> 
        <p  class="project-role text-center">Application Technician </p> 
        <p  class="project-stack text-center text-xs">Sep 2023 to present</p>
        <br />
        <p>Develop responsive web applications using React.js, leveraging state management with Redux and context API.  Implement RESTful...
          <span class="hidden" id="more-text">
            APIs for seamless integration of frontend and backend systems. Collaborate with designers and backend developers to ensure optimal user experience and functionality. Collaborate with development teams to integrate automated testing into CI/CD pipelines, ensuring code quality and minimizing bugs in production.
          </span>
        </p>
        <button id="toggle-btn" class=" text-blue-500 focus:outline-none">Read More</button>
        <button id="hide-btn" class="hidden mt-4 text-blue-500 focus:outline-none">Hide</button>
        
        <br />

      </div>

      <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="./img/logos/react-cert-africa-logo.png" alt="Dental 99"> 
        <p  class="project-role text-center">React Cert Africa </p> 
        <p  class="project-role text-center">Full stack Developer</p> 
        <p  class="project-stack text-center text-xs">2020 - 2022</p>
        <br />
        <p>Designed, developed, and deployed a CRM Application using modern frontend technologies such as React.js, Redux, Node.js and RESTful...
          <span class="hidden" id="more-text">
            APIs. Implemented features such as user authentication, client management, and task tracking to streamline business processes. Utilized RESTful APIs to communicate with backend services and databases, ensuring data integrity and security. Collaborated with designers to translate wireframes into responsive web interfaces.
          </span>
        </p>
        <button id="toggle-btn" class=" text-blue-500 focus:outline-none">Read More</button>
        <button id="hide-btn" class="hidden mt-4 text-blue-500 focus:outline-none">Hide</button>
        
        <br />

      </div>

      <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="./img/logos/ruwaza-logo.png" alt="Dental 99"> 
        <p  class="project-role text-center">Ruwaza </p> 
        <p  class="project-role text-center">Full stack Developer</p> 
        <p  class="project-stack text-center text-xs">2018- 2020</p>
        <br />
        <p>ssisted in the development of user interfaces for client projects using HTML, CSS, and JavaScript. Worked closely with lead developer....
          <span class="hidden" id="more-text">
            to design products and solutions to different user and infrastructure problems. Conducted code reviews and implemented best practices to improve code quality. Configuring and deploying new releases of Applications. 
          </span>
        </p>
        <button id="toggle-btn" class=" text-blue-500 focus:outline-none">Read More</button>
        <button id="hide-btn" class="hidden mt-4 text-blue-500 focus:outline-none">Hide</button>
        
        <br />

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



















</style>
