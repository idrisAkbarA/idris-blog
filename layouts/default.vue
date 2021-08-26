<template>
  <vue-scroll :ops="scrollOps">
    <v-app dark>
      <v-main class="landing-bg">
        <nuxt />
      </v-main>
    </v-app>
  </vue-scroll>
</template>

<script>
export default {
  data() {
    return {
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.landing-bg {
  /* background: red !important; */
  background: orangered;
  background-image: url('/landing-bg.svg') !important;
  background-size: cover !important;
}
.bg-pattern {
  background: url('/pattern.svg') repeat;
  background-size: 400px;
}
</style>
