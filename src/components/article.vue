<template>
    <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="../img/logos/smhi-logo-120.png" alt="smhi"  style="width: 50px; height: 20px;"> <br/>
        <p  class="project-role text-center">SMHI</p> 
        <p  class="project-role text-center">Application Technician </p> 
        <p  class="project-stack text-center text-xs">Sep 2023 to present</p>
        <br />
      <p class="leading-relaxed text-xs">
        Develop responsive web applications using React.js, leveraging state management with Redux and context API.  Implement RESTful...
        <span :class="{ 'hidden': !showMore }" id="more-text">
            APIs for seamless integration of frontend and backend systems. Collaborate with designers and backend developers to ensure optimal user experience and functionality. Collaborate with development teams to integrate automated testing into CI/CD pipelines, ensuring code quality and minimizing bugs in production.
        </span>
      </p>
      <button @click="toggleMore" class=" text-xs mt-4 text-blue-500 focus:outline-none" v-if="!showMore">Read More</button>
      <button @click="toggleMore" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="showMore">Hide</button>
    </div>
    <br/>

    <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="../img/logos/react-cert-africa-logo.png" alt="smhi"  style="width: 40px; height: 40px;"> <br/>
        <p  class="project-role text-center">React Cert Africa</p> 
        <p  class="project-role text-center">Full stack Developer </p> 
        <p  class="project-stack text-center text-xs">2020-2022</p>
        <br />
      <p class="leading-relaxed text-xs">
        Designed, developed, and deployed a CRM Application using modern frontend technologies such as React.js, Redux, Node.js and RESTful...
        <span :class="{ 'hidden': !showMore }" id="more-text">
            APIs. Implemented features such as user authentication, client management, and task tracking to streamline business processes. Utilized RESTful APIs to communicate with backend services and databases, ensuring data integrity and security. Collaborated with designers to translate wireframes into responsive web interfaces
        </span>
      </p>
      <button @click="toggleMore" class=" text-xs mt-4 text-blue-500 focus:outline-none" v-if="!showMore">Read More</button>
      <button @click="toggleMore" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="showMore">Hide</button>
    </div>

    <br/>
    <div class="flex justify-center items-center flex-col">
        <img class="image-center" src="../img/logos/ruwaza-logo.png" alt="smhi"  style="width: 20px; height: 25px;"> <br/>
        <p  class="project-role text-center">Ruwaza</p> 
        <p  class="project-role text-center">Full stack Developer </p> 
        <p  class="project-stack text-center text-xs">2018-2020</p>
        <br />
      <p class="leading-relaxed text-xs">
        Deployed interfaces for client projects using HTML, CSS, and JavaScript. Worked closely with lead developer....
        <span :class="{ 'hidden': !showMore }" id="more-text">
            to design products and solutions to different user and infrastructure problems. Conducted code reviews and implemented best practices to improve code quality. Configuring and deploying new releases of Applications. 
        </span>
      </p>
      <button @click="toggleMore" class=" text-xs mt-4 text-blue-500 focus:outline-none" v-if="!showMore">Read More</button>
      <button @click="toggleMore" class="text-xs mt-4 text-blue-500 focus:outline-none" v-if="showMore">Hide</button>
    </div>



  </template>
  
  <script>
  export default {
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