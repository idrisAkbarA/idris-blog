<template>
  <h1>home</h1>
</template>
<script>
export default {
  head() {
    return {
      title: this.title,
    }
  },
  created() {
    this.$store.commit('page/setTitle', this.title)
  },
  data() {
    return {
      title: 'Portofolio',
    }
  },
}
</script>