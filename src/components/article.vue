<template>
    <div>
      <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="../img/logos/smhi-logo-120.png" alt="smhi"  style="width: 50px; height: 20px;"> 
        <p  class="project-role text-center">Application Technician </p> 
        <p  class="project-stack text-center text-xs">Sep 2023 to present</p>
        <br />
        <p class="leading-relaxed text-sm ">
          Develop responsive web applications using React.js, leveraging state management with Redux and context API 
          <span :class="{ 'hidden': !showMore1 }" id="more-text1">
            Implement RESTful APIs for seamless integration of frontend and backend systems. Collaborate with designers and backend developers to ensure optimal user experience and functionality. Collaborate with development teams to integrate automated testing into CI/CD pipelines, ensuring code quality and minimizing bugs in production.
          </span>
        </p>
        <button @click="toggleMore(1)" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="!showMore1">Read More</button>
        <button @click="toggleMore(1)" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="showMore1">Hide</button>
      </div>
      <br/>
      <!-- Repeat similar structure for other sections with unique IDs, methods, and data properties -->
      <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="../img/logos/react-cert-africa-logo.png" alt="smhi"  style="width: 40px; height: 40px;"> 
        <p  class="project-role text-center">React Cert Africa </p> 
        <p  class="project-role text-center">Full stack Developer </p>
        <p  class="project-stack text-center text-xs">2020-2022</p>
        <br />
        <p class="leading-relaxed text-sm ">
            Designed, developed, and deployed a CRM Application using modern frontend technologies such as React.js, 
          <span :class="{ 'hidden': !showMore2 }" id="more-text2">
            Redux, Node.js and RESTful APIs. Implemented features such as user authentication, client management, and task tracking to streamline business processes. Utilized RESTful APIs to communicate with backend services and databases, ensuring data integrity and security. Collaborated with designers to translate wireframes into responsive web interfaces.
          </span>
        </p>
        <button @click="toggleMore(2)" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="!showMore2">Read More</button>
        <button @click="toggleMore(2)" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="showMore2">Hide</button>
      </div>
      <br />
  
      <!-- Repeat similar structure for other sections with unique IDs, methods, and data properties -->
      <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="../img/logos/ruwaza-logo.png" alt="smhi"  style="width: 20px; height: 25px;"> 
        <p  class="project-role text-center">Ruwaza</p> 
        <p  class="project-role text-center">Full stack Developer </p> 
        <p  class="project-stack text-center text-xs">2018-2022</p>
        <br />
        <p class="leading-relaxed text-sm ">
            Deployed interfaces for client projects using HTML, CSS, and JavaScript. Worked closely with lead developer  
          <span :class="{ 'hidden': !showMore3 }" id="more-text2">
            to design products and solutions to different user and infrastructure problems. Conducted code reviews and implemented best practices to improve code quality. Configuring and deploying new releases of Applications. 
          </span>
        </p>
        <button @click="toggleMore(3)" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="!showMore3">Read More</button>
        <button @click="toggleMore(3)" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="showMore3">Hide</button>
      </div>
      <!-- Repeat similar structure for other sections with unique IDs, methods, and data properties -->
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        showMore1: false,
        showMore2: false,
        showMore3: false,
        // Add similar data properties for other sections, e.g., showMore2, showMore3, ...
      };
    },
    methods: {
      toggleMore(section) {
        // Toggle the corresponding showMore property based on the section clicked
        if (section === 1) {
          this.showMore1 = !this.showMore1;
        }
        if (section === 2) {
          this.showMore2 = !this.showMore2;
        }
        if (section === 3) {
          this.showMore3 = !this.showMore3;
        }
        // Add similar conditions for other sections
      }
    }
  };
  </script>
  