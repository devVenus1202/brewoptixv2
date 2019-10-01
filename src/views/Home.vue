<template>
  <v-container>
    <v-layout>
      <v-flex v-for="brand in brands" :key="brand.user_id">
        <router-link :to="{ name: 'detail', params: { id: brand.entity_id } }">
          <v-card max-width="344" class="mx-auto" @click="getBrandDetail(brand.entity_id)">
            <v-card-title>{{ brand.name }}</v-card-title>

            <v-card-text>
              <span>The number of state registrations</span> :
              <span>{{ brand.state_registrations.length }}</span>
            </v-card-text>
          </v-card>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapGetters(['brands']),
  },
  methods: {
    ...mapActions(['getBrands']),
    getBrandDetail(entityID) {
      console.log('Brand Clicked ', entityID)
      this.$router.push({ path: entityID })
    },
  },
  mounted() {
    this.getBrands()
  },
}
</script>
