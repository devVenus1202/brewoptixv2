<template>
  <v-container>
    <v-layout>
      <v-flex v-for="brand in brands" :key="brand.user_id">
        <p>{{ brand }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapGetters(['brands'])
  },
  methods: {
    ...mapActions(['getBrands'])
  },
  mounted() {
    this.getBrands()
  }
}
</script>
