<template>
  <v-container
    fluid
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
            <v-img
              style="height:100%; position:absolute"
              max-width="200px"
              contain
              src="/portofolio/sikefa/splash-screen.jpg"
            ></v-img>
            <v-img
              style="height:100%; position:absolute"
              max-width="200px"
              contain
              src="/portofolio/sikefa/home.jpg"
            ></v-img>
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
          <div>
            <h4>Contacts</h4>
            <div class="d-flex">
              <div>
                <p class="caption">
                  <v-icon small>mdi-email</v-icon> idrisakbaradyusman@outlook.com <br>
                  <v-icon small>mdi-linkedin</v-icon> <a
                    class="white--text"
                    href="http://www.linkedin.com/in/idris-akbar-adyusman-41336b207"
                    target="_blank"
                  >http://www.linkedin.com/in/idris-akbar-adyusman-41336b207</a> <br>
                </p>

              </div>
              <div class="ml-4">
                <p class="caption">

                  <v-icon small>mdi-phone</v-icon> +62 85279096428 <br>
                  <v-icon small>mdi-whatsapp</v-icon> +62 812 7555 3496 <br>

                </p>

              </div>
            </div>
          </div>
        </div>

      </div>

    </v-container>

  </v-container>
</template>
<style>
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