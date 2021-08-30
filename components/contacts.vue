
<template>
  <div>
    <h4>Contacts</h4>
    <div
      class="d-flex"
      :class="isMobile?'flex-column':''"
    >
      <div>
        <p class="caption">
          <v-icon small>mdi-email</v-icon> idrisakbaradyusman@outlook.com <br>
          <v-icon small>mdi-linkedin</v-icon> <a
            class="white--text"
            style="text-decoration: none;"
            href="http://www.linkedin.com/in/idris-akbar-adyusman-41336b207"
            target="_blank"
          >http://www.linkedin.com/in/idris-akbar-adyusman-41336b207</a> <br>
          <span v-if="isMobile">

            <v-icon small>mdi-phone</v-icon> +62 852 7909 6428 <br>
            <v-icon small>mdi-whatsapp</v-icon> +62 812 7555 3496 <br>
          </span>
        </p>

      </div>
      <div
        v-if="!isMobile"
        class="ml-4"
      >
        <p class="caption">

          <v-icon small>mdi-phone</v-icon> +62 852 7909 6428 <br>
          <v-icon small>mdi-whatsapp</v-icon> +62 812 7555 3496 <br>

        </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: false,
  },
}
</script>

<style>
</style>