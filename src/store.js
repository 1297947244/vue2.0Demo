import Vue from 'vue'
import Vuex from 'vuex'
import common from './common/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common
  }
})

export default store
