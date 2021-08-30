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
          <h4>SIKeFA</h4>
          <p class="caption">(Sistem Informasi Kesahatan Fisik Anak)</p>
        </div>
        <div>
          <h4>Year</h4>
          <p class="caption">2019</p>
        </div>
        <div>
          <h4>Role</h4>
          <p class="caption">Mobile App Developer</p>
        </div>
        <div>
          <h4>Tech</h4>
          <p class="caption">Flutter</p>
        </div>
      </div>
      <div class="grid-inner-layout mr-4 ml-4">
        <div class="mr-4 ml-4 d-flex ">
          <div class="flex-grow-1">
            <h4>Description</h4>
            <p
              class="caption"
              style="width:600px"
            >SIKeFA (Sistem Informasi Kesahatan Fisik Anak) was an assigment project for mobile application subject
              in my university. This App provides advices for parents about what should they do to the current health status of their child
              by answering certain questions according to their child age.
            </p>
          </div>
          <h4>Project 1 of 5</h4>
        </div>
        <div class="mr-4 ml-4">
          <h4>Gallery</h4>
          <div
            class="d-flex fill-height justify-space-between"
            style="position:relative"
          >
            <v-row>
              <v-col>
                <v-img
                  class="gallery"
                  style="height:100%; position:absolute"
                  max-width="200px"
                  contain
                  @click="openPictureDialog('/portofolio/sikefa/splash-screen.jpg')"
                  src="/portofolio/sikefa/splash-screen.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portofolio/sikefa/home.jpg')"
                  style="height:100%; position:absolute"
                  max-width="200px"
                  contain
                  src="/portofolio/sikefa/home.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portofolio/sikefa/result.jpg')"
                  style="height:100%; position:absolute"
                  max-width="200px"
                  contain
                  src="/portofolio/sikefa/result.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portofolio/sikefa/questions.jpg')"
                  style="height:100%; position:absolute"
                  max-width="200px"
                  contain
                  src="/portofolio/sikefa/questions.jpg"
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
      width="700px"
      v-model="dialogPicture"
    >
      <v-card>

        <v-zoomer
          v-if="dialogPicture"
          style="width: 700px; height: 600px;"
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
          <h4>SIKeFA</h4>
          <p class="caption">(Sistem Informasi Kesahatan Fisik Anak)</p>
        </div>
        <div>
          <h4>Project 1 of 5</h4>
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
                  max-width="200px"
                  contain
                  @click="openPictureDialog('/portofolio/sikefa/splash-screen.jpg')"
                  src="/portofolio/sikefa/splash-screen.jpg"
                ></v-img>
              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portofolio/sikefa/home.jpg')"
                  max-width="200px"
                  contain
                  src="/portofolio/sikefa/home.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portofolio/sikefa/result.jpg')"
                  max-width="200px"
                  contain
                  src="/portofolio/sikefa/result.jpg"
                ></v-img>

              </v-col>
              <v-col>
                <v-img
                  class="gallery"
                  @click="openPictureDialog('/portofolio/sikefa/questions.jpg')"
                  max-width="200px"
                  contain
                  src="/portofolio/sikefa/questions.jpg"
                ></v-img>

              </v-col>
            </v-row>
          </vue-scroll>
        </div>
      </div>
      <div>
        <h4>Description</h4>
        <p class="caption">SIKeFA (Sistem Informasi Kesahatan Fisik Anak) was an assigment project for mobile application subject
          in my university. This App provides advices for parents about what should they do to the current health status of their child
          by answering certain questions according to their child age.
        </p>
      </div>
      <div>
        <h4>Year</h4>
        <p class="caption">2019</p>
      </div>
      <div>
        <h4>Role</h4>
        <p class="caption">Mobile App Developer</p>
      </div>
      <div>
        <h4>Tech</h4>
        <p class="caption">Flutter</p>
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
      title: 'SIKeFA',
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