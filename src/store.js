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
    },
    updateSelectedBrand(state, data) {
      state.selectedBrand = data
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
      Api.getBrands()
        .then((res) => {
          context.commit('updateBrands', res.data)
          const selectedIndex = res.data.findIndex((item) => {
            return item.entity_id === data.id
          })
          context.commit('updateSelectedBrand', res.data[selectedIndex])
        })
        .catch((e) => {
          console.log('error while get /brands/id', e)
        })

      /***
       * It seems that backed response is String
       *
       */
      // Api.getBrand(data.id)
      //   .then((res) => {
      //     context.commit('updateSelectedBrand', res.data)
      //     console.log(res.data.replace(/\n/g, ''))
      //     console.log(typeof res.data)
      //     console.log(
      //       'selectedBrand',
      //       JSON.parse(res.data.replace(/\n/g, '').replace(/\t/g, ''))
      //     )
      //   })
      //   .catch((e) => {
      //     console.log('error while get /brands/id', e)
      //   })
    }
  },
  getters: {
    brands: (state) => state.brandsList,
    selectedBrand: (state) => state.selectedBrand
  }
})
