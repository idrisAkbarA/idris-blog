<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="deep-orange"
      v-model="drawer"
      app
    >
      <!--  -->
      <vue-scroll :ops="scrollOps">
        <v-card
          v-if="windowWidth <= 600"
          class="d-flex justify-center pt-4 pr-2 pl-2"
          flat
          tile
        >
          <v-img
            max-width="70"
            :src="'/images/LogoUIN.png'"
          ></v-img>
          <v-card-text>Sistem Informasi Rawat Jalan Puskesmas Bangkinang Kota</v-card-text>
        </v-card>
        <v-card
          v-if="windowWidth <= 600"
          class="d-flex justify-center pr-2 pl-2"
          flat
          tile
        >
          <v-card-text>
            Selamat datang {{ $auth.user.name }}
            <br />
            <v-btn
              class="mt-2"
              outlined
              color="green darken-2"
              small
              block
              @click="logout"
            >
              <v-icon>mdi-logout-variant</v-icon>keluar
            </v-btn>
          </v-card-text>
        </v-card>
        <v-list dense>
          <v-list-item
            v-for="(page, i) in pages"
            :key="'key-' + i"
            :to="page.to"
            :two-line="page.subtitle ? true : false"
            router
            exact
          >
            <v-avatar>{{i+1}}</v-avatar>

            <v-list-item-content>
              <h4>{{  page.title }}</h4>
              <v-list-item-title></v-list-item-title>
              <p
                class="caption"
                v-if="page.subtitle"
              >{{
                page.subtitle
              }}</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </vue-scroll>
    </v-navigation-drawer>

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
  layout: 'portofolio',
  computed: {
    pages() {
      let petugas = this.$route.params.userID
      return [
        {
          icon: 'mdi-view-dashboard',
          title: 'SIKeFa',
          to: `/portofolio/sikefa`,
          subtitle: 'Flutter',
        },
        {
          icon: 'mdi-lock',
          title: 'UIN Suska Riau Scholarship App',
          to: `/portofolio/uin-suska-riau-scholarship-app`,
          subtitle: 'PHP Laravel, Vue SPA, MySql',
        },
        {
          icon: 'mdi-bank',
          title:
            'UIN Suska Riau Post Graduate Program Registration and CAT App',
          to: `/portofolio/uin-suska-riau-post-graduate-program-registration-and-cat-app`,
          subtitle: 'PHP Laravel, Vue SPA, MySql',
        },
        {
          icon: 'mdi-account-details',
          title: 'E-Health',
          to: `/portofolio/e-health`,
          subtitle: 'PHP Laravel, Nuxt SPA, MySql',
        },
      ]
    },
  },
  data: () => ({ drawer: null }),
}
</script>