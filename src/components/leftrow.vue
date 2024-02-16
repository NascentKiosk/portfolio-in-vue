<template lang="">
     <div class="bg-[#151B54] border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 ">
      <div class="w-full">
        <div :class="[mobileClass]" v-if="showTopContainer"
        class="px-6 sm:px-5 md:px-10 lg:px-14 pb-5  ">
        <div class="flex flex-col items-center">
          <img src="./assets/profile.png "
            class="h-[80px] w-[80px]  rounded-[120px]  ">
          <h2 class="mt-6 mb-2 text-2xl text-sm font-semi-bold  px-5 py-1.5 rounded-lg whitespace-nowrap">Timothy Juma</h2>
          <p class="text-white font-light uppercase">Norrköping, Sweden</p>
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
          <span class="text-white text-sm md-leading-7 md-mr-7">Available for hire:</span>
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
          <span class="text-white text-sm leading-7 mr-7">https://timothy-juma.vercel.app</span>
          
              
        </div>  
      </div>
          
          
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>