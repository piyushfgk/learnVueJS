import { createStore } from 'vuex'

import coachesModule from './modules/coaches'
import { resolveTypeElements } from 'vue/compiler-sfc'

const store = createStore({
  modules: {
    coaches: coachesModule
  },
  state() {
    return {
      userId: 'c3'
    }
  },
  getters: {
    userId(state) {
      return state.userId
    }
  }
})

export default store
