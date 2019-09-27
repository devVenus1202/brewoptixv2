<template>
  <v-container>
    <v-layout></v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Detail',
  data: () => ({}),
  mounted() {
    console.log('id', this.$route.params.id)
    this.getBrand({ id: this.$route.params.id })
  },
  methods: {
    ...mapActions(['getBrand'])
  }
}
</script>

<style lang="scss" scoped></style>
