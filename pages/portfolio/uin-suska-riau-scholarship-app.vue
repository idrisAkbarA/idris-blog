<template>
  <v-container
    fluid
    v-if="windowWidth>600"
    class="grid-outer-layout"
  >
    <v-container class="d-flex">
      <div
        class="mr-4 ml-4"
        style="width:200px"
      >
        <div>
          <h4>UIN Suska Riau
            Scholarship App</h4> <br>

        </div>
        <div>
          <h4>Year</h4>
          <p class="caption">2020</p>
        </div>
        <div>
          <h4>Role</h4>
          <p class="caption">Project Manager &
            Engineer</p>
          <p class="caption white--text">
            <a
              class="white--text"
              href="https://www.linkedin.com/in/umarsyariif/"
            >Umar Syarif</a> as Engineer
          </p>
        </div>
        <div>
          <h4>Tech</h4>
          <p class="caption">PHP Laravel, Vue SPA, MySql, Vuetify</p>
        </div>
        <div>
          <h4>Link</h4>
          <p class="caption"> <a
              class="white--text"
              style="text-decoration: none;"
              href="https://beasiswa.uin-suska.ac.id"
              target="_blank"
            >beasiswa.uin-suska.ac.id</a> </p>
        </div>
      </div>
      <div class="grid-inner-layout mr-4 ml-4">
        <div class="mr-4 ml-4 d-flex ">
          <div class="flex-grow-1">
            <h4>Description</h4>
            <p
              class="caption"
              style="width:600px"
            >This project is made to provide a better way for students to get information and register to scholarships that the university provides.
              The App is web based and the interesting part is that the app provide a dynamic form creation like google form.
              This feature allows the user to create multiple scholarships that each of its have unique requirement in form submission.
            </p>
          </div>
          <h4>Project 2 of 5</h4>
        </div>
        <div class="mr-4 ml-4">
          <h4>Gallery</h4>
          <div
            class="d-flex fill-height justify-space-between"
            style="position:relative"
          >
            <v-row class="flex-wrap justify-space-between">
              <v-col cols="6">
                <v-img
                  class="gallery"
                  style="position:absolute"
                  max-width="48%"
                  contain
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/home.jpg')"
                  src="/portfolio/uin-suska-riau-scholarship-app/home.jpg"
                ></v-img>

              </v-col>
              <v-col cols="6">
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/mhs.jpg')"
                  style="position:absolute"
                  max-width="48%"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/mhs.jpg"
                ></v-img>
              </v-col>
              <v-col cols="3">
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/create.jpg')"
                  style="position:absolute"
                  max-width="200px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/create.jpg"
                ></v-img>
              </v-col>
              <v-col cols="3">
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/beasiswa-admin.jpg')"
                  style="position:absolute"
                  max-width="200px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/beasiswa-admin.jpg"
                ></v-img>
              </v-col>
              <v-col cols="3">
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/preview.jpg')"
                  style="position:absolute"
                  max-width="200px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/preview.jpg"
                ></v-img>
              </v-col>
              <v-col cols="3">
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/verifikator.jpg')"
                  style="position:absolute"
                  max-width="200px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/verifikator.jpg"
                ></v-img>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>

    </v-container>

    <v-container class="d-flex">
      <div
        class="mr-4 ml-4"
        style="width:200px"
      >
        <div>
          <h4>Idris Akbar Adyusman</h4>

        </div>
      </div>
      <div class="grid-inner-layout-bottom mr-4 ml-4">
        <div class="mr-4 ml-4 d-flex ">
          <div style="width:300px">
            <h4>Student of Sultan Syarif Kasim Riau Islamic State University</h4>
          </div>
          <contacts></contacts>

        </div>

      </div>

    </v-container>
    <v-dialog
      overlay-color="deep-orange darken-1"
      width="100%"
      v-model="dialogPicture"
    >
      <v-card>

        <v-zoomer
          v-if="dialogPicture"
          style="width: 100%; height: 600px;"
        >
          <img
            :src="pictureAddress"
            style="object-fit: contain; width: 100%; height: 100%;"
          >
        </v-zoomer>
      </v-card>
    </v-dialog>

  </v-container>
  <v-container
    v-else
    class="d-flex"
  >
    <div
      class="mr-4 ml-4"
      style="width:100%"
    >
      <div class="d-flex justify-space-between">
        <div style="width:200px">
          <h4>UIN Suska Riau
            Scholarship App</h4>
          <br>
        </div>
        <div>
          <h4>Project 2 of 5</h4>
        </div>

      </div>
      <div>
        <h4>Gallery</h4>
        <div class="d-flex ">
          <vue-scroll :ops="scrollOps">
            <v-row class="flex-nowrap scroll-x:hidden">
              <v-col>
                <v-img
                  class="gallery"
                  max-width="400px"
                  contain
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/home.jpg')"
                  src="/portfolio/uin-suska-riau-scholarship-app/home.jpg"
                ></v-img>
              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/mhs.jpg')"
                  max-width="400px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/mhs.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/create.jpg')"
                  max-width="400px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/create.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/beasiswa-admin.jpg')"
                  max-width="400px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/beasiswa-admin.jpg"
                >
                </v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/preview.jpg')"
                  max-width="400px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/preview.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portfolio/uin-suska-riau-scholarship-app/verifikator.jpg')"
                  max-width="400px"
                  contain
                  src="/portfolio/uin-suska-riau-scholarship-app/verifikator.jpg"
                ></v-img>

              </v-col>
            </v-row>
          </vue-scroll>
        </div>
      </div>
      <div>
        <h4>Description</h4>
        <p class="caption">This project is made to provide a better way for students to get information and register to scholarships that the university provides.
          The App is web based and the interesting part is that the app provide a dynamic form creation like google form.
          This feature allows the user to create multiple scholarships that each of its have unique requirement in form submission.
        </p>
      </div>
      <div>
        <h4>Year</h4>
        <p class="caption">2020</p>
      </div>
      <div>
        <h4>Role</h4>
        <p class="caption">Project Manager &
          Engineer</p>
        <p class="caption white--text">
          <a
            class="white--text"
            href="https://www.linkedin.com/in/umarsyariif/"
          >Umar Syarif</a> as Engineer
        </p>
      </div>
      <div>
        <h4>Tech</h4>
        <p class="caption">PHP Laravel, Vue SPA, MySql, Vuetify</p>
      </div>
      <div>
        <h4>Link</h4>
        <p class="caption"> <a
            class="white--text"
            style="text-decoration: none;"
            href="https://beasiswa.uin-suska.ac.id"
            target="_blank"
          >beasiswa.uin-suska.ac.id</a> </p>
      </div>
      <contacts :isMobile="true"></contacts>
    </div>
    <v-dialog
      overlay-color="deep-orange darken-1"
      width="100%"
      v-model="dialogPicture"
    >
      <v-card>

        <v-zoomer
          v-if="dialogPicture"
          style="width: 100%; height: 600px;"
        >
          <img
            :src="pictureAddress"
            style="object-fit: contain; width: 100%; height: 100%;"
          >
        </v-zoomer>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: this.title,
    }
  },
  created() {
    this.$store.commit('page/setTitle', this.title)
  },
  computed: {
    isMobile() {
      return this.windowWidth
    },
  },
  data() {
    return {
      title: 'UIN Suska Scholarship App',
      dialogPicture: false,
      pictureAddress: '',
      scrollOps: {
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800,
          scrollingY: false,
          scrollingX: true,
        },
        bar: {
          background: '#000',
        },
        vuescroll: {
          mode: 'native',
          wheelScrollDuration: 0,
          locking: true,
        },
      },
    }
  },
  methods: {
    openPictureDialog(address) {
      this.pictureAddress = address
      this.dialogPicture = true
    },
  },
}
</script>
<style>
.gallery {
  cursor: pointer;
}
.grid-inner-layout {
  width: 100%;
  height: 100%;
  display: grid !important;
  grid-template-rows: 2fr 7fr;
}
.grid-inner-layout-bottom {
  width: 100%;
  height: 100%;
  display: grid !important;
  grid-template-rows: 1fr;
}
.grid-outer-layout {
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid !important;
  grid-template-rows: 6fr 1fr;
}
</style>