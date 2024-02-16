<template>
    <div class="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 class="text-black text-2xl lg:text-3xl font-semibold leading-10 mb-6">Frameworks</h1>
      <div class="overflow-x-auto">
        <div class="flex">
          <!-- START Card component -->
          <div v-for="tool in tools" :key="tool.id" class="flex-shrink-0 flex justify-center items-center w-64 sm:w-72 lg:w-80">
            <article class="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-4">
              <img :src="tool.image" :alt="tool.name + ' Logo'" class="h-12 w-auto rounded-full mb-2">
              <h5 class="text-base font-semibold">{{ tool.name }}</h5>
              <p class="text-sm">{{ tool.experience }}</p>
            </article>
          </div>
          <!-- END Card component -->
        </div>
      </div>
  
      <div class="w-full border-t border-gray-300 my-6"></div>
  
      <h1 class="text-black text-2xl lg:text-3xl font-semibold leading-10 mb-6">Languages</h1>
      <!-- Language cards (similar to above) -->
  
      <div class="w-full border-t border-gray-300 my-6"></div>
  
      <h1 class="text-black text-2xl lg:text-3xl font-semibold leading-10 mb-6">Education</h1>
      <!-- Education section (similar to above) -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tools: [
          { id: 1, name: 'React.js', image: '../img/logos/react-js-icon.svg', experience: '5 Year exp' },
          { id: 2, name: 'Node.js', image: '../img/logos/nodejs.svg', experience: '5 Year exp' },
          { id: 3, name: 'Vue.js', image: '../img/logos/vuejs-icon.svg', experience: '3 Year exp' },
          // Add more tools as needed
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  