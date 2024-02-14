<div class="flex flex-row ">
    <!-- First Row -->
    <div class="bg-[#151B54] border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 ">
      <div class="w-full">
        <div :class="[mobileClass]" v-if="showTopContainer"
        class="pt-12 md:py-12 px-6 sm:px-5 md:px-10 lg:px-14 pb-5 ">
        <div class="flex flex-col items-center">
          <img src="./assets/profile.png"
            class="h-[140px] w-[140px]  rounded-[120px] top-0 object-cover ">
          <h2 class="mt-6 mb-2 text-3xl font-semi-bold text-white">Timothy Juma</h2>
          <p class="text-white text-l font-light mb-[5px] uppercase">Norrköping, Sweden</p>
        
          <span class="mb-4 text-[#A6A6A6] inline-block px-5 py-1.5 rounded-lg bg-[#1D1D1D] ">Javascript Full-Stack Developer</span>
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
        <div class="contact_info bg-[#1D1D1D] p-2 lg:p-7 rounded-2xl my-7">
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
              <span class="text-xs text-white">Location</span>
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

    <!-- Second Row (Middle Row) -->
    <div class=" bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14  ">
      <div class=" w-full ">
        <h1 class=" text-black text-2xl lg:text-4xl font-semi-bold leading-10">Introduction</h1>
        <p class="text-gray-600 text-sm leading-7 pt-6 pb-12 ">I'm a Full Stack Application Developer with extensive experience in JavaScript/TypeScript application development. Over the years, I've had the opportunity to work with professional teams globally and have developed large-scale applications such as Management Systems, Point of Sales, E-commerce applications, and more. My passion lies in crafting efficient, reliable, and user-friendly applications that cater to the needs of businesses and end-users alike. I'm always on the lookout for new and exciting projects to work on, so feel free to connect with me to discuss any potential opportunities.
          
        </p>
      </div>
    </div>

    <!-- Third Row -->
    <div class="bg-white border border-gray-200 p-6 sm:p-5 md:p-10 lg:p-14 ">
      <div class="w-full">
        <h1 class=" w-1/3 text-black text-2xl lg:text-4xl font-semi-bold leading-10">Tools / Frafvfgffffffffffffffffffffffffffffmeworks</h1>
        
          
      </div>
    </div>
  </div>


  <div class="lg:mx-[10px] ">
    <nav class="bg-black m-0 p-4 flex justify-end lg:hidden">
      <div class="lg:hidden w-[30px] h-[30px] block" @click="toggleMobileMenu">
        <div class="hamburger-icon bg-[#EF4060] w-[40px] h-[40px] rounded-full flex flex-col items-center justify-center"
          :class="{ 'active': mobileMenuActive }" id="mobile-menu">
          <span class="line1 block w-[20px] h-[2px] bg-[#fff] mb-[6px]"></span>
          <span class="line2 block w-[20px] h-[2px] bg-[#fff] mb-[6px]"></span>
          <span class="line3 block w-[20px] h-[2px] bg-[#fff] mb-[6px]"></span>
        </div>
      </div>
    </nav>
    <div class="bg-[#212425] absolute left-0 z-10 right-0 hidden lg:!hidden" :class="{ '!block': mobileMenuActive }">
      <div class="mx-[10px] my-3">
        <RouterLink to="/" class="w-full" @click="handleLinkClick">
          <button
            class="h-10 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium "><a
              class="text-white flex items-center text-[15px] gap-[10px] px-3"><i class="fa-solid fa-house"></i>
              Home</a></button>
        </RouterLink>
      </div>
      <div class="mx-[10px] my-3">
        <RouterLink to="resume" class="w-full" @click="handleLinkClick">
          <button
            class="h-10 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
              class="text-white flex items-center text-[15px] gap-[10px] px-3"><i
                class="fa-regular fa-file-lines"></i>Resume</a></button>
        </RouterLink>
      </div>
      <div class="mx-[10px] my-3">
        <RouterLink to="project" class="w-full" @click="handleLinkClick">
          <button
            class="h-10 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
              class="text-white flex items-center text-[15px] gap-[10px] px-3"><i
                class="fa-solid fa-cube"></i>Project</a></button>
        </RouterLink>
      </div>
      <div class="mx-[10px] my-3">
        <RouterLink to="contact" class="w-full" @click="handleLinkClick">
          <button
            class="h-10 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
              class="text-white flex items-center text-[15px] gap-[10px] px-3"><i
                class="fa-regular fa-address-book"></i>Contact</a></button>
        </RouterLink>
      </div>
    </div>
    <div class="sub_container flex flex-col lg:grid grid-cols-[400px,1fr] lg:my-[10px] gap-4 lg:gap-14">
      
      <div :class="[mobileClass]" v-if="showTopContainer"
        class="bg-[#111111] pt-12 md:py-12 px-6 sm:px-5 md:px-10 lg:px-14 pb-5 lg:mt-[180px]">
        <div class="flex flex-col items-center">
          <img src="./assets/profile.png"
            class="h-[140px] w-[140px]  rounded-[120px] top-0 object-cover ">
          <h2 class="mt-6 mb-2 text-3xl font-semi-bold text-white">Timothy Juma</h2>
          <p class="text-white text-l font-light mb-[5px] uppercase">Norrköping, Sweden</p>
        
          <span class="mb-4 text-[#A6A6A6] inline-block px-5 py-1.5 rounded-lg bg-[#1D1D1D] ">Javascript Full-Stack Developer</span>
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
        <div class="contact_info bg-[#1D1D1D] p-2 lg:p-7 rounded-2xl my-7">
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
              <span class="text-xs text-white">Location</span>
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
      <div class="main_container">
        <div
          class="lg:w-[526px] hidden lg:h-[144px] p-[15px] lg:block lg:p-[30px] ml-auto mb-10 lg:rounded-[16px] bg-[#111111]">
          <div class="tabs flex">
            <RouterLink to="/" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium "><a
                  class="text-white flex flex-col"><i class="fa-solid fa-house"></i> Home</a></button>
            </RouterLink>
            <RouterLink to="resume" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-regular fa-file-lines"></i>Resume</a></button>
            </RouterLink>
            <RouterLink to="project" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-solid fa-cube"></i>Project</a></button>
            </RouterLink>
            <RouterLink to="contact" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-regular fa-address-book"></i>Contact</a></button>
            </RouterLink>
          </div>
        </div>
        <div class="tab-area">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>