<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="deep-orange"
      v-model="drawer"
      app
    >
      <!--  -->
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
  data: () => ({ drawer: null }),
}
</script>