import Vue from 'vue'
import Vuex from 'vuex'

import Api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brandsList: [],
    selectedBrand: null
  },
  mutations: {
    updateBrands(state, data) {
      state.brandsList = data
    }
  },
  actions: {
    getBrands(context) {
      Api.getBrands()
        .then((res) => {
          context.commit('updateBrands', res.data)
        })
        .catch((e) => {
          console.log('error getting response for /brands', { e })
        })
    },
    getBrand(context, data) {
      Api.getBrand(data.id)
        .then((res) => {
          console.log('brand', res.data)
        })
        .catch((e) => {
          console.log('error while get /brands/id', e)
        })
    }
  },
  getters: {
    brands: (state) => state.brandsList
  }
})
