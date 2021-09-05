<template>
  <v-app>
    <v-main>
      <v-sheet
        color="deep-orange accent-1"
        width="100%"
        :height="$vuetify.breakpoint.mobile?'650px':'450px'"
        :class="$vuetify.breakpoint.mobile?'top-bg-mobile':'top-bg'"
      >
        <div
          class="d-flex mb-10"
          :class="$vuetify.breakpoint.mobile?'justify-space-between':''"
        >
          <v-btn
            class="mr-1"
            outlined
            small
            to="/"
          >
            <v-icon left>mdi-home</v-icon>Home
          </v-btn>
          <v-btn
            class="mr-1"
            outlined
            small
            to="/portfolio/sikefa"
          >
            <v-icon left>mdi-format-list-text</v-icon>Portfolio
          </v-btn>
          <v-btn
            outlined
            small
            to="/blog"
          >
            <v-icon left>mdi-post</v-icon>Blog
          </v-btn>
        </div>
        <div
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
          class="d-flex justify-space-between"
        >
          <v-avatar
            class="mx-auto"
            size="160"
          >
            <img
              src="/about-me/profile-pic.jpg"
              alt="Idris Akbar Adyusman"
            >
          </v-avatar>
        </div>
        <span class="text-h6 font-weight-light">Hello, there...</span>
        <p class="text-h6 font-weight-light">Let me introduce my self, my name is</p>
        <span class="text-h2 text-sm-h4 text-md-h2 text-lg-h1 text-xl-h1 ">Idris Akbar Adyusman</span>
        <p
          :style="$vuetify.breakpoint.mobile?'':'width:600px'"
          class="mt-6 text-h6 font-weight-light"
        >Passionate web developer with 3+ years experience
          as freelance web developer using Laravel and Vue.
          Currently in final year of college studying informatics

          Engineering</p>
        <v-img
          :class="$vuetify.breakpoint.mobile?'profile-pic-mobile':'profile-pic'"
          width="400px"
          src="/about-me/transparent-profile-pic.png"
        >
          <div class="fill-height overlay-pic-color"></div>
        </v-img>
      </v-sheet>
      <v-container class="mt-5">
        <v-row>

          More About me

        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="8"
            lg="8"
            xl="8"
          >
            <v-row>
              <span class="text-h2 font-weight-bold">Experience</span>
              <!-- content -->
              <v-sheet
                color="transparent"
                class="pa-4"
              >
                <v-container
                  class="vertical-line pa-10"
                  :style="!$vuetify.breakpoint.mobile?'padding-right:15em !important':''"
                >
                  <!-- :style="windowWidth>=600?'padding-right:15em !important':''" -->
                  <v-row
                    class="d-flex"
                    align="center"
                  >
                    <span class="text-h5 font-weight-bold">Award</span>
                    <v-divider class="white px-2"></v-divider>
                    <span class="text-h5">May 2017/2018</span>
                  </v-row>
                  <v-row class="mb-4">
                    <span class="subtitle font-weight-bold">Himatif, Sultan Syarif Kasim Riau Islamic State University</span>
                    <p class="mt-4 subtitle-2">Himatif (student Asociation of Informatics Engineering) gave me an award for being the best member of the Asociation. </p>
                  </v-row>
                  <v-row
                    class="d-flex"
                    align="center"
                  >
                    <span class="text-h5 font-weight-bold">Internship</span>
                    <v-divider class="white px-2"></v-divider>
                    <span class="text-h5">jan - May 2019</span>
                  </v-row>
                  <v-row class="mb-4">
                    <span class="subtitle font-weight-bold">Payung Sekaki Subdistrict Goverment, Pekanbaru City - Indonesia</span>
                    <p class="mt-4 subtitle-2">I built a webapp called MUSRENBANG. The App allows the user to prioritize, gather, and manage all the needs of the people in the district such as demand for building city services, road infrastructures and maintenance, creating the social event, etc.</p>
                  </v-row>
                  <v-row
                    class="d-flex"
                    align="center"
                  >
                    <span class="text-h5 font-weight-bold">Project Experience</span>
                    <v-divider class="white px-2"></v-divider>
                    <span class="text-h5">Sep - Oct 2020</span>
                  </v-row>
                  <v-row class="mb-4">
                    <span class="subtitle font-weight-bold">PTIPD (Information Technology and Data Center), Sultan Syarif Kasim Riau Islamic State University </span>
                    <p class="mt-4 subtitle-2">Developed a scholarship app for the University.</p>
                  </v-row>
                  <v-row
                    class="d-flex"
                    align="center"
                  >
                    <span class="text-h5 font-weight-bold">Project Experience</span>
                    <v-divider class="white px-2"></v-divider>
                    <span class="text-h5">Sep - Oct 2020</span>
                  </v-row>
                  <v-row>
                    <span class="subtitle font-weight-bold">Postgraduate Department of Sultan Syarif Kasim Riau Islamic State University </span>
                    <p class="mt-4 subtitle-2">Developed a Registration and online exam app for the postgraduate program of the University.</p>
                  </v-row>

                </v-container>

              </v-sheet>
            </v-row>
            <v-row>
              <span class="text-h2 font-weight-bold">Education</span>
              <!-- content -->
              <v-sheet
                color="transparent"
                class="pa-4"
              >
                <v-container
                  class="vertical-line pa-10"
                  :style="windowWidth>=600?'padding-right:15em !important':''"
                >
                  <v-img
                    class="mx-auto"
                    src="/about-me/uin.png"
                    max-width="200px"
                  ></v-img>
                  <v-row
                    class="d-flex"
                    align="center"
                  >
                    <span class="text-h5 font-weight-bold">Bachelor Degree in Informatics Engineering</span>

                  </v-row>
                  <v-row>
                    <span class="subtitle font-weight-bold">Sultan Syarif Kasim Riau Islamic State University </span>
                    <p class="mt-4 subtitle-2">Currently I'm in my final year of studying informatics engineering at Sultan Syarif Kasim Riau Islamic State University .</p>
                  </v-row>
                </v-container>
              </v-sheet>
            </v-row>

          </v-col>
          <v-col
            cols="12"
            md="4"
            lg="4"
            xl="4"
          >
            <v-row>
              <span class="text-h2 font-weight-bold">Skills</span>
              <!-- content -->
              <v-sheet
                color="transparent"
                class="pa-4"
              >
                <v-container class="vertical-line pa-10">
                  <v-row
                    class="d-flex"
                    align="center"
                  >
                    <div style="width:200px">
                      <span class="font-weight-bold">Skills I have </span>
                      <ul class="text-h6">
                        <li>Laravel</li>
                        <li>PHP</li>
                        <li>VueJs</li>
                        <li>NuxtJs</li>
                        <li>Java</li>
                        <li>NodeJs</li>
                        <li>MySQL</li>
                        <li>Docker</li>
                        <li>Flutter</li>
                      </ul>
                    </div>
                  </v-row>

                </v-container>

              </v-sheet>

            </v-row>
            <v-row>
              <span class="text-h2 font-weight-bold">Tech Stack</span>
              <!-- content -->
              <v-sheet
                color="transparent"
                class="pa-4"
              >
                <v-container class="vertical-line pl-10 pt-10 pb-10">
                  <v-row
                    class="d-flex"
                    align="center"
                  >
                    <span class=" font-weight-bold">Technology stack I'm used to work with </span>
                    <ul class="text-h6">
                      <li>Laravel</li>
                      <li>MySQL</li>
                      <li>VueJs</li>
                    </ul>
                  </v-row>

                </v-container>

              </v-sheet>
            </v-row>
            <v-row>
              <span class="text-h2 font-weight-bold">Hobbies</span>
              <!-- content -->
              <v-sheet
                color="transparent"
                class="pa-4"
              >
                <v-container class="vertical-line pl-10 pt-10 pb-10">
                  <v-row class="d-flex flex-column">
                    <span class="font-weight-bold">I love doing these </span>
                    <ul class="text-h6">
                      <li>Video Games</li>
                      <li>Motion Graphic</li>
                      <li>Design</li>
                    </ul>
                  </v-row>

                </v-container>

              </v-sheet>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      dark
      padless
      class="pb-3"
    >
      <v-container>
        <v-row>
          <v-col><span class="text-h5">Contact me</span></v-col>
        </v-row>
        <v-row :class="$vuetify.breakpoint.mobile?'d-flex flex-column':''">
          <div class="ml-3 d-flex align-center">
            <v-icon>mdi-instagram</v-icon> <a
              class="ml-1 white--text"
              style="text-decoration: none;"
              href="https://instagram.com/idrisakbara"
            >idrisakbara</a>
          </div>
          <div class="ml-3 d-flex align-center">
            <v-icon>mdi-github</v-icon> <a
              class="ml-1 white--text"
              style="text-decoration: none;"
              href="https://github.com/idrisakbara"
            >github.com/idrisakbara</a>
          </div>
          <div class="ml-3 d-flex align-center">
            <v-icon>mdi-email</v-icon> <span
              class="ml-1 white--text"
              style="text-decoration: none;"
            >idrisakbaradyusman@outlook.com</span>
          </div>
          <div class="ml-3 d-flex align-center">
            <v-icon>mdi-linkedin</v-icon> <a
              class="ml-1 white--text"
              style="text-decoration: none;"
              href="https://www.linkedin.com/in/idris-akbar-adyusman-41336b207/"
            >Idris Akbar Adyusman</a>
          </div>
        </v-row>
      </v-container>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  layout: 'about-me',
}
</script>
<style lang="scss">
</style>
<style >
.top-bg {
  position: relative;
  padding-top: 1em;
  padding-left: 10em;
  padding-right: 4em;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background-image: url('/about-me/bg-abstract-4.jpg'),
    linear-gradient(
      to top,
      rgba(255, 158, 128, 0) 0%,
      rgba(255, 158, 128, 0.5) 100%
    ) !important;
}
.top-bg-mobile {
  position: relative;
  padding-top: 1em;

  padding-left: 1em;
  padding-right: 1em;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background-image: url('/about-me/bg-abstract-4.jpg'),
    linear-gradient(
      to top,
      rgba(255, 158, 128, 0) 0%,
      rgba(255, 158, 128, 0.5) 100%
    ) !important;
}
.profile-pic {
  z-index: 20;
  position: absolute;
  bottom: 0px;
  right: 6em;
  background-image: rgba(255, 153, 0, 0.527);
}
.profile-pic-mobile {
  display: none;
  z-index: 20;
  position: absolute;
  bottom: 0px;
  right: 6em;
  background-image: rgba(255, 153, 0, 0.527);
}
.overlay-pic-color {
  /* background-image: linear-gradient(
    to top,
    rgba(255, 158, 128, 0) 0%,
    rgba(255, 158, 128, 0.5) 100%
  ); */
  /* background-image: rgba(255, 153, 0, 0.9); */
}
.vertical-line {
  border-left: 4px solid white;
}
</style>