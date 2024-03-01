export default {
  async login(context, payload) {
    context.dispatch('authentication', {
      ...payload,
      mode: 'login'
    })
  },
  async signup(context, payload) {
    context.dispatch('authentication', {
      ...payload,
      mode: 'signup'
    })
  },
  async authentication(context, payload) {
    const mode = payload.mode
    const key = context.state.apiKey
    const url = mode === 'login' ? context.state.signinUrl : context.state.signupUrl

    const response = await fetch(`${url}?key=${key}`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(
        responseData.error.message || 'Failed to authenticate. Check your login data!'
      )
      throw error
    }

    console.log({
      mode: mode,
      responseData: responseData
    })

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null
      })
    }
  },
  logout(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    })
  }
}
