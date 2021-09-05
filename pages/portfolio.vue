<template>
  <v-app>
    <v-navigation-drawer
      color="deep-orange"
      v-model="drawer"
      app
    >
      <!--  -->
      <vue-scroll :ops="scrollOps">
        <v-card
          class="d-flex justify-center pt-4 pr-2 pl-2"
          flat
          tile
        >

          <v-card-text class="d-flex flex-column justify-start align-start">
            <div class="d-flex justify-space-between">
              <v-btn
                text
                outlined
                small
                to="/"
              >
                <v-icon left>mdi-home</v-icon>Home
              </v-btn>
              <v-btn
                text
                outlined
                small
                to="/about-me"
              >
                <v-icon left>mdi-account</v-icon>About me
              </v-btn>

            </div>
            <div class="d-flex align-center mt-5">

              <v-avatar
                class="mx-auto"
                size="60"
              >
                <img
                  src="/about-me/transparent-profile-pic.png"
                  alt="John"
                >
              </v-avatar>
              <div>
                Hey, let's take a look at my portfolio
              </div>
            </div>
          </v-card-text>
        </v-card>
        <v-list dense>
          <v-list-item
            to="/portfolio/sikefa"
            two-line
            router
            exact
          >
            <v-avatar>1</v-avatar>

            <v-list-item-content>
              <h5>SIKeFa</h5>
              <v-list-item-title></v-list-item-title>
              <p class="caption">Flutter</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/portfolio/uin-suska-riau-scholarship-app"
            two-line
            router
            exact
          >
            <v-avatar>2</v-avatar>

            <v-list-item-content>
              <h5>UIN Suska Riau Scholarship App</h5>
              <v-list-item-title></v-list-item-title>
              <p class="caption">PHP Laravel, Vue SPA, MySql</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/portfolio/uin-suska-riau-post-graduate-program-registration-and-cat-app"
            two-line
            router
            exact
          >
            <v-avatar>3</v-avatar>

            <v-list-item-content>
              <h5>UIN Suska Riau Post Graduate Program Registration and CAT App</h5>
              <v-list-item-title></v-list-item-title>
              <p class="caption">PHP Laravel, Nuxt SPA, MySql</p>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            to="/portfolio/e-health"
            two-line
            router
            exact
          >
            <v-avatar>4</v-avatar>

            <v-list-item-content>
              <h5>E-Health</h5>
              <v-list-item-title></v-list-item-title>
              <p class="caption">PHP Laravel, Nuxt SPA, MySql</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </vue-scroll>
    </v-navigation-drawer>

    <v-app-bar
      v-if="isMobile"
      color="black"
      dark
      app
    >
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
      <v-app-bar-title>Idris's Portfolio</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->

    <v-main>
      <nuxt-child />
    </v-main>
  </v-app>
</template>
<script>
export default {
  layout: 'portfolio',
  computed: {
    isMobile() {
      return this.windowWidth <= 600
    },
    pages() {
      let petugas = this.$route.params.userID
      return [
        {
          icon: 'mdi-view-dashboard',
          title: 'SIKeFa',
          to: `/portfolio/sikefa`,
          subtitle: 'Flutter',
        },
        {
          icon: 'mdi-lock',
          title: 'UIN Suska Riau Scholarship App',
          to: `/portfolio/uin-suska-riau-scholarship-app`,
          subtitle: 'PHP Laravel, Vue SPA, MySql',
        },
        {
          icon: 'mdi-bank',
          title:
            'UIN Suska Riau Post Graduate Program Registration and CAT App',
          to: `/portfolio/uin-suska-riau-post-graduate-program-registration-and-cat-app`,
          subtitle: 'PHP Laravel, Vue SPA, MySql',
        },
        {
          icon: 'mdi-account-details',
          title: 'E-Health',
          to: `/portfolio/e-health`,
          subtitle: 'PHP Laravel, Nuxt SPA, MySql',
        },
      ]
    },
  },
  data: () => ({
    drawer: null,
    scrollOps: {
      scrollPanel: {
        easing: 'easeInQuad',
        speed: 800,
        scrollingX: false,
      },
      bar: {
        background: '#FFEBEE',
      },
      vuescroll: {
        mode: 'native',
        wheelScrollDuration: 0,
        locking: true,
      },
    },
  }),
}
</script>