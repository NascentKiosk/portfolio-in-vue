<template lang="">
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
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>