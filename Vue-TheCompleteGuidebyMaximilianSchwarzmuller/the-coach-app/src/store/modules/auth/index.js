import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  state() {
    return {
      apiKey: 'AIzaSyD5RoVZL0jhgo5zwUNggDoHC9v-eCLNIdo',
      signupUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
      signinUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
      userId: null,
      token: null,
      didAutoLogout: false
    }
  },
  getters: getters,
  mutations: mutations,
  actions: actions
}
