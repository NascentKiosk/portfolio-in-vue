<script setup>

import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import Article from '../components/article.vue';
import Project from '../components/projects.vue';



</script>


<template >
    <!-- shows only large screens  -> lg -> xl -> 2xl screen -->
 <div v-if="!isMobileView" class="contain" >
      
      <div class="grid grid-cols-4   invisible md:visible">
    

    <!-- First Row -->
    <div class="border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 ">
      <div class="w-full">
       <div>
        <div class="flex flex-col items-center">
          <img src="../assets/profile.png "
            class="h-[80px] w-[80px]  rounded-[120px]  ">
          <h2 class="mt-6 mb-2 text-2xl font-semi-bold text-white whitespace-nowrap">Timothy Juma</h2>
          <p class="text-white font-light uppercase whitespace-nowrap">Norrköping, Sweden</p>
          <span class="text-[#ffff] text-sm font-semi-bold  px-5 py-1.5 rounded-lg whitespace-nowrap">Javascript Full Stack Developer</span>

          <!-- Social-Links -->
          <div class="flex socail_icon justify-center whitespace-nowrap ">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg "> <a
                href="https://github.com/NascentKiosk"
                target="_blank" class="text-[#ffffff]"><i class="fa-brands fa-github"></i></a></button>
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg  ml-[15px]"><a
                href="https://www.linkedin.com/in/timothy-juma-44902b48/"
                target="_blank" class="text-[#0072b1]"><i class="fa-brands fa-linkedin"></i></a></button>
          </div>
          <br />
    
        </div>
      </div>
    </div>
      

      <div class=" border-b  border-t border-gray-700 py-2  ">
        <div class="mt-4 mb-4  flex flex-row items-center">
          <span class="text-white text-sm leading-7 mr-7 whitespace-nowrap">Available for hire :</span>
              <input type="checkbox" class="peer sr-only opacity-0" id="toggle" checked/>
              <label for="toggle" class=" relative flex h-5 w-11 cursor-pointer items-center rounded-full bg-red-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                  <span class="sr-only">Enable</span>
              </label>
        </div>   
      </div>

      <div class=" border-b  border-gray-700  ">
        <div class="mt-4 mb-4  flex flex-row items-center">
          <span class="text-white text-sm font-bold  mr-7">Type of work:</span>    
        </div>   
        <div class="mt-4 mb-4  flex flex-col">
          <span class="text-white text-sm leading-7 mr-7">Full-time</span>
          <span class="text-white text-sm leading-7 mr-7">Part-Time</span>
              
        </div>  
      </div>
      <div class=" border-b  border-gray-700  ">
        <div class="mt-4 mb-4  flex flex-row items-center">
          <span class="text-white text-sm font-bold  mr-7">Languages spoken:</span>    
        </div>   
        <div class="mt-4 mb-4  flex flex-col">
          <span class="text-white text-sm leading-7 mr-7">English : Fluent</span>
          <span class="text-white text-sm leading-7 mr-7">Swedish : Elementary Proficiency</span>
              
        </div>  
      </div>

      <div class=" border-b  border-gray-700  ">
        <div class="mt-4 mb-4  flex flex-row items-center">
          <span class="text-white text-sm font-bold  mr-7">Website:</span>    
        </div>   
        <div class="mt-4 mb-4  flex flex-col">
          <span class="text-white text-sm leading-7 mr-7 whitespace-nowrap">https://timothy-juma.vercel.app</span>
          
              
        </div>  
      </div>
          
          
    </div>

    <!-- Second Row (2x wider) -->
    <div class="bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 col-span-2">
        <div class=" w-full ">
          <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10">Introduction</h1>
        <p class="text-gray-600 text-sm leading-7 pt-6 pb-12 ">I'm a Full Stack Application Developer with extensive experience in JavaScript/TypeScript application development. Over the years, I've had the opportunity to work with professional teams globally and have developed large-scale applications such as Management Systems, Point of Sales, E-commerce applications, and more. My passion lies in crafting efficient, reliable, and user-friendly applications that cater to the needs of businesses and end-users alike. I'm always on the lookout for new and exciting projects to work on, so feel free to connect with me to discuss any potential opportunities.
          
        </p>

        
        <div class="w-full border-t border-gray-300"></div>
        
      
      </div>
      <br />
      <!-- Skills -->

      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10">Skills </h1>  <br />
      

        <div class="text-sm text-slate-600 p-4 leading-6 flex flex-row flex-wrap gap-2 shadow-lg">
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
      <h1  id ="projects1" class="text-black text-2xl lg:text-3xl font-semi-bold leading-10">Recent projects</h1>  <br />
      <div id="app">
        <Project />
      </div>

    

          <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />
      <h1 id="experience1" class="text-black text-2xl lg:text-3xl font-semi-bold leading-10">Recent Roles</h1>  
      <br />
      
      <div id="app">
        <Article />
        
      </div>
      
    </div>
    <!-- Third Row -->
    <div class=" bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14">
      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 mb-6 text-center">Tools / Frameworks</h1>
      <div class="grid grid-cols-3 sm:flex sm:overflow-x-auto sm:gap-x-2 md:gap-x-4 lg:grid-cols-2 gap-2 m-5 mb-10">
            <!-- START Card component -->
            <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/react-js-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px ">
                <h5>React.js</h5>
                <p class="whitespace-nowrap">5 Year exp</p>
            </article>

            </div>

            <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/nodejs.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Node.js</h5>
                <p class="whitespace-nowrap">5 Year exp</p>
            </article>

            </div>
            <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/vuejs-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Vue.js</h5>
                <p class="whitespace-nowrap"> 3 Year exp</p>
            </article>

            </div><div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/figma-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Figma</h5>
                <p class="whitespace-nowrap">5 Year exp</p>
            </article>

            </div><div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/amazon_aws-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>AWS</h5>
                <p class="whitespace-nowrap"> 3 Year exp</p>
            </article>

            </div><div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/getbootstrap-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Bootstrap</h5>
                <p class="whitespace-nowrap">4 Year exp</p>
            </article>
            
            </div>

            <!-- START Card component -->
            <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/tailwindcss-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[30px] rounded-50px">
                <h5 class="whitespace-nowrap">Tailwind CSS</h5>
                <p class="whitespace-nowrap">5 Year exp</p>
            </article>
          </div>
          <!-- START Card component -->
          <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/nextjs01.png" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Next.js</h5>
                <p class="whitespace-nowrap">5 Year exp</p>
            </article>
          </div>
        </div>
        <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />

      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 text-center">Languages</h1>
      <div class="grid grid-cols-3 sm:flex sm:overflow-x-auto sm:gap-x-2 md:gap-x-4 lg:grid-cols-2 gap-2 m-5 mb-10">
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/javascript-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>JavaScript</h5>
                <p class="whitespace-nowrap">5 Year exp</p>
            </article>
          </div>
          <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/typescriptlang-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[30px] rounded-50px">
                <h5>TypeScript</h5>
                <p class="whitespace-nowrap">4 Year exp</p>
            </article>
        </div>
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/Logo_C_sharp.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>C#</h5>
                <p class="whitespace-nowrap">3 Year exp</p>
            </article>
        </div>
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/python-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Python</h5>
                <p class="whitespace-nowrap">3 Year exp</p>
            </article>
        </div>

        
      </div>
      <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />

      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 text-center">Containerization</h1>
      <div class="grid grid-cols-3 sm:flex sm:overflow-x-auto sm:gap-x-2 md:gap-x-4 lg:grid-cols-2 gap-2 m-5 mb-10">
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/docker-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Docker</h5>
                <p class="whitespace-nowrap">3 Year exp</p>
            </article>
          </div>
          <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/kubernetes-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[30px] rounded-50px">
                <h5>Kubernetes</h5>
                <p class="whitespace-nowrap"> 2 Year exp</p>
            </article>
        </div> 
      </div>
      <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />

      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 text-center">CI/CD & Testing Tools</h1>
      <div class="grid grid-cols-3 sm:flex sm:overflow-x-auto sm:gap-x-2 md:gap-x-4 lg:grid-cols-2 gap-2 m-5 mb-10">
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/github-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Github CI</h5>
                <p class="whitespace-nowrap">3 Year exp</p>
            </article>
          </div>
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/gitlab-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Gitlab CI</h5>
                <p class="whitespace-nowrap">2 Year exp</p>
            </article>
          </div>
          <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/cypressio-original-wordmark.svg" alt="ReactJS Logo" class="h-[30px] w-[30px] rounded-50px">
                <h5>Cypress</h5>
                <p class="whitespace-nowrap"> 2 Year exp</p>
            </article>
        </div> 
      </div>
      <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />
      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 text-center">Scripting</h1>
      <div class="grid grid-cols-3 sm:flex sm:overflow-x-auto sm:gap-x-2 md:gap-x-4 lg:grid-cols-2 gap-2 m-5 mb-10">
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/gnu_bash-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Bash</h5>
                <p class="whitespace-nowrap">3 Year exp</p>
            </article>
          </div>
          <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/file_type_powershell2.svg" alt="ReactJS Logo" class="h-[30px] w-[30px] rounded-50px">
                <h5>PowerShell</h5>
                <p class="whitespace-nowrap">3 Year exp</p>
            </article>
        </div> 
      </div>
      <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />

      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 text-center">Data Storage</h1>
      <div class="grid grid-cols-3 sm:flex sm:overflow-x-auto sm:gap-x-2 md:gap-x-4 lg:grid-cols-2 gap-2 m-5 mb-10">
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/mongodb-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>MongoDB</h5>
                <p class="whitespace-nowrap">3 Year exp</p>
            </article>
          </div>
         
      </div>
      <br />
      <div class="w-full border-t border-gray-300"></div>
      <br />
      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 text-center">Operating Systems</h1>
      <div class="grid grid-cols-3 sm:flex sm:overflow-x-auto sm:gap-x-2 md:gap-x-4 lg:grid-cols-2 gap-2 m-5 mb-10">
        <!-- START Card component -->
        <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/windows-icon.png" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Windows</h5>
                <p class="whitespace-nowrap">5 Year exp</p>
            </article>
          </div>
          <div  class="flex justify-center items-center ">
              <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-5">
                <img src="../img/logos/linux-icon.svg" alt="ReactJS Logo" class="h-[30px] w-[50px] rounded-50px">
                <h5>Linux</h5>
                <p class="whitespace-nowrap">2 Year exp</p>
            </article>
          </div>
         
      </div>
      <br />


      <div class="w-full border-t border-gray-300"></div>
      <br />
      <h1 class="text-black text-2xl lg:text-3xl font-semi-bold leading-10 text-center">Education</h1> <br>
      <div class="grid place-items-center">
          <img src="../img/logos/jkuat.png" alt="ReactJS Logo" class="h-[80px] w-[80px] rounded-50px">
          <br />
          <h5 class="text-xs  font-semibold ">Jomo Kenyatta University Of Agriculture And Technology</h5>
                <p>Diploma in Infrmation Technology</p>
      </div>
                
    </div>
  </div>
    

    
</div>
<div  id="app">      
</div>
</template>


<script>

export default {
  data() {
    return {
      isMobileView: false
    };
  },
  mounted() {
    // Check if the screen width is below a certain threshold to determine mobile view
    this.isMobileView = window.innerWidth <= 768; // Adjust the threshold as needed
    // Add an event listener to detect window resize and update the view accordingly
    window.addEventListener('resize', this.updateView);
  },
  methods: {
    updateView() {
      // Update the value of isMobileView based on the screen width
      this.isMobileView = window.innerWidth <= 768; // Adjust the threshold as needed
    }
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed to avoid memory leaks
    window.removeEventListener('resize', this.updateView);
  }
};
</script>

