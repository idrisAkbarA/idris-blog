<template>
  <v-container class=" fill-height containerwidth ">
    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
      >

        <v-card
          to="/portfolio/sikefa"
          flat
          max-width="200px"
          min-height="300px"
          tile
          class="mx-auto d-flex dropshadowclass flex-column justify-end pa-4 "
        >
          <div>
            <h1>Portfolio</h1>
          </div>
        </v-card>

      </v-col>
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
      >

        <v-card
          to="/about-me"
          flat
          max-width="200px"
          min-height="300px"
          tile
          class="mx-auto d-flex dropshadowclass flex-column justify-end pa-4 "
        >
          <div>
            <span>About me:</span>
            <h1>Idris Akbar Adyusman</h1>
          </div>
        </v-card>

      </v-col>
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
      >

        <v-card
          to="/blog"
          flat
          max-width="200px"
          min-height="300px"
          tile
          class="mx-auto d-flex dropshadowclass flex-column justify-end pa-4 "
        >
          <div>
            <h1>Blog</h1>
          </div>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>
<script>
export default {}
</script>

<style lang="sass">
$hoverColor: #FF9800
.dropshadowclass:hover
  background: #212121 !important
  color: #FF8A65
  border: 0px white !important
  transition: 0.5s ease
  -moz-box-shadow: none
  -webkit-box-shadow: none
  box-shadow: none !important
.dropshadowclass
  border: solid 4px white !important
  background: rgba(255, 255, 255, 0.15) !important
  transition: 0.5s ease
  -moz-box-shadow: 15px 15px 0px $hoverColor !important
  -webkit-box-shadow: 15px 15px 0px $hoverColor !important
  box-shadow: 15px 15px 0px $hoverColor !important

.nodropshadowclass
  border: solid 4px white !important
  background: rgba(255, 255, 255, 0.15) !important
  transition: 0.5s ease
  -moz-box-shadow: 15px 15px 0px $hoverColor !important
  -webkit-box-shadow: 15px 15px 0px $hoverColor !important
  box-shadow: 15px 15px 0px $hoverColor !important

.containerwidth
  width: 60% !important

@media (min-width: 600px)
  .containerwidth
    width: 100%
</style>


