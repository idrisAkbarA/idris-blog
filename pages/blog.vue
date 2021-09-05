<template>
  <v-app id="inspire">
    <v-app-bar
      v-if="!isParentPage"
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt-child />
    </v-main>
  </v-app>
</template>

<script>
export default {
  created() {},
  computed: {
    isParentPage() {
      return this.$store.state.page.title == 'Blog'
    },
  },
}
</script>

<style>
</style>