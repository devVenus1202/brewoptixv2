import Axios from 'axios'

export default {
  getBrands() {
    return Axios.get('/brands')
  },
  getBrand(entityID) {
    return Axios.get(`/brands/${entityID}`)
  }
}
