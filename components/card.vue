<template>

  <v-card
    :to="to"
    flat
    max-width="100%"
    min-height="100%"
    tile
    class="mx-auto d-flex dropshadowclass flex-column justify-end pa-4 "
  >
    <div>
      <span>{{tag}}</span>
      <h2>{{title}}</h2>
    </div>
  </v-card>

</template>

<script>
export default {
  props: {
    tag: '',
    title: '',
    to: '/',
  },
}
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
.wide-banner
  padding-top: 1em
  padding-bottom: 1em
  padding-left: 4em !important
  padding-right: 4em !important
</style>