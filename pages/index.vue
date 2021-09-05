<template>
  <v-container
    max-width="200px"
    class="fill-height"
    :style="windowWidth<=600?'width:100%':'width:60%'"
  >
    <!-- <v-row>
      <h1>Hello</h1>
    </v-row> -->
    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
      >
        <v-hover v-slot="{ hover }">

          <v-card
            to="/portfolio/sikefa"
            flat
            max-width="200px"
            min-height="300px"
            tile
            :class="hover?'dropshadowclass deep-orange--text text--lighten-5':'nodropshadowclass'"
            class="mx-auto d-flex flex-column justify-end pa-4 "
          >
            <div>
              <h1>Portfolio</h1>
            </div>
          </v-card>
        </v-hover>
      </v-col>
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
      >

        <v-hover v-slot="{ hover }">

          <v-card
            to="/about-me"
            flat
            max-width="200px"
            min-height="300px"
            tile
            :class="hover?'dropshadowclass deep-orange--text text--lighten-5':'nodropshadowclass'"
            class="mx-auto d-flex flex-column justify-end pa-4 "
          >
            <div>
              <span>About me:</span>
              <h1>Idris Akbar Adyusman</h1>
            </div>
          </v-card>
        </v-hover>

      </v-col>
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
      >

        <v-hover v-slot="{ hover }">

          <v-card
            to="/blog"
            flat
            max-width="200px"
            min-height="300px"
            tile
            :class="hover?'dropshadowclass deep-orange--text text--lighten-5':'nodropshadowclass'"
            class="mx-auto d-flex flex-column justify-end pa-4 "
          >
            <div>
              <h1>Blog</h1>
            </div>
          </v-card>
        </v-hover>

      </v-col>
    </v-row>

  </v-container>
</template>
<script>
export default {
  created() {
    console.log(this)
  },
}
</script>

<style lang="sass">
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
</style>


