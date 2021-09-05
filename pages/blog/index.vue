<template>
  <v-container
    fluid
    class="d-flex overflow-y-hidden pa-0"
    :class="$vuetify.breakpoint.mobile?'flex-column':'flex-row'"
  >
    <!-- banner -->
    <div>
      <v-sheet
        color="deep-orange"
        :width="$vuetify.breakpoint.mobile?'100%':'50vw'"
        :height="$vuetify.breakpoint.mobile?'50vh':'100vh'"
        :class="$vuetify.breakpoint.mobile?'':'wide-banner'"
      >
        <div
          class="d-flex"
          :class="$vuetify.breakpoint.mobile?'justify-space-around pt-2':''"
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
            to="/about-me"
          >
            <v-icon left>mdi-account</v-icon>About Me
          </v-btn>
        </div>
        <v-container
          fluid
          :class="$vuetify.breakpoint.mobile?'mt-10':'fill-height'"
        >

          <div :class="$vuetify.breakpoint.mobile?'text-center':'text-left'">
            <span class="text-h3 text-lg-h1 text-xl-h1 font-weight-light">
              Hello!
            </span>
            <br>
            <span class="text-h3 text-lg-h1 text-xl-h1 font-weight-bold">Welcome to My Blog</span>
            <p class="subtitle-1 mt-10">Let's take a look, maybe there's something you like to read</p>
          </div>
        </v-container>
      </v-sheet>
    </div>
    <!-- content -->
    <div class="content-blog">
      <card
        v-for="item in nestedRoutes"
        :key="item"
        :tag="item.tags.join(', ')"
        :title="item.title"
        :to="item.path"
      ></card>

      <!-- <card
        tag="Laravel"
        title="Laravel Write-trought Cache with Observer"
      ></card>

      <card
        tag="Laravel"
        title="Laravel Write-trought Cache with Observer"
      ></card>

      <card
        tag="Laravel"
        title="Laravel Write-trought Cache with Observer"
      ></card> -->

    </div>
    <v-card
      v-if="!$vuetify.breakpoint.mobile"
      width="80px"
      height="80px"
      color="red darken-1"
      flat
      outlined
      to="/blog/list"
      class="center-card text-center d-flex flex-column align-center"
    >
      <v-container class="fill-height">
        <div>
          <h4>More Post
          </h4>
        </div>
      </v-container>
    </v-card>
  </v-container>
</template>
<router>
  {
    name: ‘Laravel Write-trough Cache with Observer’
  }
</router>
<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Idris Akbar Adyusman's Blog",
        },
      ],
    }
  },
  created() {
    this.$store.commit('page/setTitle', this.title)
    this.getBlogList()
  },
  data() {
    return {
      title: 'Blog',
      nestedRoutes: [],
      isMaintenance: true,
      maintenanceValue: [
        {
          title: 'Coming Soon',
          path: null,
          tags: ['Post'],
        },
        {
          title: 'Coming Soon',
          path: null,
          tags: ['Post'],
        },
        {
          title: 'Coming Soon',
          path: null,
          tags: ['Post'],
        },
        {
          title: 'Coming Soon',
          path: null,
          tags: ['Post'],
        },
      ],
    }
  },
  computed: {
    // nestedRoutes() {
    //   return this.getBlogList()
    // },
  },
  methods: {
    makeTitle(slug) {
      var words = slug.split('-')
      for (var i = 0; i < words.length; i++) {
        var word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
      }
      return words.join(' ')
    },
    getBlogList() {
      if (this.isMaintenance) {
        this.nestedRoutes = this.maintenanceValue
        return 0
      }
      this.$router.options.routes.forEach((routeOption) => {
        // console.log(routeOption)
        if (routeOption.path.startsWith(this.$route.path)) {
          routeOption.children.forEach((routeChild) => {
            if (routeChild.name != 'blog') {
              let pathSegments = routeChild.path.split('/')
              let splitTags = pathSegments[1].split('-tags-')
              let tags = splitTags[1].split('-')
              let title = this.makeTitle(splitTags[0])
              let year = pathSegments[0]
              this.nestedRoutes.push({
                name: routeChild.name,
                tags,
                title,
                year,
                path: routeChild.path,
              })
            }
          })
        }
      })
    },
  },
}
</script>

<style lang="sass">
.center-card
  position: fixed
  z-index: 20
  left: 50%
  top: 50%
  -webkit-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
.content-blog
  padding: 5em
  grid-gap: 5em
  overflow-y: hidden
  height: 100vh
  display: grid !important
  grid-template-columns: 1fr 1fr
  grid-template-rows: 1fr 1fr
$hoverColor: #FF9800
.card-menu-heading
  font-family: 'Playfair Display', serif
.dropshadowclass

  border: 0px white !important
  transition: 0.5s ease
  -moz-box-shadow: 0px
  -webkit-box-shadow: 0px
  box-shadow: 0px

.nodropshadowclass
  border: solid 4px white !important
  background: rgba(255, 255, 255, 0.15) !important
  transition: 0.5s ease
  -moz-box-shadow: 15px 15px 0px $hoverColor !important
  -webkit-box-shadow: 15px 15px 0px $hoverColor !important
  box-shadow: 15px 15px 0px $hoverColor !important
.wide-banner
  padding-top: 1em
  padding-bottom: 1em
  padding-left: 4em !important
  padding-right: 4em !important
</style>