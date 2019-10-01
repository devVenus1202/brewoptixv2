<template>
  <v-container>
    <div>
      <h1 class="display-3">
        {{ selectedBrand.name }}
      </h1>
    </div>
    <v-divider></v-divider>
    <div
      v-for="registration in selectedBrand.state_registrations"
      :key="registration.state"
    >
      <p>
        <b>{{ registration.state }}</b> :
        <span>{{ registration.registrationNumber }}</span>
      </p>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Detail',
  data: () => ({}),
  computed: {
    ...mapGetters(['selectedBrand']),
  },
  mounted() {
    console.log('id', this.$route.params.id)
    this.getBrand({ id: this.$route.params.id })
  },
  methods: {
    ...mapActions(['getBrand']),
  },
}
</script>

<style lang="scss" scoped></style>
