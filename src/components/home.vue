<script></script>

<template>
    <div class=" flex flex-col bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 flex">
        <div class="bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 flex">
            <div class="w-full">
                <h1 class="text-black text-2xl lg:text-4xl font-semibold leading-10">First Row Content</h1>
        </div>
        </div>
      
        <div class=" flex-1.2 bg-gray-100 border-b border-gray-200 heading">
          <h1 class=" text-black text-2xl lg:text-4xl font-semibold leading-10">Introduction</h1>
          <p class="text-gray-600 text-sm leading-7 pt-6 pb-12">I'm a Full Stack Application Developer with extensive experience in JavaScript/TypeScript application development. Over the years, I've had the opportunity to work with professional teams globally and have developed large-scale applications such as Management Systems, Point of Sales, E-commerce applications, and more. My passion lies in crafting efficient, reliable, and user-friendly applications that cater to the needs of businesses and end-users alike. I'm always on the lookout for new and exciting projects to work on, so feel free to connect with me to discuss any potential opportunities.</p>
        </div>
        <div class="flex-1 bg-white border-b border-gray-200 flex flex-col items-center">
          <img src="../assets/profile.png"
            class="h-[140px] w-[140px]  rounded-[120px] top-0 object-cover ">
        </div>
      
     
    </div>
  </template>

<style scoped>
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