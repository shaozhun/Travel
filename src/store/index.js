import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '广州',
    cityId: localStorage.cityId || '270'
  },
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity (state, cityData) {
      state.city = cityData.city
      localStorage.city = cityData.city
      localStorage.cityId = cityData.id
    }
  }
})
