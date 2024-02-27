import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  state() {
    return {
      userId: 'c3'
    }
  },
  getters: getters,
  mutations: mutations,
  actions: actions
}
